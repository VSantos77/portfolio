import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: 'https://vsantos77.github.io',
    base: '/portfolio',
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
