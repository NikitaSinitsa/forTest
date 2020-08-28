$(document).ready(function () {
    $('#menu').click(function () {
        $('#menu__hidden, #overlay').fadeIn(200);
    });
    $(`#overlay`).click(function () {
        $('#menu__hidden, #overlay, #carrinho__hidden').fadeOut(200);
    });

    $('#close').click(function () {
        $('#menu__hidden, #overlay').fadeOut(200);
    });


    $('#subbuttonPlass').click(function () {
        $('#submenu').fadeIn(200);
        $('#subbuttonMines').css('display', 'flex');
        $('#subbuttonPlass').css('display', 'none');
        $('#menu__section--social').css('display', 'none');
    });

    $('#subbuttonMines').click(function () {
        $('#submenu').fadeOut(200);
        $('#subbuttonMines').css('display', 'none');
        $('#subbuttonPlass').css('display', 'flex');
        $('#menu__section--social').css('display', 'flex');
    });

    $('#carrinho').click(function () {
        $('#carrinho__hidden, #overlay2').fadeIn(200);
    });
    $(`#overlay2`).click(function () {
        $('#overlay2, #carrinho__hidden').fadeOut(200);
    });

});
