# Resume Content Extraction Guide

Since the PDF is in binary format, here's a guide to help you extract and populate your resume data.

## Quick Steps

1. Open your resume PDF (`Ahmad_data_engineer_2025.pdf`)
2. Open `src/data/resumeData.js`
3. Replace the placeholder content with your actual information

## What to Extract

### Personal Information
- Full Name
- Professional Title
- Email (already found: ahmadabuadas2013@gmail.com)
- Phone Number
- Location
- Professional Summary (2-3 sentences)

### Experience
For each position, extract:
- Job Title
- Company Name
- Employment Period (e.g., "2021 - 2023")
- Location
- Job Description
- Key Achievements (3-5 bullet points)
- Technologies Used

### Education
For each degree, extract:
- Degree Name
- Institution Name
- Period (e.g., "2018 - 2020")
- Location
- GPA (if applicable)
- Notable Achievements

### Skills
List all your skills with proficiency levels (0-100):
- Programming Languages
- Frameworks & Tools
- Cloud Platforms
- Databases
- Other Tools

### Projects
For each project, extract:
- Project Title
- Description
- Technologies Used
- GitHub Link (if available)
- Demo Link (if available)
- Key Highlights/Achievements

### Certifications
- Certification Name
- Issuing Organization
- Date Obtained
- Credential ID (if applicable)
- Verification Link

### Achievements
- Awards
- Publications
- Speaking Engagements
- Open Source Contributions
- Other Notable Achievements

## Tips

1. **Start with the most important sections**: Personal Info → Experience → Skills
2. **Be specific**: Use numbers and metrics where possible (e.g., "Reduced costs by 40%")
3. **Keep it concise**: Aim for 2-3 sentences for descriptions
4. **Update regularly**: Keep your portfolio data fresh

## Profile Image

1. Add your profile photo to `public/images/profile.jpg`
2. Recommended size: 400x400px or larger (square format)
3. Use a professional headshot

## Social Links

Update your social media links in `resumeData.js`:
- LinkedIn
- GitHub
- Twitter (optional)

---

**Note**: The email address `ahmadabuadas2013@gmail.com` was automatically extracted from your PDF. Please verify and update all other information manually.

