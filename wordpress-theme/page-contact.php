<?php
/**
 * Template Name: Contact Page
 *
 * @package JaviAparicioFoto
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="contact-page">
        <header class="page-header">
            <h1 class="page-title"><?php _e('Contact', 'javi-aparicio-foto'); ?></h1>
        </header>

        <div class="contact-content">
            <div class="contact-info">
                <h2><?php _e('Get in Touch', 'javi-aparicio-foto'); ?></h2>
                <p><?php _e('Ready to create something amazing together? Let\'s discuss your photography needs.', 'javi-aparicio-foto'); ?></p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <strong><?php _e('Email:', 'javi-aparicio-foto'); ?></strong>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'info@javiapariciofoto.ch')); ?>">
                            <?php echo esc_html(get_theme_mod('contact_email', 'info@javiapariciofoto.ch')); ?>
                        </a>
                    </div>
                    
                    <div class="contact-item">
                        <strong><?php _e('Phone:', 'javi-aparicio-foto'); ?></strong>
                        <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+41 77 231 12 63')); ?>">
                            <?php echo esc_html(get_theme_mod('contact_phone', '+41 77 231 12 63')); ?>
                        </a>
                    </div>
                    
                    <div class="contact-item">
                        <strong><?php _e('Address:', 'javi-aparicio-foto'); ?></strong>
                        <span><?php echo esc_html(get_theme_mod('contact_address', 'Stauffacherstrasse 44, 3014 Bern, Switzerland')); ?></span>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <h2><?php _e('Send a Message', 'javi-aparicio-foto'); ?></h2>
                <?php
                // You can integrate with Contact Form 7, Gravity Forms, or any other form plugin
                echo do_shortcode('[contact-form-7 id="1" title="Contact form"]');
                ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
