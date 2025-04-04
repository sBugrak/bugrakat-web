import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import navbarStyles from '~/styles/navbar.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(navbarStyles);

  return (
    <div class="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main class="flex-grow">
        <Slot />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
});
