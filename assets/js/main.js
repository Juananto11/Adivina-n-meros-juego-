(() =>{
	const aleatorio = document.getElementById('aleatorio'),
		  play = document.getElementById('play'),
		  popup = document.getElementById('popup'),
		  numeroUsuario = document.getElementById('usuario'),
		  numeroAleatorio = Math.floor(Math.random()*100),
		  signoMas = document.getElementById('signo_+'),
		  signoMenos = document.getElementById('signo_-');

	let contador = 1;

	console.log("numeroAleatorio", numeroAleatorio);

	const mostrarPopup = () => {
		popup.classList.remove('visible');
		popup.classList.add('oculto');
		usuario.style.border = '2px solid white';
		usuario.style.background = '#F0F';
	}
	const parpadeoMas = () => {
		signoMas.classList.remove('mas')
	}
	const parpadeoMenos = () => {
		signoMenos.classList.remove('mas')
	}

	const leerNumero = (e) => {
		let valor = numeroUsuario.value;
		let longitud = valor.length;
		if (longitud > 2){
			numeroUsuario.value = '';
			popup.classList.remove('oculto');
			popup.classList.add('visible');
			usuario.style.border = '2px solid red';
			usuario.style.background = 'red';
			setTimeout(mostrarPopup, 2000);
		}
		if (e.keyCode == 13 || e.which == 1) {
			if (numeroAleatorio == valor) {
				console.log(contador);
				aleatorio.innerHTML = numeroAleatorio;
				contador++;
			}
			else {
				console.log(contador);
				numeroUsuario.value = '';
				contador++;
				if (numeroAleatorio > valor){
					signoMas.classList.add('mas');
					setTimeout(parpadeoMas, 1000);
				}
				else if (numeroAleatorio < valor){
					signoMenos.classList.add('mas');
					setTimeout(parpadeoMenos, 1000);
				}
			}
		}
	}

	numeroUsuario.addEventListener('keyup', leerNumero);
	play.addEventListener('click', leerNumero);
})();