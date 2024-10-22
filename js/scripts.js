
/***********************MENÚ HAMBURGUESA*********************** */
// Detecta clics fuera del menú y lo oculta si está desplegado
document.addEventListener('click', function (event) {
    // Si el clic ocurre dentro del menú o del botón hamburguesa, no hace nada
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            // Si el clic ocurre fuera del menú, se oculta
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    }
});

/***********************CV*********************** */
document.getElementById('cv').addEventListener('change', function() {
    var fileName = this.files[0] ? this.files[0].name : "No se ha seleccionado ningún archivo";
    document.getElementById('file-name').textContent = fileName;
});


