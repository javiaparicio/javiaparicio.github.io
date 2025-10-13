<?php
/**
 * Theme Customizer Options
 * 
 * @package JaviAparicioFoto
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add customizer options
 */
function javi_aparicio_customize_register($wp_customize) {
    
    // Add Theme Options Section
    $wp_customize->add_section('javi_aparicio_options', array(
        'title' => __('Theme Options', 'javi-aparicio-foto'),
        'description' => __('Configure basic theme settings.', 'javi-aparicio-foto'),
        'priority' => 29,
    ));
    
    
    // Add Language Selection Section
    $wp_customize->add_section('javi_aparicio_languages', array(
        'title' => __('Language Selection', 'javi-aparicio-foto'),
        'description' => __('Configure the language selection menu in the sidebar.', 'javi-aparicio-foto'),
        'priority' => 30,
    ));
    
    // Language 1
    $wp_customize->add_setting('language_1_name', array(
        'default' => 'EN',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('language_1_name', array(
        'label' => __('Language 1 Name', 'javi-aparicio-foto'),
        'description' => __('Display name for the first language (e.g., EN, English)', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('language_1_url', array(
        'default' => home_url('/'),
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('language_1_url', array(
        'label' => __('Language 1 URL', 'javi-aparicio-foto'),
        'description' => __('URL for the first language', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'url',
    ));
    
    // Language 2
    $wp_customize->add_setting('language_2_name', array(
        'default' => 'ES',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('language_2_name', array(
        'label' => __('Language 2 Name', 'javi-aparicio-foto'),
        'description' => __('Display name for the second language (e.g., ES, Español)', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('language_2_url', array(
        'default' => home_url('/es/'),
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('language_2_url', array(
        'label' => __('Language 2 URL', 'javi-aparicio-foto'),
        'description' => __('URL for the second language', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'url',
    ));
    
    // Language 3
    $wp_customize->add_setting('language_3_name', array(
        'default' => 'DE',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('language_3_name', array(
        'label' => __('Language 3 Name', 'javi-aparicio-foto'),
        'description' => __('Display name for the third language (e.g., DE, Deutsch)', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('language_3_url', array(
        'default' => home_url('/de/'),
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('language_3_url', array(
        'label' => __('Language 3 URL', 'javi-aparicio-foto'),
        'description' => __('URL for the third language', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'url',
    ));
    
}
add_action('customize_register', 'javi_aparicio_customize_register');


/**
 * Get language options from customizer
 */
function javi_aparicio_get_language_options() {
    $languages = array();
    
    for ($i = 1; $i <= 3; $i++) {
        $name = get_theme_mod("language_{$i}_name", '');
        $url = get_theme_mod("language_{$i}_url", '');
        
        if (!empty($name) && !empty($url)) {
            $languages[] = array(
                'name' => $name,
                'url' => $url,
            );
        }
    }
    
    return $languages;
}

// Polylang Language Selector Settings
function javi_aparicio_polylang_customizer($wp_customize) {
    // Add Polylang section
    $wp_customize->add_section('javi_aparicio_polylang', array(
        'title' => __('Polylang Language Selector', 'javi-aparicio-foto'),
        'description' => __('Configure the language selector display options', 'javi-aparicio-foto'),
        'priority' => 160,
    ));

    // Enable Polylang integration
    $wp_customize->add_setting('polylang_enabled', array(
        'default' => false,
        'sanitize_callback' => 'wp_validate_boolean',
    ));

    $wp_customize->add_control('polylang_enabled', array(
        'label' => __('Enable Polylang Integration', 'javi-aparicio-foto'),
        'description' => __('Use Polylang plugin for dynamic language switching', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_polylang',
        'type' => 'checkbox',
    ));

    // Flag display option
    $wp_customize->add_setting('polylang_flag_display', array(
        'default' => 'names',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('polylang_flag_display', array(
        'label' => __('Flag Display', 'javi-aparicio-foto'),
        'description' => __('Choose how to display flags and language names', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_polylang',
        'type' => 'select',
        'choices' => array(
            'names' => __('Names Only', 'javi-aparicio-foto'),
            'flags' => __('Flags Only', 'javi-aparicio-foto'),
            'flags_names' => __('Flags + Names', 'javi-aparicio-foto'),
        ),
    ));

    // Display format
    $wp_customize->add_setting('polylang_display_format', array(
        'default' => 'slug',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('polylang_display_format', array(
        'label' => __('Display Format', 'javi-aparicio-foto'),
        'description' => __('How to display language names', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_polylang',
        'type' => 'select',
        'choices' => array(
            'slug' => __('Language Code (en, es, de)', 'javi-aparicio-foto'),
            'name' => __('Full Name (English, Spanish, German)', 'javi-aparicio-foto'),
        ),
    ));

    // Hide current language
    $wp_customize->add_setting('polylang_hide_current', array(
        'default' => false,
        'sanitize_callback' => 'wp_validate_boolean',
    ));

    $wp_customize->add_control('polylang_hide_current', array(
        'label' => __('Hide Current Language', 'javi-aparicio-foto'),
        'description' => __('Don\'t show the current language in the selector', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_polylang',
        'type' => 'checkbox',
    ));

    // Hide languages without translation
    $wp_customize->add_setting('polylang_hide_no_translation', array(
        'default' => false,
        'sanitize_callback' => 'wp_validate_boolean',
    ));

    $wp_customize->add_control('polylang_hide_no_translation', array(
        'label' => __('Hide Languages Without Translation', 'javi-aparicio-foto'),
        'description' => __('Don\'t show languages that don\'t have a translation for this page', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_polylang',
        'type' => 'checkbox',
    ));

    // Force home URL
    $wp_customize->add_setting('polylang_force_home', array(
        'default' => false,
        'sanitize_callback' => 'wp_validate_boolean',
    ));

    $wp_customize->add_control('polylang_force_home', array(
        'label' => __('Force Home URL', 'javi-aparicio-foto'),
        'description' => __('Always link to the home page instead of the translated page', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_polylang',
        'type' => 'checkbox',
    ));
}
add_action('customize_register', 'javi_aparicio_polylang_customizer');

