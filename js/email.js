function sendEmail() {
    let _nombre = $("#NombreId").val();
    let _telefono = $("#TelefonoId").val();
    let _correo = $("#CorreoId").val();
    let _asunto = $("#AsuntoId").val();
    let _mensaje = $("#textAreaExample1").val();

    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/contacto@acgp.cl',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            Asunto: _asunto,
            Nombre: _nombre,
            Correo: _correo,
            Telefono: _telefono,
            Mensaje: _mensaje
        },
        success: (data) => console.log(data),
    error: (err) => console.log(err)
    });
}