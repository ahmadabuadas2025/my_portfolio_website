#!/usr/bin/env python3
"""
Script to extract text from PDF resume and help populate resumeData.js
Run: python extract_resume.py
"""

try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False
    print("PyPDF2 not installed. Installing...")
    import subprocess
    subprocess.check_call(["pip", "install", "PyPDF2"])
    import PyPDF2
    HAS_PYPDF2 = True

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF file"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return None
    return text

def main():
    pdf_path = "Ahmad_data_engineer_2025.pdf"
    print(f"Extracting text from {pdf_path}...")
    
    text = extract_text_from_pdf(pdf_path)
    
    if text:
        # Save extracted text to a file
        with open("extracted_resume_text.txt", "w", encoding="utf-8") as f:
            f.write(text)
        
        print("\n" + "="*60)
        print("EXTRACTED RESUME TEXT:")
        print("="*60)
        print(text[:2000])  # Print first 2000 characters
        print("\n... (full text saved to extracted_resume_text.txt)")
        print("\n" + "="*60)
        print("\n✅ Text extracted successfully!")
        print("📄 Full text saved to: extracted_resume_text.txt")
        print("\n📝 Next steps:")
        print("1. Review extracted_resume_text.txt")
        print("2. Update src/data/resumeData.js with your information")
        print("3. Add your profile photo to public/images/profile.jpg")
    else:
        print("❌ Failed to extract text from PDF")

if __name__ == "__main__":
    main()

