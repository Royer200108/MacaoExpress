//Valor de las opciones disponibles
const OPCION_INICIO = 1;
const OPCION_SOPORTE = 2;
const OPCION_COMPRAS = 3;
const OPCION_AVISOS = 4;
const OPCION_Perfil = 5;
const OPCION_INICIO_Producto = 6;
const OPCION_INICIO_VistaProd_Individual = 7;
//Funcion tipo flecha
var seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_INICIO:
            console.log('Visualizar ususarios, opcion: ' + OPCION_INICIO);
            document.getElementById('inicio-opc' ).classList.add('activa');
            document.getElementById('soporte-opc').classList.remove('activa');
            document.getElementById('compras-opc').classList.remove('activa');
            document.getElementById('avisos-opc' ).classList.remove('activa');
            document.getElementById('perfil-opc' ).classList.remove('activa');

            document.getElementById('Inicio').style.display = "block";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Perfil').style.display = "none";

            document.getElementById('Compra-producto').style.display = "none";
            document.getElementById('Productos-tienda').style.display = "none";
            break;
        case OPCION_SOPORTE:
            console.log('Visualizar ususarios, opcion: ' + OPCION_SOPORTE);
            document.getElementById('inicio-opc' ).classList.remove('activa');
            document.getElementById('soporte-opc').classList.add('activa');
            document.getElementById('compras-opc').classList.remove('activa');
            document.getElementById('avisos-opc' ).classList.remove('activa');
            document.getElementById('perfil-opc' ).classList.remove('activa');

            document.getElementById('Inicio').style.display = "none";
            document.getElementById('Soporte').style.display = "block";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Perfil').style.display = "none";

            document.getElementById('Compra-producto').style.display = "none";
            document.getElementById('Productos-tienda').style.display = "none";
            break;
        case OPCION_COMPRAS:
            console.log('Visualizar ususarios, opcion: ' + OPCION_COMPRAS);
            document.getElementById('inicio-opc' ).classList.remove('activa');
            document.getElementById('soporte-opc').classList.remove('activa');
            document.getElementById('compras-opc').classList.add('activa');
            document.getElementById('avisos-opc' ).classList.remove('activa');
            document.getElementById('perfil-opc' ).classList.remove('activa');

            document.getElementById('Inicio').style.display = "none";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "block";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Perfil').style.display = "none";

            document.getElementById('Compra-producto').style.display = "none";
            document.getElementById('Productos-tienda').style.display = "none";
            break;
        case OPCION_AVISOS:
            console.log('Visualizar ususarios, opcion: ' + OPCION_AVISOS);
            document.getElementById('inicio-opc' ).classList.remove('activa');
            document.getElementById('soporte-opc').classList.remove('activa');
            document.getElementById('compras-opc').classList.remove('activa');
            document.getElementById('avisos-opc' ).classList.add('activa');
            document.getElementById('perfil-opc' ).classList.remove('activa');

            document.getElementById('Inicio').style.display = "none";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "block";
            document.getElementById('Perfil').style.display = "none";

            document.getElementById('Compra-producto').style.display = "none";
            document.getElementById('Productos-tienda').style.display = "none";
            break;
        case OPCION_Perfil:
            console.log('Visualizar ususarios, opcion: ' + OPCION_Perfil);
            document.getElementById('inicio-opc' ).classList.remove('activa');
            document.getElementById('soporte-opc').classList.remove('activa');
            document.getElementById('compras-opc').classList.remove('activa');
            document.getElementById('avisos-opc' ).classList.remove('activa');
            document.getElementById('perfil-opc' ).classList.add('activa');

            document.getElementById('Inicio').style.display = "none";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Perfil').style.display = "block";

            document.getElementById('Compra-producto').style.display = "none";
            document.getElementById('Productos-tienda').style.display = "none";
            break;

        default:
            break;
    }
}

function volverInicio(params) {
    document.getElementById('Inicio').style.display = "block";
    document.getElementById('Compra-producto').style.display = "none";
    document.getElementById('menu').style.display = "flex";
    document.getElementById('Productos-tienda').style.display = "none";
    document.getElementById('Soporte').style.display = "none";
    document.getElementById('Compras').style.display = "none";
    document.getElementById('Avisos').style.display = "none";
    document.getElementById('Perfil').style.display = "none";
}

function volverTienda(params) {
    document.getElementById('Inicio').style.display = "none";
    document.getElementById('Compra-producto').style.display = "none";
    document.getElementById('menu').style.display = "none";
    document.getElementById('Productos-tienda').style.display = "block";
    document.getElementById('Soporte').style.display = "none";
    document.getElementById('Compras').style.display = "none";
    document.getElementById('Avisos').style.display = "none";
    document.getElementById('Perfil').style.display = "none";
}

function mostrarTienda(params) {
    document.getElementById('Inicio').style.display = "none";
    document.getElementById('Compra-producto').style.display = "block";
    document.getElementById('menu').style.display = "none";
    document.getElementById('Productos-tienda').style.display = "none";
    document.getElementById('Soporte').style.display = "none";
    document.getElementById('Compras').style.display = "none";
    document.getElementById('Avisos').style.display = "none";
    document.getElementById('Perfil').style.display = "none";

}

function mostrarProductosTienda(params) {
    document.getElementById('Inicio').style.display = "none";
    document.getElementById('Productos-tienda').style.display = "block";
    document.getElementById('Compra-producto').style.display = "none";
    document.getElementById('Inicio').style.display = "none";
    document.getElementById('menu').style.display = "none";
}

function mostrarCompraProducto(params) {
    document.getElementById('Inicio').style.display = "none";
    document.getElementById('Productos-tienda').style.display = "none";
    document.getElementById('Compra-producto').style.display = "block";
    document.getElementById('Inicio').style.display = "none";
    document.getElementById('menu').style.display = "none";
}

function mostrar(ver, ocultar) {
    console.log(ver);
    document.getElementById(ver).style.display = "block";
    document.getElementById(ocultar).style.display = "none";
    
    document.getElementById('btn-' + ocultar).classList = "visualizar no-visualizar-ahora";
    document.getElementById('btn-' + ver).classList = "visualizar visualizar-ahora";
    
}