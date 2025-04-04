import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import GithubImage from '/public/social-logos/github-white-icon.png?w=24&h=24&jsx';
import BlueSkyImage from '/public/social-logos/bluesky-icon.png?w=24&h=24&jsx';

export const Footer = component$(() => {
    return (
        <footer class="text-white flex flex-col align-center justify-center pt-5 px-5 bg-[var(--primary-color)]/50">
            <ul class="flex justify-center gap-[5vw] mb-4 w-full">
                <li class="flex items-center justify-center flex-grow min-w-[150px] max-w-[300px] h-full duration-200 ease-in-out">
                    <Link
                        target="blank"
                        href="https://bsky.app/profile/bugrakat.bsky.social"
                        class="flex flex-row items-center justify-center gap-1 w-full px-[3vw] py-[3px] border border-gray-300 rounded-md bg-[var(--secondary-color)] duration-200 ease-in-out hover:bg-[var(--tertiary-color)] hover:text-[var(--primary-color)] hover:underline"
                    >
                        <BlueSkyImage />Bluesky
                    </Link>
                </li>
                <li class="flex items-center justify-center flex-grow min-w-[150px] max-w-[300px] h-full duration-200 ease-in-out">
                    <Link
                        target="blank"
                        href="https://github.com/sBugrak/bugrakat-web"
                        class="flex flex-row items-center justify-center gap-1 w-full px-[3vw] py-[3px] border border-gray-300 rounded-md bg-[var(--secondary-color)] duration-200 ease-in-out hover:bg-[var(--tertiary-color)] hover:text-[var(--primary-color)] hover:underline"
                    >
                        <GithubImage />Github
                    </Link>
                </li>
            </ul>
            <p><span class="text-bold">(ɔ)</span>{new Date().getFullYear()} Share as you wish, just don't be evil.</p>
            <p class="text-[10px] text-white pb-5">Background image by <Link target="blank" href="https://pixabay.com/users/temperatesage-13030917/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4395986" class="text-[var(--tertiary-color)] underline">Harmony Lawrence</Link> from <Link target="blank" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4395986" class="text-[var(--tertiary-color)] underline">Pixabay</Link></p>
        </footer>
    );
});
