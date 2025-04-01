import { useStyles$, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import backgroundStyles from '~/styles/background.css?inline';
import navbarStyles from '~/styles/navbar.css?inline';

export default component$(() => {
  useStyles$(backgroundStyles);
  useStyles$(navbarStyles);
  return (
    <div class="background">
      <Navbar />
      <h2>QWIK WEB APP!</h2>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "BugraKat",
  meta: [
    {
      name: "Habit Tracker",
      content: "Track your habits, don't get tracked for it.",
    },
  ],
};
