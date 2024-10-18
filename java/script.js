// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase visible a la sección Hero
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 300);

    // Seleccionar secciones de servicios y nosotros
    const serviciosContent = document.querySelector('#servicios');
    const nosotrosContent = document.querySelector('#nosotros');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(serviciosContent);
    observer.observe(nosotrosContent);

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener los valores de los campos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Mostrar un mensaje de respuesta
            const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
            mensajeConfirmacion.textContent = `Gracias por tu mensaje, ¡${nombre}! Nos pondremos en contacto contigo pronto.`;
            mensajeConfirmacion.classList.remove('hidden');

            // Reiniciar el formulario
            contactForm.reset();
        });
    }

    // Lógica para el formulario de inicio de sesión y registro
    const $btnSignIn = document.querySelector('.sign-in-btn'),
          $btnSignUp = document.querySelector('.sign-up-btn'),  
          $signUp = document.querySelector('.sign-up'),
          $signIn = document.querySelector('.sign-in');

    if ($btnSignIn && $btnSignUp && $signIn && $signUp) {
        document.addEventListener('click', e => {
            if (e.target === $btnSignIn || e.target === $btnSignUp) {
                $signIn.classList.toggle('active');
                $signUp.classList.toggle('active');
            }
        });
    }
});
