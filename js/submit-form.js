$(function () {
    'use strict';

    // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
    const forms = $('.needs-validation');

    // Loop melalui formulir dan mencegah pengiriman
    forms.on('submit', function (event) {
        const form = $(this);

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Hapus bagian AJAX ini
            $('.submit_form').html('Sending...');
            // Biarkan pengiriman formulir standar terjadi
            // Formspree akan menangani pengiriman
            // Tidak perlu AJAX
            form.addClass('was-validated');

            // Setelah beberapa detik, kembalikan teks tombol (opsional)
            setTimeout(function() {
                $('.submit_form').html('Send Message');
                // Reset formulir (opsional)
                form[0].reset();
                form.removeClass('was-validated');
            }, 3000); // 3 detik
        }

        form.addClass('was-validated');
    });
});
