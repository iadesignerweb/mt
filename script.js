document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Slider de Imagens
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Event listeners para os dots
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            stopSlider(); // Para o slider automático ao clicar num dot
            showSlide(parseInt(e.target.dataset.slide));
            startSlider(); // Reinicia o slider automático
        });
    });

    // Inicia o slider
    showSlide(currentSlide);
    startSlider();

    // Animação de seções ao rolar
    const sections = document.querySelectorAll('.section-content');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // A seção será visível quando 20% dela estiver no viewport
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Opcional: para animar apenas uma vez
            } else {
                 entry.target.classList.remove('visible'); // Opcional: para remover a animação ao sair
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Animação de scroll suave para links de navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
