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
        } 
        // Tidak mencegah submit default, biarkan form submit ke Formspree
        form.addClass('was-validated');
    });
});
