<?php
/**
 * Template Name: Pricing Page
 *
 * @package JaviAparicioFoto
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="pricing-page">
        <header class="page-header">
            <h1 class="page-title"><?php _e('Pricing', 'javi-aparicio-foto'); ?></h1>
        </header>

        <div class="pricing-content">
            <div class="pricing-intro">
                <h2><?php _e('Professional Photography Services', 'javi-aparicio-foto'); ?></h2>
                <p><?php _e('Every project is unique, and so is my approach. I offer personalized photography services tailored to your specific needs and vision.', 'javi-aparicio-foto'); ?></p>
            </div>

            <div class="pricing-packages">
                <div class="pricing-package">
                    <h3><?php _e('Portrait Session', 'javi-aparicio-foto'); ?></h3>
                    <div class="package-details">
                        <p><?php _e('Professional portrait photography session', 'javi-aparicio-foto'); ?></p>
                        <ul>
                            <li><?php _e('1-2 hour session', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Professional editing', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('High-resolution digital files', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Online gallery for viewing', 'javi-aparicio-foto'); ?></li>
                        </ul>
                        <p class="package-note"><?php _e('Starting from CHF 300', 'javi-aparicio-foto'); ?></p>
                    </div>
                </div>

                <div class="pricing-package">
                    <h3><?php _e('Event Photography', 'javi-aparicio-foto'); ?></h3>
                    <div class="package-details">
                        <p><?php _e('Professional event documentation', 'javi-aparicio-foto'); ?></p>
                        <ul>
                            <li><?php _e('Full event coverage', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Professional editing', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('High-resolution digital files', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Quick turnaround', 'javi-aparicio-foto'); ?></li>
                        </ul>
                        <p class="package-note"><?php _e('Starting from CHF 500', 'javi-aparicio-foto'); ?></p>
                    </div>
                </div>

                <div class="pricing-package">
                    <h3><?php _e('Custom Projects', 'javi-aparicio-foto'); ?></h3>
                    <div class="package-details">
                        <p><?php _e('Tailored photography solutions', 'javi-aparicio-foto'); ?></p>
                        <ul>
                            <li><?php _e('Consultation and planning', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Flexible scheduling', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Custom deliverables', 'javi-aparicio-foto'); ?></li>
                            <li><?php _e('Ongoing support', 'javi-aparicio-foto'); ?></li>
                        </ul>
                        <p class="package-note"><?php _e('Custom pricing', 'javi-aparicio-foto'); ?></p>
                    </div>
                </div>
            </div>

            <div class="pricing-note">
                <p><strong><?php _e('Note:', 'javi-aparicio-foto'); ?></strong> <?php _e('All prices are subject to specific requirements and location. Contact me for a personalized quote.', 'javi-aparicio-foto'); ?></p>
                <p><a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="cta-button"><?php _e('Get a Quote', 'javi-aparicio-foto'); ?></a></p>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
