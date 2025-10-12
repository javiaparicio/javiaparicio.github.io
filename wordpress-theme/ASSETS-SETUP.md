# Assets Setup Guide

## 📁 **Required Assets Structure**

You need to create these folders and copy the assets from your Jekyll site:

```
wordpress-theme/
├── assets/
│   ├── css/
│   │   └── main.css (already created)
│   ├── js/
│   │   └── script.js (already created)
│   ├── fonts/          ← CREATE THIS FOLDER
│   │   ├── roboto_mono.woff
│   │   ├── socials.eot
│   │   ├── socials.ttf
│   │   ├── socials.woff
│   │   ├── socials.svg
│   │   └── pixelfed-icon-color.svg
│   └── images/         ← CREATE THIS FOLDER
│       ├── javiAparicioFotoLogo.webp
│       ├── about/
│       │   ├── 001.webp
│       │   └── 015.webp
│       └── portfolio/
│           ├── portraits/
│           │   ├── portraits_002.webp
│           │   ├── portraits_003.webp
│           │   └── ... (all your portrait images)
│           └── events/
│               ├── events_001.webp
│               ├── events_002.webp
│               └── ... (all your event images)
```

## 🔧 **Step-by-Step Setup**

### 1. Create the Assets Folders

```bash
# Navigate to your WordPress theme directory
cd /path/to/wordpress/wp-content/themes/javi-aparicio-foto

# Create the assets directories
mkdir -p assets/fonts
mkdir -p assets/images
mkdir -p assets/images/about
mkdir -p assets/images/portfolio/portraits
mkdir -p assets/images/portfolio/events
```

### 2. Copy Fonts from Jekyll Site

Copy these files from your Jekyll `assets/fonts/` directory:

```bash
# Copy fonts from your Jekyll site
cp /path/to/jekyll/assets/fonts/roboto_mono.woff assets/fonts/
cp /path/to/jekyll/assets/fonts/socials.* assets/fonts/
cp /path/to/jekyll/assets/fonts/pixelfed-icon-color.svg assets/fonts/
```

**Required font files:**
- `roboto_mono.woff` - Main font
- `socials.eot` - Social icons (IE)
- `socials.ttf` - Social icons (TrueType)
- `socials.woff` - Social icons (WebFont)
- `socials.svg` - Social icons (SVG)
- `pixelfed-icon-color.svg` - Pixelfed icon

### 3. Copy Images from Jekyll Site

Copy these files from your Jekyll `assets/images/` directory:

```bash
# Copy logo
cp /path/to/jekyll/assets/images/javiAparicioFotoLogo.webp assets/images/

# Copy about images
cp /path/to/jekyll/assets/images/about/*.webp assets/images/about/

# Copy portfolio images
cp /path/to/jekyll/assets/images/portfolio/portraits/*.webp assets/images/portfolio/portraits/
cp /path/to/jekyll/assets/images/portfolio/events/*.webp assets/images/portfolio/events/
```

### 4. Alternative: Manual Copy

If you prefer to copy manually:

1. **Open your Jekyll site's `assets/` folder**
2. **Copy the entire `fonts/` folder** to `wordpress-theme/assets/fonts/`
3. **Copy the entire `images/` folder** to `wordpress-theme/assets/images/`

## 📋 **File Checklist**

### ✅ **Fonts Required:**
- [ ] `roboto_mono.woff`
- [ ] `socials.eot`
- [ ] `socials.ttf`
- [ ] `socials.woff`
- [ ] `socials.svg`
- [ ] `pixelfed-icon-color.svg`

### ✅ **Images Required:**
- [ ] `javiAparicioFotoLogo.webp` (logo)
- [ ] About images (`001.webp`, `015.webp`)
- [ ] All portrait images (`portraits_002.webp` through `portraits_037.webp`)
- [ ] All event images (`events_001.webp` through `events_013.webp`)

## 🚨 **Important Notes**

### **File Permissions**
After copying, set correct permissions:

```bash
# Set directory permissions
find assets -type d -exec chmod 755 {} \;

# Set file permissions
find assets -type f -exec chmod 644 {} \;
```

### **WordPress Media Library**
After setting up the theme, you'll also need to:

1. **Upload images to WordPress Media Library** for the galleries to work
2. **Set featured images** for each portrait and event post
3. **The theme will automatically use the uploaded images**

## 🔄 **Quick Setup Script**

Here's a script to automate the asset copying:

```bash
#!/bin/bash
# save as setup-assets.sh

# Set your Jekyll site path
JEKYLL_PATH="/path/to/your/jekyll/site"
THEME_PATH="/path/to/wordpress/wp-content/themes/javi-aparicio-foto"

# Create directories
mkdir -p "$THEME_PATH/assets/fonts"
mkdir -p "$THEME_PATH/assets/images/about"
mkdir -p "$THEME_PATH/assets/images/portfolio/portraits"
mkdir -p "$THEME_PATH/assets/images/portfolio/events"

# Copy fonts
cp "$JEKYLL_PATH/assets/fonts/"* "$THEME_PATH/assets/fonts/"

# Copy images
cp "$JEKYLL_PATH/assets/images/javiAparicioFotoLogo.webp" "$THEME_PATH/assets/images/"
cp "$JEKYLL_PATH/assets/images/about/"*.webp "$THEME_PATH/assets/images/about/"
cp "$JEKYLL_PATH/assets/images/portfolio/portraits/"*.webp "$THEME_PATH/assets/images/portfolio/portraits/"
cp "$JEKYLL_PATH/assets/images/portfolio/events/"*.webp "$THEME_PATH/assets/images/portfolio/events/"

# Set permissions
find "$THEME_PATH/assets" -type d -exec chmod 755 {} \;
find "$THEME_PATH/assets" -type f -exec chmod 644 {} \;

echo "Assets copied successfully!"
```

## 🎯 **After Asset Setup**

Once you've copied all the assets:

1. **Activate the theme** in WordPress
2. **Run the Quick Setup** (Tools → Quick Setup)
3. **Upload images to Media Library** (for gallery functionality)
4. **Test the site** to ensure everything loads correctly

## 🔍 **Troubleshooting**

### **Missing Fonts**
If fonts don't load:
- Check file paths in CSS
- Verify file permissions
- Clear browser cache

### **Missing Images**
If images don't display:
- Check file paths
- Verify image files exist
- Check WordPress Media Library

### **Broken Icons**
If social icons don't show:
- Ensure all social font files are copied
- Check CSS font-face declarations
- Verify file permissions

---

**Your WordPress theme will be fully functional once all assets are properly copied!** 🎉
