# Bang Bang Barber Shop — Smithtown, NY

Single-page marketing site. Vite + React + Tailwind v4. No backend, no SSR, no Lovable dependencies.

Ported from the Lovable project (`5f053789-62b6-4682-ac62-0ccbcf213a1f`) by reading the actual
source files, so layout, spacing, and styling match — not just the copy.

## Deploy to Vercel (no coding tools needed, ~3 minutes)

1. github.com → **New repository** → name it `bangbang-barbershop` → Create.
2. On the empty repo page click **uploading an existing file**.
3. Unzip this folder, select **everything inside it** (not the folder itself), drag it in. Commit.
4. vercel.com → **Add New → Project** → import that repo.
5. Vercel auto-detects Vite. Change nothing. **Deploy**.

Every future push to GitHub redeploys automatically.

### With Node installed
```
npm install
npm run dev      # localhost:5173
npm run build    # production build into dist/
```

## Before you show the client

- [ ] **Google rating** — the hero claims "5★". Confirm against the live Google Business profile.
- [ ] **Hours** — Mon–Fri 8:30AM–6:30PM, Sat 8AM–6PM, Sun 9AM–4PM. These live in
      `src/components/Visit.tsx` **and** the schema in `index.html`. Change both together.
- [ ] **Photos** — the six in `src/assets/` are ~500px pulls from the Google listing. Ask the
      owner for original camera photos and swap them in under the same filenames. Biggest
      available quality upgrade.
- [ ] **og:image** — currently `/og.jpg`. Once you have the real domain, make it absolute
      (`https://yourdomain.com/og.jpg`) in `index.html` so link previews render.
- [ ] **Brand name** — this build uses "Bang Bang Barber Shop" (two words) to match your Lovable
      version. The storefront sign reads "BARBERSHOP" (one word). Whatever you pick, the
      `name` field in the schema should match the Google Business Profile exactly — mismatched
      names weaken local SEO.
- [ ] **"Est. Smithtown"** — "Est." reads as though a year follows. "Est. 2013" (the year one
      review references) or just "Smithtown · Long Island" both scan better. Hero.tsx line 23.

## What's different from the Lovable version

**Removed:** TanStack Start/Router/Query, nitro, SSR error wrappers,
`@lovable.dev/vite-tanstack-config`, ~70 unused shadcn components, the `motion` library
(the hero's one fade-in is now CSS), the MCP server routes, the "Edit with Lovable" badge.
Dependencies: react, react-dom, lucide-react.

**Fixed:** the meta description that advertised "high-converting single-page website services
for barbershops" instead of the shop; Lovable author/twitter/og tags; the Lovable preview
screenshot as og:image.

**Added:** full BarberShop schema (street address, phone, hours, amenities, service pricing);
tap-to-call CTAs; `prefers-reduced-motion` support; visible keyboard focus rings; photos
optimized from 3MB of PNG to ~450KB of progressive JPEG.

## Two deliberate differences, both reversible

**CTAs dial the phone.** In the Lovable version "Book Your Cut" and "Book Now" scroll to the
Visit section. Here they call (631) 979-6056. For a walk-in shop with no online booking, a
button labeled "Book" that doesn't book is a dead end on mobile. To revert, change the `href`
back to `#visit` in `Hero.tsx` and `Nav.tsx`.

**The review carousel doesn't auto-advance for reduced-motion users.** Arrows and dots still
work; only the 5-second timer is skipped. `Reviews.tsx`, in the `useEffect`.
