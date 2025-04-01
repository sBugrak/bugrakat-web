import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

export const Navbar = component$(() => {

    useVisibleTask$(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.querySelector('nav');
            const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
            if (nav && !nav.contains(event.target as Node) && menuToggle.checked) {
                menuToggle.checked = false;
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
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
            <h1 class="title"><a href="index.php"><span class="mr-1">ツ</span>Bugrakat</a></h1>
            <ul class="link-list text-white">
                <li><Link href="" class="nav-link">Blog</Link></li>
                <li><Link href="" class="nav-link">Register</Link></li>
                <li><Link href="" class="nav-link">Enter</Link></li>
            </ul>
        </nav>
    );
});
