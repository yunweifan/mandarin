let currentSlide = 1;
	
function switchMission(missionNum) {
	currentSlide = missionNum;

	// 1. Actualizar el estilo de los 10 botones de navegación
	for (let i = 1; i <= 10; i++) {
		const btn = document.getElementById(`btn-m${i}`);
		if (btn) {
			if (i === missionNum) {
				btn.className = "px-3 py-1 text-xs font-semibold rounded-lg bg-amber-500 text-slate-950 shadow transition-all text-center";
			} else {
				btn.className = "px-3 py-1 text-xs font-semibold rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-center";
			}
		}
	}

	// 2. Ocultar todos los paneles de misiones y mostrar solo el seleccionado
	const allPanels = document.querySelectorAll('.mission-panel');
	allPanels.forEach(panel => {
		panel.classList.add('hidden');
	});

	const activePanel = document.getElementById(`mission-${missionNum}`);
	if (activePanel) {
		activePanel.classList.remove('hidden');
		
		// VALIDACIÓN: Inyectar automáticamente las fichas de personajes solo en misiones 5, 6, 7 y 8
		if (missionNum >= 1 && missionNum <= 3) {
			const characterGridHTML = document.getElementById('shared-character-grid').innerHTML;
			const container = document.getElementById(`characters-container-${missionNum}`);
			if (container) {
				container.innerHTML = characterGridHTML;
			}
		}
	}
}

document.addEventListener('keydown', function(e) {
	if (e.key === "ArrowRight") {
		currentSlide++;
	} else if (e.key === "ArrowLeft") {
		currentSlide--;
	}
	if (currentSlide > 9) currentSlide = 1;
	if (currentSlide == 0) currentSlide = 9;
	switchMission(currentSlide);
});