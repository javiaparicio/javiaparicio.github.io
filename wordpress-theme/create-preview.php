<?php
/**
 * Create Theme Preview Image
 * 
 * This script creates a preview image for the WordPress theme
 * Run this once to generate the screenshot.png file
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class JaviAparicioPreviewGenerator {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_preview_menu'));
        add_action('wp_ajax_generate_preview', array($this, 'generate_preview'));
    }
    
    public function add_preview_menu() {
        add_management_page(
            'Generate Theme Preview',
            'Generate Preview',
            'manage_options',
            'generate-preview',
            array($this, 'preview_page')
        );
    }
    
    public function preview_page() {
        ?>
        <div class="wrap">
            <h1>📸 Generate Theme Preview</h1>
            <p>This tool will create a preview image (screenshot.png) for your WordPress theme.</p>
            
            <div class="preview-generator">
                <h2>Theme Preview Generator</h2>
                <p>Click the button below to generate a preview image of your photography portfolio theme.</p>
                
                <button id="generate-preview" class="button button-primary button-large">
                    📸 Generate Preview Image
                </button>
                
                <div id="preview-status"></div>
                
                <div class="preview-info">
                    <h3>About Theme Previews</h3>
                    <ul>
                        <li><strong>File Name:</strong> screenshot.png</li>
                        <li><strong>Size:</strong> 1200x900 pixels (recommended)</li>
                        <li><strong>Location:</strong> Theme root directory</li>
                        <li><strong>Format:</strong> PNG format</li>
                    </ul>
                    
                    <h3>What the Preview Shows</h3>
                    <ul>
                        <li>Homepage layout with sidebar</li>
                        <li>Portrait gallery showcase</li>
                        <li>Mobile-responsive design</li>
                        <li>Professional photography portfolio</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <style>
        .preview-generator {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .preview-info {
            margin-top: 30px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #ddd;
        }
        
        .preview-info h3 {
            margin-top: 0;
            color: #333;
        }
        
        .preview-info ul {
            margin: 10px 0;
        }
        
        .preview-info li {
            margin: 5px 0;
        }
        
        .status-success {
            color: #46b450;
            font-weight: bold;
            margin-top: 15px;
        }
        
        .status-error {
            color: #dc3232;
            font-weight: bold;
            margin-top: 15px;
        }
        </style>
        
        <script>
        jQuery(document).ready(function($) {
            $('#generate-preview').click(function() {
                $(this).prop('disabled', true).text('🔄 Generating...');
                
                $.post(ajaxurl, {
                    action: 'generate_preview',
                    nonce: '<?php echo wp_create_nonce('generate_preview'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#preview-status').html('<p class="status-success">✅ ' + response.data.message + '</p>');
                    } else {
                        $('#preview-status').html('<p class="status-error">❌ Error: ' + response.data + '</p>');
                    }
                    
                    $('#generate-preview').prop('disabled', false).text('📸 Generate Preview Image');
                });
            });
        });
        </script>
        <?php
    }
    
    public function generate_preview() {
        check_ajax_referer('generate_preview', 'nonce');
        
        // Create a simple HTML preview
        $preview_html = $this->create_preview_html();
        
        // Save the preview HTML
        $preview_file = get_template_directory() . '/preview.html';
        file_put_contents($preview_file, $preview_html);
        
        // Create a simple preview image using GD (if available)
        if (extension_loaded('gd')) {
            $this->create_preview_image();
        }
        
        wp_send_json_success(array(
            'message' => 'Preview generated successfully! Check your theme directory for screenshot.png'
        ));
    }
    
    private function create_preview_html() {
        return '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javi Aparicio Foto - WordPress Theme Preview</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: "Roboto Mono", monospace;
            background: #f8f8f8;
            color: #333;
        }
        
        .preview-container {
            display: flex;
            min-height: 100vh;
            background: #fff;
        }
        
        .sidebar {
            width: 300px;
            background: #2c2c2c;
            color: white;
            padding: 20px;
            position: fixed;
            height: 100vh;
            overflow-y: auto;
        }
        
        .logo {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .logo h1 {
            font-size: 24px;
            margin: 0;
            color: #fff;
        }
        
        .logo p {
            font-size: 14px;
            color: #ccc;
            margin: 5px 0 0 0;
        }
        
        .nav-menu {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .nav-menu li {
            margin: 10px 0;
        }
        
        .nav-menu a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid #444;
        }
        
        .nav-menu a:hover {
            color: #007cba;
        }
        
        .content {
            margin-left: 300px;
            padding: 40px;
            max-width: 800px;
        }
        
        .hero-section {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .hero-section h2 {
            font-size: 48px;
            margin: 0 0 20px 0;
            color: #2c2c2c;
        }
        
        .hero-section p {
            font-size: 18px;
            color: #666;
            margin: 0 0 30px 0;
        }
        
        .gallery-preview {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }
        
        .gallery-item {
            background: #f0f0f0;
            height: 200px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
            position: relative;
            overflow: hidden;
        }
        
        .gallery-item::before {
            content: "📸";
            font-size: 48px;
            opacity: 0.3;
        }
        
        .gallery-item:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }
        
        .about-section {
            background: #f8f8f8;
            padding: 40px;
            border-radius: 8px;
            margin: 40px 0;
        }
        
        .about-section h3 {
            font-size: 24px;
            margin: 0 0 20px 0;
            color: #2c2c2c;
        }
        
        .contact-info {
            background: #2c2c2c;
            color: white;
            padding: 30px;
            border-radius: 8px;
            margin: 40px 0;
        }
        
        .contact-info h3 {
            margin: 0 0 20px 0;
            color: #fff;
        }
        
        .contact-info p {
            margin: 10px 0;
            color: #ccc;
        }
        
        .mobile-menu {
            display: none;
        }
        
        @media (max-width: 768px) {
            .sidebar {
                display: none;
            }
            
            .content {
                margin-left: 0;
                padding: 20px;
            }
            
            .mobile-menu {
                display: block;
                background: #2c2c2c;
                color: white;
                padding: 15px;
                text-align: center;
            }
            
            .hero-section h2 {
                font-size: 32px;
            }
            
            .gallery-preview {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
        }
    </style>
</head>
<body>
    <div class="preview-container">
        <div class="sidebar">
            <div class="logo">
                <h1>Javi Aparicio Foto</h1>
                <p>Professional Photography</p>
            </div>
            <nav>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portraits">Portraits</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        
        <div class="content">
            <div class="mobile-menu">
                <h1>Javi Aparicio Foto</h1>
                <p>Professional Photography</p>
            </div>
            
            <div class="hero-section">
                <h2>Capturing Authentic Moments</h2>
                <p>Professional photography services in Bern, Switzerland</p>
            </div>
            
            <div class="gallery-preview">
                <div class="gallery-item">Portrait 1</div>
                <div class="gallery-item">Portrait 2</div>
                <div class="gallery-item">Portrait 3</div>
                <div class="gallery-item">Event 1</div>
                <div class="gallery-item">Event 2</div>
                <div class="gallery-item">Event 3</div>
            </div>
            
            <div class="about-section">
                <h3>About Javi Aparicio</h3>
                <p>Portrait photographer based in Bern, Switzerland. Specializing in authentic moments and professional photography services.</p>
            </div>
            
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> info@javiapariciofoto.ch</p>
                <p><strong>Phone:</strong> +41 77 231 12 63</p>
                <p><strong>Address:</strong> Stauffacherstrasse 44, 3014 Bern, Switzerland</p>
            </div>
        </div>
    </div>
</body>
</html>';
    }
    
    private function create_preview_image() {
        // Create a 1200x900 image
        $width = 1200;
        $height = 900;
        
        // Create image
        $image = imagecreatetruecolor($width, $height);
        
        // Define colors
        $bg_color = imagecolorallocate($image, 248, 248, 248);
        $sidebar_color = imagecolorallocate($image, 44, 44, 44);
        $text_color = imagecolorallocate($image, 51, 51, 51);
        $white = imagecolorallocate($image, 255, 255, 255);
        $gray = imagecolorallocate($image, 102, 102, 102);
        
        // Fill background
        imagefill($image, 0, 0, $bg_color);
        
        // Draw sidebar
        imagefilledrectangle($image, 0, 0, 300, $height, $sidebar_color);
        
        // Draw content area
        imagefilledrectangle($image, 300, 0, $width, $height, $white);
        
        // Add text (simplified for image creation)
        $font_size = 5;
        
        // Sidebar text
        imagestring($image, $font_size, 20, 50, "Javi Aparicio Foto", $white);
        imagestring($image, 3, 20, 80, "Professional Photography", $white);
        
        // Content text
        imagestring($image, $font_size, 350, 100, "Capturing Authentic Moments", $text_color);
        imagestring($image, 3, 350, 130, "Professional photography services in Bern, Switzerland", $gray);
        
        // Draw some gallery placeholders
        for ($i = 0; $i < 6; $i++) {
            $x = 350 + ($i % 3) * 200;
            $y = 200 + intval($i / 3) * 150;
            imagefilledrectangle($image, $x, $y, $x + 150, $y + 100, $gray);
            imagestring($image, 2, $x + 50, $y + 40, "Photo " . ($i + 1), $white);
        }
        
        // Save image
        $screenshot_path = get_template_directory() . '/screenshot.png';
        imagepng($image, $screenshot_path);
        imagedestroy($image);
    }
}

// Initialize the preview generator
new JaviAparicioPreviewGenerator();
