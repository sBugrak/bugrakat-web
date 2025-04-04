import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div class="w-[85vw] min-w-[100px] max-w-[1000px] py-3 align-middle mx-auto transition-width duration-50 delay-100 ease-in-out">
            <section class="flex flex-col mb-2 bg-[var(--primary-color)]/80 rounded-xl shadow-md">
                <h2 class="text-xl mb-3 h-10 font-bold rounded-tl-xl bg-[var(--secondary-color)] rounded-tr-xl"><span class="text-2xl h-full pl-3 align-middle">About Me</span></h2>
                <div class="pb-3 px-3">
                    <p>I'm {Math.floor(new Date().getFullYear() - 2001.5)} and I'm currently a student in <Link target="_blank" rel="noopener noreferrer" href="https://www.erciyes.edu.tr/" class="text-sky-500 hover:underline">Erciyes University</Link>.</p>
                    <p>The reason why I'm making this website is to help my girlfriend <strong>Kat 💝</strong> to track her habits. I also want to use this as an opportunity to learn web development and track my habits like learning Swedish properly!</p>
                </div>
            </section>
            <section class="flex flex-col bg-[var(--primary-color)]/80 rounded-xl shadow-md">
                <h2 class="text-xl mb-3 h-10 font-bold rounded-tl-xl bg-[var(--secondary-color)] rounded-tr-xl"><span class="text-2xl h-full pl-3 align-middle">Development Diary</span></h2>
                <div class=" pb-3 px-3">
                    <p><strong>Week 1:</strong> I've been trying to find a way to develop a website. I had in mind that a lot of people were saying that the best method is the old school/simple one. So I started with as simplistic as it gets, basic HTML and CSS. This week, I picked a color palette and worked on the design of the website. I want the user to focus on the task they are doing instead of getting distracted by unnecessary things. So I'll not make the website super fancy.</p>
                    <p><strong>Week 2:</strong> This week I learned that some free hosting websites share the information of the users of the websites the developers make. Since that is exactly what I don't want the users to experience, I started self hosting. This also allowed me to use web technologies like the <Link target='_blank' href='https://qwik.dev/' class="text-sky-500 hover:underline">Qwik</Link> framework. I heard that it's really fast and I want to see how good it actually is.</p>
                </div>
            </section>
        </div>
    );
});