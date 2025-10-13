# Javi Aparicio Foto WordPress Theme

A professional photography portfolio WordPress theme converted from Jekyll, featuring responsive design, multi-language support, and modern functionality.

## Features

- **Responsive Design**: Mobile-first approach with hamburger menu for mobile devices
- **Custom Post Types**: Portraits and Events for organizing photography content
- **Multi-language Support**: Built-in support for English, Spanish, and German
- **Custom Post Types**: Dedicated content types for portraits and events
- **SEO Ready**: Clean, semantic HTML structure
- **Customizer Integration**: Easy theme customization through WordPress Customizer

## Installation

### Method 1: Upload Theme Files

1. Download the theme files
2. Upload the `javi-aparicio-foto` folder to `/wp-content/themes/` directory
3. Activate the theme from WordPress Admin → Appearance → Themes

### Method 2: WordPress Admin Upload

1. Go to WordPress Admin → Appearance → Themes
2. Click "Add New" → "Upload Theme"
3. Upload the theme ZIP file
4. Activate the theme

## Setup Instructions

### 1. Initial Configuration

After activating the theme:

1. **Set up Menus**:
   - Go to Appearance → Menus
   - Create a new menu called "Primary Menu"
   - Add pages: Home, Portraits, Events, Pricing, Contact
   - Assign to "Primary Menu" location

2. **Create Footer Menu**:
   - Create another menu for footer links
   - Add: Legal, Terms and Conditions, Privacy Policy, Sitemap
   - Assign to "Footer Menu" location

### 2. Customizer Settings

Go to Appearance → Customize → Theme Options:

- **Phone Number**: Add your phone number
- **Address**: Add your business address

### 3. Content Import

The theme includes a content import tool:

1. Go to Tools → Import Jekyll Content
2. Follow the step-by-step import process:
   - Import Portraits
   - Import Events
   - Create Pages

### 4. Multi-language Setup

#### Option A: WPML (Recommended)
1. Install WPML plugin
2. Configure languages (English, Spanish, German)
3. Translate content using WPML interface

#### Option B: Polylang
1. Install Polylang plugin
2. Set up languages
3. Create translations for each language

#### Option C: Manual Translation
1. Use the provided `.pot` file in `/languages/` directory
2. Create translation files for each language
3. Place in `/languages/` directory

### 5. Adding Content

#### Portraits Content
1. Go to Portraits → Add New
2. Add title and featured image
3. Fill in multi-language titles in the meta box
4. Publish

#### Events Content
1. Go to Events → Add New
2. Add title and featured image
3. Fill in multi-language titles in the meta box
4. Publish

#### Pages
Create the following pages with the specified templates:

- **Contact Page**: Standard page for contact information
- **Pricing Page**: Use "Pricing Page" template
- **Legal Pages**: Create standard pages for legal content

### 6. Image Optimization

For best performance:

1. **Image Sizes**: The theme creates custom image sizes:
   - `about-image`: 300x300px (about section)

2. **WebP Support**: Use WebP format for better compression

## File Structure

```
wordpress-theme/
├── style.css                 # Theme information
├── functions.php             # Theme functions and features
├── index.php                 # Main template
├── header.php                # Header template
├── footer.php                # Footer template
├── single.php                # Single post template
├── page.php                  # Page template
├── page-pricing.php          # Pricing page template
├── archive-portraits.php     # Portraits archive
├── archive-events.php        # Events archive
├── assets/
│   ├── css/
│   │   └── main.css          # Main stylesheet
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   ├── fonts/                # Custom fonts
│   └── images/               # Theme images
├── languages/
│   └── javi-aparicio-foto.pot # Translation template
└── import-content.php        # Content import tool
```

## Customization

### Colors and Styling

The theme uses CSS custom properties for easy color customization. Main colors:

- Background: `#ffffff`
- Text: `#666666`
- Accent: `#006fb7`
- Sidebar: `#f8f8f8`

### Adding Custom CSS

1. Go to Appearance → Customize → Additional CSS
2. Add your custom styles

### Child Theme

For extensive customizations, create a child theme:

1. Create a new folder: `javi-aparicio-foto-child`
2. Add `style.css` with theme information
3. Add `functions.php` to enqueue parent styles

## Performance Optimization

### Recommended Plugins

- **Caching**: WP Rocket, W3 Total Cache, or WP Super Cache
- **Image Optimization**: Smush, ShortPixel, or WebP Express
- **SEO**: Yoast SEO or RankMath
- **Security**: Wordfence or Sucuri

### Best Practices

1. **Image Optimization**: Compress images before upload
2. **Caching**: Enable caching for better performance
3. **CDN**: Use a CDN for faster image delivery
4. **Database**: Regular database optimization

## Troubleshooting

### Common Issues

1. **Menu Not Showing**: Ensure menus are assigned to correct locations
2. **Images Not Loading**: Check image paths and permissions
3. **JavaScript Issues**: Verify JavaScript is enabled
4. **Mobile Menu Issues**: Clear cache and check responsive settings

### Debug Mode

Enable WordPress debug mode in `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

## Support

For theme support and customization:

- **Documentation**: Check this README file
- **WordPress Codex**: For WordPress-specific questions
- **Theme Customization**: Use WordPress Customizer

## Changelog

### Version 1.0.0
- Initial release
- Converted from Jekyll to WordPress
- Added custom post types for galleries
- Implemented multi-language support
- Added responsive design
- Clean, semantic HTML structure

## License

This theme is licensed under the GPL v2 or later.

## Credits

- **Original Jekyll Site**: Javi Aparicio
- **WordPress Conversion**: AI Assistant
- **Fonts**: Roboto Mono (Google Fonts)
- **Icons**: Custom social media icons

---

**Note**: This theme is specifically designed for Javi Aparicio's photography portfolio. For commercial use or distribution, please ensure you have the appropriate rights and permissions.
