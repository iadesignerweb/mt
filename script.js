flex-wrap: wrap;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

/* Talk with Us (WhatsApp) button */
.talk-with-us {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25D366; /* Verde WhatsApp */
    color: var(--white);
    padding: 15px 20px;
    border-radius: 50px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 1rem;
    box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    z-index: 1001;
}

.talk-with-us:hover {
    background-color: #1EBE55;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 12px 20px rgba(0,0,0,0.4);
}

.talk-with-us i {
    font-size: 1.5rem;
}

/* Responsividade */
@media (max-width: 992px) {
    nav ul {
        display: none; /* Esconde o menu em telas menores, você pode implementar um menu hamburger aqui */
    }
    .logo {
        width: 100%;
        text-align: center;
    }
    header {
        height: auto;
        padding: 15px 0;
    }
    main {
        padding-top: var(--header-height); /* Ajuste de padding para o header */
    }

    .hero-section h1 {
        font-size: 3rem;
    }
    .hero-section p {
        font-size: 1.2rem;
    }

    .about-section {
        flex-direction: column;
        padding: 40px 20px;
    }
    .about-text, .about-image {
        padding-right: 0;
        min-width: unset;
        width: 100%;
    }
    .about-image img {
        margin-bottom: 40px; /* Espaço para o badge */
    }
    .experience-badge {
        bottom: 10px; /* Ajusta a posição em telas menores */
    }

    .services-grid, .conditions-grid, .science-grid, .tech-advanced, .treated-conditions-grid, .contact-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 30px;
    }
    .section-content {
        padding: 30px 20px;
        margin: 4rem auto;
    }
    .cta-box {
        padding: 30px 20px;
    }
    .cta-box h3 {
        font-size: 1.8rem;
    }

    .how-brain-responds, .brain-image, .tech-image, .tech-text, .contact-info, .contact-form {
        min-width: unset;
        width: 100%;
    }
    .brain-image, .tech-image {
        order: -1; /* Coloca a imagem acima do texto em telas menores */
    }

    .newsletter-form {
        flex-direction: column;
        align-items: center;
    }
    .newsletter-form input, .newsletter-form .btn {
        width: 80%;
        max-width: 350px;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
    }
    .footer-links h3::after, .footer-contact h3::after {
        left: 50%;
        transform: translateX(-50%);
    }
    .footer-bottom {
        flex-direction: column;
        gap: 15px;
    }
    .talk-with-us {
        bottom: 20px;
        right: 20px;
        padding: 12px 18px;
        font-size: 0.9rem;
    }
    .talk-with-us i {
        font-size: 1.3rem;
    }
}

@media (max-width: 480px) {
    .hero-section h1 {
        font-size: 2.5rem;
    }
    .hero-section p {
        font-size: 1rem;
    }
    .hero-buttons {
        flex-direction: column;
        gap: 10px;
    }
    .btn {
        width: 80%;
        max-width: 280px;
    }

    h2 {
        font-size: 2rem;
    }
    .section-subtitle {
        font-size: 0.95rem;
    }

    .service-card .icon-large {
        font-size: 3rem;
        padding: 15px;
    }
    .service-card h3 {
        font-size: 1.5rem;
    }
    .service-card p {
        font-size: 0.9rem;
    }

    .conditions-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }
    .condition-card {
        font-size: 0.9rem;
        padding: 15px 10px;
    }
    .condition-card i {
        font-size: 1.5rem;
    }

    .cta-box h3 {
        font-size: 1.5rem;
    }
    .cta-box p {
        font-size: 1rem;
    }

    .how-brain-responds h3, .tech-text h3 {
        font-size: 1.6rem;
    }
    .brain-features li, .tech-benefits li {
        font-size: 0.95rem;
    }

    .treated-conditions-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .treated-card {
        font-size: 0.85rem;
        padding: 12px 8px;
    }
    .treated-card i {
        font-size: 1.3rem;
    }

    .contact-info h3, .contact-form h3 {
        font-size: 1.6rem;
    }
    .contact-info p, .contact-info ul li {
        font-size: 0.95rem;
    }
    .contact-form input, .contact-form select, .contact-form textarea {
        padding: 12px;
        font-size: 0.95rem;
    }

    .newsletter-section h3 {
        font-size: 1.8rem;
    }
    .newsletter-section p {
        font-size: 1rem;
    }

    .footer-about .logo-footer, .footer-links h3, .footer-contact h3 {
        font-size: 1.3rem;
    }
    .footer-about p, .footer-links ul li, .footer-contact p {
        font-size: 0.85rem;
    }
}
