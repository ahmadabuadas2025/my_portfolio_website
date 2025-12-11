# How to Add Your Profile Photo

## Quick Steps

1. **Find your photo file** (should be a JPG, PNG, or JPEG file)

2. **Copy or move your photo** to the `public/images/` folder

3. **Rename it to `profile.jpg`** (or update the path in `src/data/resumeData.js`)

4. **Recommended photo specifications:**
   - Format: JPG or PNG
   - Size: 400x400px or larger (square format works best)
   - File size: Under 2MB for faster loading
   - Professional headshot recommended

## Step-by-Step Instructions

### Option 1: Using File Explorer (Windows)

1. Open File Explorer
2. Navigate to: `C:\Users\Ahmad Abu Adas\portfolio_website\public\images\`
3. Copy your photo file into this folder
4. Rename it to `profile.jpg`

### Option 2: Using Command Line

```powershell
# Navigate to your project folder
cd "C:\Users\Ahmad Abu Adas\portfolio_website"

# Copy your photo (replace "path\to\your\photo.jpg" with your actual photo path)
copy "path\to\your\photo.jpg" "public\images\profile.jpg"
```

### Option 3: Drag and Drop

1. Open the folder: `public\images\` in File Explorer
2. Drag your photo file into this folder
3. Rename it to `profile.jpg`

## Verify It's Working

After adding your photo:
1. The website should automatically reload (if dev server is running)
2. Check the Hero section - your photo should appear
3. If it doesn't show, check the browser console for errors

## Troubleshooting

- **Photo not showing?** 
  - Make sure the file is named exactly `profile.jpg` (case-sensitive)
  - Check that it's in `public/images/` folder
  - Restart the dev server: `npm run dev`

- **Photo looks stretched?**
  - Use a square photo (same width and height)
  - Recommended: 400x400px or 600x600px

- **File too large?**
  - Compress the image using an online tool or image editor
  - Keep it under 2MB for best performance

