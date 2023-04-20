$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#quienesomos').click(function(){
        alert("Viaje con nosotros")
    });

    $('#destacados').click(function(){
        alert("Viaje por Chile")
    });

    $('#contactos').click(function(){
        alert("Contactanos")
    });

    $('.titulo1').click(function(){
        $('.texto1').toggle();
    });
    $('.titulo2').click(function(){
        $('.texto2').toggle();
    });
    $('.titulo3').click(function(){
        $('.texto3').toggle();
    });

    $(".ocultar-mostrar").click(function(){
        $(".ocultar-mostrar").slideToggle(1500);
        $(".ocultar-mostrar").toggle('show');
    });
    $(".ocultar-mostrar2").click(function(){
        $(".ocultar-mostrar2").slideToggle(1500);
        $(".ocultar-mostrar2").toggle('show');
    });
    $(".ocultar-mostrar3").click(function(){
        $(".ocultar-mostrar3").slideToggle(1500);
        $(".ocultar-mostrar3").toggle('show');
    });

    $('.titulo4').click(function(){
        $('.texto4').toggle();
    })
})


$("#quienesomos").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Los mejores viajes estan junto a nosotros');
}, function() {
    $(this).css('cursor','auto');
});