import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from '@builder.io/qwik-city';

export const Navbar = component$(() => {

    const loc = useLocation();

    useVisibleTask$(() => {
        const handleLinkClick = () => {
            const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
            if (menuToggle) {
                menuToggle.checked = false;
            }
        };

        // Add event listeners to all links inside the navbar
        const links = document.querySelectorAll('.link-list a');
        links.forEach((link) => {
            link.addEventListener('click', handleLinkClick);
        });

        // Add event listener to the title element
        const title = document.querySelector('.title a');
        if (title) {
            title.addEventListener('click', handleLinkClick);
        }


        return () => {
            // Cleanup event listeners
            links.forEach((link) => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    });

    return (
        <nav class="navbar">
            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" class="burger-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                    <g>
                        <path d="M5 12H20" stroke="#eff6e0" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 17H20" stroke="#eff6e0" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 7H20" stroke="#eff6e0" stroke-width="2" stroke-linecap="round" />
                    </g>
                </svg>
            </label>
            <h1 class="title"><Link href="/"><span class="mr-1">ツ</span>Bugrakat</Link></h1>
            <ul class="link-list text-white">
                <li><Link href="/about" class={{ 'nav-link': true, 'active': loc.url.pathname === '/about/' }}>About</Link></li>
                <li><Link href="/register" class={{ 'nav-link': true, 'active': loc.url.pathname === '/register/' }}>Register</Link></li>
                <li><Link href="/enter" class={{ 'nav-link': true, 'active': loc.url.pathname === '/enter/' }}>Enter</Link></li>
            </ul>
        </nav>
    );
});
