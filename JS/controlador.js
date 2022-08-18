const { $where } = require("../../../backend/models/usuario");

(()=>{
    $.ajax({
        url:"/usuarios/",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            //Aqui tiene que ir un for de usuarios
            for (let i = 0; i < res.length; i++) {
                $('#usuario-actual').append(`<option value="${res[i]._id}">${res[i].nombre}</option>`);
            }   
        },
        error:(error)=>{
            console.error(error);
        }
    });
});

const OPCION_INICIO_SESION = 1;
const OPCION_REGISTRO_USUARIOS = 2;

var element = 'document.getElementById';

var seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_INICIO_SESION:
            document.getElementById('Inicio-sesion').style.display = "block";
            document.getElementById('Registro-usuario').style.display = "none";
            break;
        case OPCION_REGISTRO_USUARIOS:
            document.getElementById('Inicio-sesion').style.display = "none";
            document.getElementById('Registro-usuario').style.display = "block";
            break;

        default:
            break;
    }
}

function verificarCampos(params) {
    if (document.getElementById('nombre-usuario-registro').value =="" & document.getElementById('apellido-usuario-registro').value =="" & (document.getElementById('email-registro').value =="") & document.getElementById('pass-registro').value =="") {
        document.getElementById('aviso').innerHTML = 'Error al crear el usuario';
    }else{
        document.getElementById('aviso').innerHTML = 'Usuario creado';
        
    }
}


function validarEmail(campo) {
    //Elimino esta linea ya que llamo esta funcion directamente con validarEmail('this') en la etiqueta en linea.
    //let campo = document.getElementById(id);
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    console.log(campo.value);
    if (regex.test(campo.value) == true) {
        campo.classList.remove('campo-erroneo');
        campo.classList.add('campo-correcto');
    } else{
        campo.classList.remove('campo-correcto');
        campo.classList.add('campo-erroneo');
    }
}

