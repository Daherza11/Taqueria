$('.carousel').carousel()

$('#recoge').modal(options)
$('#domicilio').modal(options)
$('#express').modal(options)

function EnviarCorreo(){
    var parametros = {Nombre: $("#Nombre").val(), Email: $("Email").val(), Mensaje: $("Mensaje").val()}
    jQuery.ajax({
        url: "contact_mail.php",
        data: parametros,
        type: "POST",
        success:function(data){
            alert("Mensaje enviado, nos contactaremos lo antes posible. Gracias.");
        },
        error:function(data){
            alert("Error al enviar el correo.")
        }
    });
}