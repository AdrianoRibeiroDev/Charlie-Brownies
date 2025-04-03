$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        // Alterar a opacidade e a cor do fundo do header quando o scroll ultrapassar 5px
        if (scrollPosition > 5) {
            header.addClass('header-scrolled'); // Ativa o fundo opaco
            header.css('padding', '10px 8%'); // Compacta o padding
            navItems.find('a').css('color', '#000'); // Muda a cor dos links para preto
            $('#mobile_btn').css('color', '#000'); // Muda a cor do botão mobile para preto
        } else {
            header.removeClass('header-scrolled'); // Volta ao estado inicial
            header.css('padding', '28px 8%'); // Restaura o padding
            navItems.find('a').css('color', '#fff9ea'); // Volta a cor dos links para o padrão
            $('#mobile_btn').css('color', '#fff9ea'); // Volta a cor do botão mobile para o padrão
        }

        // Atualiza a seção ativa com base no scroll
        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // ScrollReveal para animações
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
