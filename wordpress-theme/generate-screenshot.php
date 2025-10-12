<?php
/**
 * Generate Theme Screenshot
 * 
 * This script creates a screenshot.png file for the WordPress theme
 * Run this once to generate the theme preview image
 */

// Check if GD extension is available
if (!extension_loaded('gd')) {
    die('GD extension is required to generate the screenshot.');
}

// Create a 1200x900 image (WordPress recommended size)
$width = 1200;
$height = 900;

// Create image
$image = imagecreatetruecolor($width, $height);

// Define colors
$bg_color = imagecolorallocate($image, 248, 248, 248);
$sidebar_color = imagecolorallocate($image, 44, 44, 44);
$white = imagecolorallocate($image, 255, 255, 255);
$text_color = imagecolorallocate($image, 51, 51, 51);
$gray = imagecolorallocate($image, 102, 102, 102);
$light_gray = imagecolorallocate($image, 240, 240, 240);
$blue = imagecolorallocate($image, 0, 124, 186);

// Fill background
imagefill($image, 0, 0, $bg_color);

// Draw sidebar (300px wide)
imagefilledrectangle($image, 0, 0, 300, $height, $sidebar_color);

// Draw content area
imagefilledrectangle($image, 300, 0, $width, $height, $white);

// Add sidebar content
$font_size = 5;

// Logo
imagestring($image, $font_size, 20, 50, "Javi Aparicio Foto", $white);
imagestring($image, 3, 20, 80, "Professional Photography", $white);

// Navigation menu
$menu_items = ["Home", "Portraits", "Events", "Pricing", "Contact"];
$y_pos = 150;
foreach ($menu_items as $item) {
    imagestring($image, 4, 20, $y_pos, $item, $white);
    $y_pos += 40;
}

// Add content area
imagestring($image, $font_size, 350, 100, "Capturing Authentic Moments", $text_color);
imagestring($image, 3, 350, 130, "Professional photography services in Bern, Switzerland", $gray);

// Draw gallery placeholders
for ($i = 0; $i < 6; $i++) {
    $x = 350 + ($i % 3) * 200;
    $y = 200 + intval($i / 3) * 150;
    
    // Draw gallery item background
    imagefilledrectangle($image, $x, $y, $x + 150, $y + 100, $light_gray);
    
    // Draw border
    imagerectangle($image, $x, $y, $x + 150, $y + 100, $gray);
    
    // Add text
    $item_text = ($i < 3) ? "Portrait " . ($i + 1) : "Event " . ($i - 2);
    imagestring($image, 2, $x + 50, $y + 40, $item_text, $gray);
}

// Add about section
imagefilledrectangle($image, 350, 500, 1000, 600, $light_gray);
imagestring($image, 4, 370, 520, "About Javi Aparicio", $text_color);
imagestring($image, 3, 370, 550, "Portrait photographer based in Bern, Switzerland", $gray);

// Add contact section
imagefilledrectangle($image, 350, 650, 1000, 750, $sidebar_color);
imagestring($image, 4, 370, 670, "Contact Information", $white);
imagestring($image, 3, 370, 700, "info@javiapariciofoto.ch", $white);

// Add theme badge
imagefilledrectangle($image, 1000, 20, 1150, 50, $blue);
imagestring($image, 3, 1020, 35, "WordPress Theme", $white);

// Save image
$screenshot_path = __DIR__ . '/screenshot.png';
imagepng($image, $screenshot_path);

// Clean up
imagedestroy($image);

echo "Screenshot generated successfully at: " . $screenshot_path . "\n";
echo "File size: " . filesize($screenshot_path) . " bytes\n";
echo "Image dimensions: {$width}x{$height} pixels\n";
?>
