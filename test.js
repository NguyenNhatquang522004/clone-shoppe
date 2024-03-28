$('.modal.modall').on('shown.bs.modal', function (e) {
    $('.modal.show').each(function (index) {
        $(this).css('z-index', 1101 + index * 2);
    });
    $('.modal-backdrop').each(function (index) {
        $(this).css('z-index', 1101 + index * 2 - 1);
    });
});
