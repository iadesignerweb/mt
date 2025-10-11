// Adicione um ouvinte de evento para o DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight; // Altura do cabeçalho fixo
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset - 20; // -20px para um pequeno padding extra

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação/Fade-in para seções quando elas entram na viewport
    const sections = document.querySelectorAll('.section-content');
    
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção visível para disparar
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Adicione um estilo inicial para as seções para a animação
    const style = document.createElement('style');
    style.innerHTML = `
        .section-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .section-content.fade-in-up {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);


    // Exemplo de validação de formulário de contato simples (apenas para demonstração)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;

            if (name && email && phone && service && message) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }

    // Adicione a funcionalidade para o botão "Talk with Us" (WhatsApp)
    const whatsappButton = document.querySelector('.talk-with-us');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            // Ação já é definida no HTML (href="https://wa.me/...")
            // Mas se quisesse fazer algo JS-dinâmico, faria aqui
            console.log("Abrindo WhatsApp...");
        });
    }
});
