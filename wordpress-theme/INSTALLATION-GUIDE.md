# WordPress Theme Installation Guide

## Prerequisites ✅

- ✅ PHP installed (you just did this!)
- WordPress installation
- Web server (Apache/Nginx)
- Database (MySQL/MariaDB)

## Step-by-Step Installation

### 1. WordPress Setup

If you don't have WordPress installed yet:

1. **Download WordPress**: Go to [wordpress.org](https://wordpress.org/download/) and download the latest version
2. **Extract**: Extract the WordPress files to your web server directory
3. **Database Setup**: Create a MySQL database for WordPress
4. **Install**: Run the WordPress installation wizard

### 2. Theme Installation

1. **Upload Theme**:
   ```bash
   # Copy the theme folder to WordPress themes directory
   cp -r wordpress-theme /path/to/wordpress/wp-content/themes/javi-aparicio-foto
   ```

2. **Activate Theme**:
   - Go to WordPress Admin → Appearance → Themes
   - Find "Javi Aparicio Foto" theme
   - Click "Activate"

### 3. Initial Configuration

After activating the theme, you'll see a setup notice. Follow these steps:

#### A. Create Menus
1. Go to **Appearance → Menus**
2. Create a new menu called "Primary Menu"
3. Add these pages:
   - Home
   - Portraits
   - Events  
   - Pricing
   - Contact
4. Assign to "Primary Menu" location

#### B. Create Footer Menu
1. Create another menu called "Footer Menu"
2. Add these pages:
   - Legal
   - Terms and Conditions
   - Privacy Policy
   - Sitemap
3. Assign to "Footer Menu" location

#### C. Configure Theme Options
1. Go to **Appearance → Customize → Theme Options**
2. Set your contact information:
   - **Contact Email**: info@javiapariciofoto.ch
   - **Phone Number**: +41 77 231 12 63
   - **Address**: Stauffacherstrasse 44, 3014 Bern, Switzerland

### 4. Content Import

#### A. Upload Your Images
1. Go to **Media → Add New**
2. Upload all your images from the Jekyll site:
   - Portraits: `assets/images/portfolio/portraits/`
   - Events: `assets/images/portfolio/events/`
   - About images: `assets/images/about/`

#### B. Import Content Using the Built-in Tool
1. Go to **Tools → Import Jekyll Content**
2. Follow the step-by-step process:
   - **Step 1**: Import Portraits (click the button)
   - **Step 2**: Import Events (click the button)  
   - **Step 3**: Create Pages (click the button)

#### C. Manual Content Setup (Alternative)
If the import tool doesn't work, you can manually create content:

**Portraits Gallery:**
1. Go to **Portraits → Add New**
2. For each portrait:
   - Add title
   - Set featured image
   - Fill in multi-language titles in the meta box
   - Publish

**Events Gallery:**
1. Go to **Events → Add New**
2. For each event:
   - Add title
   - Set featured image
   - Fill in multi-language titles in the meta box
   - Publish

### 5. Create Essential Pages

Create these pages with the specified templates:

1. **Contact Page**:
   - Create new page called "Contact"
   - Set template to "Contact Page"
   - Add your contact information

2. **Pricing Page**:
   - Create new page called "Pricing"
   - Set template to "Pricing Page"
   - Add your pricing information

3. **Legal Pages**:
   - Create pages for Legal, Terms and Conditions, Privacy Policy
   - Add appropriate content

### 6. Multi-language Setup (Optional)

#### Option A: WPML (Recommended)
1. Install WPML plugin
2. Configure languages (English, Spanish, German)
3. Translate content using WPML interface

#### Option B: Polylang
1. Install Polylang plugin
2. Set up languages
3. Create translations for each language

### 7. Final Configuration

#### A. Set Homepage
1. Go to **Settings → Reading**
2. Set "Your homepage displays" to "A static page"
3. Select your homepage

#### B. Configure Permalinks
1. Go to **Settings → Permalinks**
2. Select "Post name" structure
3. Save changes

#### C. SEO Setup
1. Install an SEO plugin (Yoast SEO or RankMath)
2. Configure basic SEO settings
3. Set up Google Analytics (if needed)

## Troubleshooting

### Common Issues

1. **Theme Not Showing**:
   - Check file permissions
   - Ensure theme is in correct directory
   - Clear any caching

2. **Images Not Loading**:
   - Check image paths
   - Verify file permissions
   - Ensure images are uploaded to Media Library

3. **Menu Not Working**:
   - Ensure menus are assigned to correct locations
   - Check if pages exist
   - Clear cache

4. **Import Tool Not Working**:
   - Check PHP error logs
   - Ensure proper file permissions
   - Try manual content creation

### File Permissions

Set correct permissions:
```bash
# Set directory permissions
find /path/to/wordpress/wp-content/themes/javi-aparicio-foto -type d -exec chmod 755 {} \;

# Set file permissions  
find /path/to/wordpress/wp-content/themes/javi-aparicio-foto -type f -exec chmod 644 {} \;
```

### PHP Requirements

Ensure your server meets these requirements:
- PHP 7.4 or higher
- MySQL 5.6 or higher
- Apache/Nginx with mod_rewrite enabled

## Performance Optimization

### Recommended Plugins

1. **Caching**: WP Rocket, W3 Total Cache, or WP Super Cache
2. **Image Optimization**: Smush, ShortPixel, or WebP Express
3. **SEO**: Yoast SEO or RankMath
4. **Security**: Wordfence or Sucuri

### Best Practices

1. **Image Optimization**:
   - Compress images before upload
   - Use WebP format when possible
   - Set appropriate image sizes

2. **Caching**:
   - Enable caching for better performance
   - Use a CDN for faster image delivery

3. **Database**:
   - Regular database optimization
   - Remove unused plugins and themes

## Support

If you encounter any issues:

1. **Check Error Logs**: Look in your server error logs
2. **WordPress Debug**: Enable WordPress debug mode
3. **Theme Documentation**: Refer to the README.md file
4. **WordPress Codex**: For WordPress-specific questions

## Next Steps

After successful installation:

1. **Test All Functionality**: Check galleries, contact forms, mobile responsiveness
2. **SEO Optimization**: Set up meta descriptions, titles, and structured data
3. **Performance Testing**: Test site speed and optimize as needed
4. **Backup Setup**: Configure regular backups
5. **Security**: Set up security measures and monitoring

---

**Your WordPress photography portfolio is now ready!** 🎉

For any questions or issues, refer to the theme documentation or WordPress support resources.
