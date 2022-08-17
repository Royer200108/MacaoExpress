function activarMenu(){
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
	rellenarFormularioUsuario();
}

activarMenu();

function generarPerfil(){
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
}

function rellenarFormularioUsuario(){
	administradores.forEach(administrador => {
		document.getElementById('Contenedor-Principal-Formulario').innerHTML = '';
		document.getElementById('Contenedor-Principal-Formulario').innerHTML += `
			<div class="Contenedor-Imagen-Formulario">
				<img src="assets/img/1.webp" id="Imagen-Formulario">
			</div>
			<a href="#"> <h2 class="Editar"> Cambiar Foto </h2> </a>
			
			<div class="mb-3">
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
					<a href="#" onclick="editarNombre()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre" placeholder="${administrador.username}">
				
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email"  placeholder="${administrador.email}">
				
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
					<a href="#" onclick="editarTelefono()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" id="Input-Editar-Telefono" name="" placeholder="${administrador.telefono}">
				
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Password </label>
					<a href="#" onclick="editarPassword()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="Password" id="Input-Editar-Password" name="" placeholder="${administrador.password}">
				
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		`;
	});
}

rellenarFormularioUsuario();

function activarMenu(){
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
	rellenarFormularioUsuario();
}

