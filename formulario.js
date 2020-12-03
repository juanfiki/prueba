
 var nombre = document.getElementById('nombre');
 var apellido = document.getElementById('apellidos');
 var correo = document.getElementById('correo');


function enviarFomulario (){
    console.log('envio')
    // alert("Ayrton Senna")
    if( nombre.value.length <=0 || apellido.value.length <=0 || correo.value.length <=0 ){
        swal("Ingrese todos los Datos","Nombre Apellido Correo");
    }else{
    
    }
}