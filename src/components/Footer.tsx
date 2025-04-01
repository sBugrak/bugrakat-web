import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import { time } from "console";

export const Footer = component$(() => {

    return (
        <footer class="text-white">
            <ul>
                <li><Link target="blank" href="https://bsky.app/profile/bugrakat.bsky.social">Bluesky</Link></li>
                <li>Github</li>
            </ul >
            <p>© {new Date().getFullYear()} link Said Buğra Karabulut </p>
            <p>Background: Image by<a
                target="blank"
                href="https://pixabay.com/users/temperatesage-13030917/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4395986"> Harmony Lawrence </a>from<a
                    target="blank"
                    href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4395986"
                > Pixabay</a>
            </p>
        </footer >
    );
});
