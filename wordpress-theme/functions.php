<?php
/**
 * Javi Aparicio Foto Theme Functions
 *
 * @package JaviAparicioFoto
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function javi_aparicio_theme_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    
    // Add support for wide and full alignment
    add_theme_support('align-wide');
    
    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'javi-aparicio-foto'),
        'footer' => __('Footer Menu', 'javi-aparicio-foto'),
    ));
    
    // Add image sizes
    add_image_size('gallery-thumb', 350, 350, true);
    add_image_size('gallery-large', 1200, 800, true);
    add_image_size('about-image', 300, 300, true);
}
add_action('after_setup_theme', 'javi_aparicio_theme_setup');

// Enqueue scripts and styles
function javi_aparicio_scripts() {
    // Main stylesheet
    wp_enqueue_style('javi-aparicio-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('javi-aparicio-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');
    
    // Fonts
    wp_enqueue_style('javi-aparicio-fonts', 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap', array(), null);
    
    // JavaScript
    wp_enqueue_script('javi-aparicio-main', get_template_directory_uri() . '/assets/js/script.js', array(), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('javi-aparicio-main', 'javi_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('javi_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'javi_aparicio_scripts');

// Register custom post types
function javi_aparicio_register_post_types() {
    // Portraits Gallery
    register_post_type('portraits', array(
        'labels' => array(
            'name' => __('Portraits', 'javi-aparicio-foto'),
            'singular_name' => __('Portrait', 'javi-aparicio-foto'),
            'add_new' => __('Add New Portrait', 'javi-aparicio-foto'),
            'add_new_item' => __('Add New Portrait', 'javi-aparicio-foto'),
            'edit_item' => __('Edit Portrait', 'javi-aparicio-foto'),
            'new_item' => __('New Portrait', 'javi-aparicio-foto'),
            'view_item' => __('View Portrait', 'javi-aparicio-foto'),
            'search_items' => __('Search Portraits', 'javi-aparicio-foto'),
            'not_found' => __('No portraits found', 'javi-aparicio-foto'),
            'not_found_in_trash' => __('No portraits found in trash', 'javi-aparicio-foto'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-camera',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'rewrite' => array('slug' => 'portraits'),
        'show_in_rest' => true,
    ));
    
    // Events Gallery
    register_post_type('events', array(
        'labels' => array(
            'name' => __('Events', 'javi-aparicio-foto'),
            'singular_name' => __('Event', 'javi-aparicio-foto'),
            'add_new' => __('Add New Event', 'javi-aparicio-foto'),
            'add_new_item' => __('Add New Event', 'javi-aparicio-foto'),
            'edit_item' => __('Edit Event', 'javi-aparicio-foto'),
            'new_item' => __('New Event', 'javi-aparicio-foto'),
            'view_item' => __('View Event', 'javi-aparicio-foto'),
            'search_items' => __('Search Events', 'javi-aparicio-foto'),
            'not_found' => __('No events found', 'javi-aparicio-foto'),
            'not_found_in_trash' => __('No events found in trash', 'javi-aparicio-foto'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'rewrite' => array('slug' => 'events'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'javi_aparicio_register_post_types');

// Add custom fields support
function javi_aparicio_add_meta_boxes() {
    add_meta_box(
        'portrait_details',
        __('Portrait Details', 'javi-aparicio-foto'),
        'javi_aparicio_portrait_meta_box',
        'portraits',
        'normal',
        'high'
    );
    
    add_meta_box(
        'event_details',
        __('Event Details', 'javi-aparicio-foto'),
        'javi_aparicio_event_meta_box',
        'events',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'javi_aparicio_add_meta_boxes');

// Portrait meta box
function javi_aparicio_portrait_meta_box($post) {
    wp_nonce_field('javi_aparicio_save_meta', 'javi_aparicio_meta_nonce');
    
    $title_en = get_post_meta($post->ID, '_portrait_title_en', true);
    $title_es = get_post_meta($post->ID, '_portrait_title_es', true);
    $title_de = get_post_meta($post->ID, '_portrait_title_de', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="portrait_title_en">' . __('Title (English)', 'javi-aparicio-foto') . '</label></th>';
    echo '<td><input type="text" id="portrait_title_en" name="portrait_title_en" value="' . esc_attr($title_en) . '" size="50" /></td></tr>';
    
    echo '<tr><th><label for="portrait_title_es">' . __('Title (Spanish)', 'javi-aparicio-foto') . '</label></th>';
    echo '<td><input type="text" id="portrait_title_es" name="portrait_title_es" value="' . esc_attr($title_es) . '" size="50" /></td></tr>';
    
    echo '<tr><th><label for="portrait_title_de">' . __('Title (German)', 'javi-aparicio-foto') . '</label></th>';
    echo '<td><input type="text" id="portrait_title_de" name="portrait_title_de" value="' . esc_attr($title_de) . '" size="50" /></td></tr>';
    echo '</table>';
}

// Event meta box
function javi_aparicio_event_meta_box($post) {
    wp_nonce_field('javi_aparicio_save_meta', 'javi_aparicio_meta_nonce');
    
    $title_en = get_post_meta($post->ID, '_event_title_en', true);
    $title_es = get_post_meta($post->ID, '_event_title_es', true);
    $title_de = get_post_meta($post->ID, '_event_title_de', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="event_title_en">' . __('Title (English)', 'javi-aparicio-foto') . '</label></th>';
    echo '<td><input type="text" id="event_title_en" name="event_title_en" value="' . esc_attr($title_en) . '" size="50" /></td></tr>';
    
    echo '<tr><th><label for="event_title_es">' . __('Title (Spanish)', 'javi-aparicio-foto') . '</label></th>';
    echo '<td><input type="text" id="event_title_es" name="event_title_es" value="' . esc_attr($title_es) . '" size="50" /></td></tr>';
    
    echo '<tr><th><label for="event_title_de">' . __('Title (German)', 'javi-aparicio-foto') . '</label></th>';
    echo '<td><input type="text" id="event_title_de" name="event_title_de" value="' . esc_attr($title_de) . '" size="50" /></td></tr>';
    echo '</table>';
}

// Save meta box data
function javi_aparicio_save_meta($post_id) {
    if (!isset($_POST['javi_aparicio_meta_nonce']) || !wp_verify_nonce($_POST['javi_aparicio_meta_nonce'], 'javi_aparicio_save_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Save portrait meta
    if (isset($_POST['portrait_title_en'])) {
        update_post_meta($post_id, '_portrait_title_en', sanitize_text_field($_POST['portrait_title_en']));
    }
    if (isset($_POST['portrait_title_es'])) {
        update_post_meta($post_id, '_portrait_title_es', sanitize_text_field($_POST['portrait_title_es']));
    }
    if (isset($_POST['portrait_title_de'])) {
        update_post_meta($post_id, '_portrait_title_de', sanitize_text_field($_POST['portrait_title_de']));
    }
    
    // Save event meta
    if (isset($_POST['event_title_en'])) {
        update_post_meta($post_id, '_event_title_en', sanitize_text_field($_POST['event_title_en']));
    }
    if (isset($_POST['event_title_es'])) {
        update_post_meta($post_id, '_event_title_es', sanitize_text_field($_POST['event_title_es']));
    }
    if (isset($_POST['event_title_de'])) {
        update_post_meta($post_id, '_event_title_de', sanitize_text_field($_POST['event_title_de']));
    }
}
add_action('save_post', 'javi_aparicio_save_meta');

// Customizer settings
function javi_aparicio_customize_register($wp_customize) {
    // Add section for theme options
    $wp_customize->add_section('javi_aparicio_options', array(
        'title' => __('Theme Options', 'javi-aparicio-foto'),
        'priority' => 30,
    ));
    
    // Contact email
    $wp_customize->add_setting('contact_email', array(
        'default' => 'info@javiapariciofoto.ch',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => __('Contact Email', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_options',
        'type' => 'email',
    ));
    
    // Phone number
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+41 77 231 12 63',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone Number', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_options',
        'type' => 'text',
    ));
    
    // Address
    $wp_customize->add_setting('contact_address', array(
        'default' => 'Stauffacherstrasse 44, 3014 Bern, Switzerland',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => __('Address', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_options',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'javi_aparicio_customize_register');

// Helper function to get localized title
function javi_aparicio_get_localized_title($post_id, $post_type) {
    $current_lang = get_locale();
    $title_field = '';
    
    if ($post_type === 'portraits') {
        if (strpos($current_lang, 'es') === 0) {
            $title_field = '_portrait_title_es';
        } elseif (strpos($current_lang, 'de') === 0) {
            $title_field = '_portrait_title_de';
        } else {
            $title_field = '_portrait_title_en';
        }
    } elseif ($post_type === 'events') {
        if (strpos($current_lang, 'es') === 0) {
            $title_field = '_event_title_es';
        } elseif (strpos($current_lang, 'de') === 0) {
            $title_field = '_event_title_de';
        } else {
            $title_field = '_event_title_en';
        }
    }
    
    $localized_title = get_post_meta($post_id, $title_field, true);
    return !empty($localized_title) ? $localized_title : get_the_title($post_id);
}

// Fallback menu for primary navigation
function javi_aparicio_fallback_menu() {
    $menu_items = array(
        array('title' => __('Home', 'javi-aparicio-foto'), 'url' => home_url('/')),
        array('title' => __('Portraits', 'javi-aparicio-foto'), 'url' => get_post_type_archive_link('portraits')),
        array('title' => __('Events', 'javi-aparicio-foto'), 'url' => get_post_type_archive_link('events')),
        array('title' => __('Pricing', 'javi-aparicio-foto'), 'url' => get_permalink(get_page_by_path('pricing'))),
        array('title' => __('Contact', 'javi-aparicio-foto'), 'url' => get_permalink(get_page_by_path('contact'))),
    );
    
    foreach ($menu_items as $item) {
        echo '<li><a href="' . esc_url($item['url']) . '">' . esc_html($item['title']) . '</a></li>';
    }
}

// AJAX handler for loading more images
function javi_aparicio_load_more_images() {
    check_ajax_referer('javi_nonce', 'nonce');
    
    $post_type = sanitize_text_field($_POST['post_type']);
    $page = intval($_POST['page']);
    $posts_per_page = 12;
    $offset = ($page - 1) * $posts_per_page;
    
    $args = array(
        'post_type' => $post_type,
        'posts_per_page' => $posts_per_page,
        'offset' => $offset,
        'post_status' => 'publish',
        'meta_query' => array(
            array(
                'key' => '_thumbnail_id',
                'compare' => 'EXISTS'
            )
        )
    );
    
    $query = new WP_Query($args);
    $html = '';
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            if (has_post_thumbnail()) {
                $localized_title = javi_aparicio_get_localized_title(get_the_ID(), $post_type);
                $thumbnail_id = get_post_thumbnail_id();
                $image_url = wp_get_attachment_image_url($thumbnail_id, 'gallery-large');
                $image_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
                
                $html .= '<img
                    data-src="' . esc_url($image_url) . '"
                    alt="' . esc_attr($image_alt ?: $localized_title) . '"
                    class="gallery-image lazy"
                    data-title="' . esc_attr($localized_title) . '"
                >';
            }
        }
        wp_reset_postdata();
    }
    
    wp_send_json_success(array('html' => $html));
}
add_action('wp_ajax_load_more_images', 'javi_aparicio_load_more_images');
add_action('wp_ajax_nopriv_load_more_images', 'javi_aparicio_load_more_images');

// Add theme support for WPML
function javi_aparicio_wpml_support() {
    if (function_exists('icl_register_string')) {
        icl_register_string('javi-aparicio-foto', 'Site Title', get_bloginfo('name'));
        icl_register_string('javi-aparicio-foto', 'Site Description', get_bloginfo('description'));
    }
}
add_action('init', 'javi_aparicio_wpml_support');

// Include installation script
require_once get_template_directory() . '/install.php';

// Include content import script
require_once get_template_directory() . '/import-content.php';

// Include quick setup script
require_once get_template_directory() . '/quick-setup.php';

// Include preview generator script
require_once get_template_directory() . '/create-preview.php';
