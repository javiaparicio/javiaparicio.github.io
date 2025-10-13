<?php
/**
 * The main template file
 *
 * @package JaviAparicioFoto
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Pages:', 'javi-aparicio-foto'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <div class="no-content">
            <h1><?php _e('Nothing Found', 'javi-aparicio-foto'); ?></h1>
            <p><?php _e('It seems we can\'t find what you\'re looking for. Perhaps searching can help.', 'javi-aparicio-foto'); ?></p>
            <?php get_search_form(); ?>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
