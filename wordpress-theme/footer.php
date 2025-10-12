    </div> <!-- End content -->
</div> <!-- End container -->

<footer class="site-footer">
    <div class="footer-bottom">
        <p>
            &copy; <?php echo date('Y'); ?> <?php _e('Javi Aparicio Foto. All rights reserved.', 'javi-aparicio-foto'); ?><br />
            <?php _e('Photography services are available by appointment only.', 'javi-aparicio-foto'); ?><br />
        </p>
        
        <?php
        wp_nav_menu(array(
            'theme_location' => 'footer',
            'container' => false,
            'menu_class' => 'footer-menu',
            'fallback_cb' => false,
        ));
        ?>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
