import { useStyles$, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  return (
    <div class="mx-auto flex flex-col items-center justify-center pt-3">
      <div class="container text-pretty min-h-[100vh] w-[85vw] min-w-[100px] max-w-[1000px] mx-auto flex flex-col items-center transition-width duration-50 delay-100 ease-in-out">
        <h2 class="font-bold text-3xl pb-3">A SIMPLE HABIT TRACKER</h2>
        <section class="w-full flex flex-col intro-articles items-center justify-center gap-3">
          <article class="gap-[2vh] flex justify-center w-full h-[25vh] min-h-fit flex flex-col mb-2 bg-[var(--primary-color)]/80 rounded-xl shadow-md py-3 px-5 hover:bg-[var(--primary-color)] hover:transform hover:-translate-y-[2px] transition-background duration-300 ease-in-out">
            <h3 class="font-bold text-2xl pb-[1vh]">⏳ Easy To Use</h3>
            <p class="text-lg">You can add your own habits and track them as you please. You can follow your progress by following easy to read visual graphs.</p>
          </article>
          <article class="gap-[2vh] flex justify-center w-full h-[25vh] min-h-fit flex flex-col mb-2 bg-[var(--primary-color)]/80 rounded-xl shadow-md py-3 px-5 hover:bg-[var(--primary-color)] hover:transform hover:-translate-y-[2px] transition-background duration-300 ease-in-out">
            <h3 class="font-bold text-2xl pb-[1vh]">🌍 Open source</h3>
            <p class="text-lg">I'm self-hosting this website all by myself, and my whole page is open source. You can find my source code on <a target="_blank" rel="noopener noreferrer" class="intro-article-link" href="https://github.com/sBugrak/bugrakat">GitHub</a>.</p>
          </article>
          <article class="gap-[2vh] flex justify-center w-full h-[25vh] min-h-fit flex flex-col mb-2 bg-[var(--primary-color)]/80 rounded-xl shadow-md py-3 px-5 hover:bg-[var(--primary-color)] hover:transform hover:-translate-y-[2px] transition-background duration-300 ease-in-out">
            <h3 class="font-bold text-2xl pb-[1vh]">🕵️‍♂️ Private</h3>
            <p class="text-lg">I'm only collecting the habits you add. I'm not selling your data to third parties and I don't plan to do so.</p>
          </article>
        </section>
      </div>

      <div class="w-full p-3 bg-(--primary-color)">
        <section>
          <h2 class="notes-title">Important Notes</h2>
          <p class="notes-text">In the future, I'll make the login system work and then continue with the full application. If you are interested in my hobby project, you can bookmark this page and check back later. Since there's not much to talk about now, I'll not create a changelog yet. However, the changes will be constant since I'm dedicated to create somethign that doesn't suck.</p>
        </section>
        <section>
          <h2 class="notes-title">Now What To Do?</h2>
          <p class="notes-text">You should <a href="index.php?page=register">Register</a> and <a href="index.php?page=enter">Login</a> to start using the website. Until far in the future, the only purpose of this website is going to be tracking habits. I'll be focusing on that.</p>
        </section>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "BugraKat",
  meta: [
    {
      name: "description",
      content: "Track your habits, don't get tracked for it.",
    },
  ],
};
