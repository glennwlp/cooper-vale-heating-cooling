# Cooper & Vale Heating & Cooling — demo site

Fictional demo site built by AirLeads Builder from the Penpot design. Astro (static) + Tailwind 4 + TypeScript, Fontsource fonts (Fraunces, DM Sans). The quote forms are front-end only; nothing is sent.

```sh
npm install
npm run dev        # local dev
npx astro build    # outputs dist/
npx wrangler deploy  # Cloudflare Worker static assets -> cooper-vale-heating-cooling.glenn-b84.workers.dev
```

Routes: `/`, `/services/`, `/services/ducted-reverse-cycle/`, `/services/split-systems-reverse-cycle-heating/`, `/services/servicing-maintenance-plans/`, `/areas/glen-waverley/`, `/areas/berwick/`, `/areas/rowville/`, `/about/`, `/contact/`, `/blog/`, `/blog/ducted-vs-split-systems-melbourne/`.
