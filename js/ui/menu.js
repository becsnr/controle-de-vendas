// BOTÃO MENU
        const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        const sidebarLinks = document.querySelectorAll('.sidebar a');

        // ABRIR MENU
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            
            overlay.classList.add('active');
        });

        // FECHAR MENU
        function closeMenu() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        closeBtn.addEventListener('click', closeMenu); // botão x

        overlay.addEventListener('click', closeMenu); // clicar fora

        sidebarLinks.forEach(link => { // clicar nos links
            link.addEventListener('click', closeMenu);
        });