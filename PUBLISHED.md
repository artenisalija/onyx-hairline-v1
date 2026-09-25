# Publikimi i Onyx Hairline V1

Ky dokument përmbledh ku ndodhet faqja e publikuar, si rindërtohet dhe si ripublikohet. Për zhvillimin lokal dhe strukturën e kodit shihni [README.md](README.md).

## Lidhjet publike

| Mjedisi | Lidhja | Mënyra e publikimit |
| --- | --- | --- |
| Domeni kryesor | https://onyxhairline.com/ | Cloudflare Pages, projekti `onyx-hairline`, Custom domain |
| Cloudflare Pages (nën-domeni) | https://onyx-hairline.pages.dev/ | Cloudflare Pages, projekti `onyx-hairline` |
| GitHub Pages (pamje paraprake) | https://artenisalija.github.io/onyx-hairline-v1/ | GitHub Actions, `.github/workflows/deploy.yml` |
| Depoja e kodit | https://github.com/artenisalija/onyx-hairline-v1 | dega `main` |

Domeni `onyxhairline.com` (dhe `www.onyxhairline.com`) janë lidhur si Custom Domains te projekti `onyx-hairline` në Cloudflare Pages, në llogarinë `Artialija1996@gmail.com`. DNS mbahet te i njëjti zone në Cloudflare: rrënja ka një rekord `CNAME` drejt `onyx-hairline.pages.dev` (proxied), `www` ka `CNAME` drejt rrënjës. Certifikata SSL sigurohet automatikisht nga Cloudflare/Google Trust Services.

## Karakteristikat e ndërtimit

| Parametri | Vlera |
| --- | --- |
| Korniza | Astro (`output: 'static'`) |
| Komanda e ndërtimit | `npm run build` |
| Dosja e rezultatit | `dist` |
| Komanda e instalimit | `npm ci` |
| Versioni i Node.js | 22 (i njëjtë me atë të GitHub Actions) |
| Formati i rrugëve | dosje me `/` në fund (`trailingSlash: 'always'`) |

Faqja është plotësisht statike: pa bazë të dhënash, pa rrugë API, pa proces Node.js në host. Hosti shërben vetëm skedarë.

## Ripublikimi në Cloudflare Pages

Nëse projekti në Cloudflare është i lidhur me depon në GitHub, çdo `git push` te `main` nis vetë një ndërtim të ri. Kontrolloni gjendjen te Cloudflare Dashboard → **Workers & Pages** → `onyx-hairline` → **Deployments**.

Cilësimet e ndërtimit duhet të jenë:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Environment variable:** `NODE_VERSION = 22`

Për ngarkim manual pa lidhje me GitHub:

```bash
npm ci
npm run build
npx wrangler pages deploy dist --project-name=onyx-hairline
```

## Ripublikimi në GitHub Pages

Publikimi ndodh vetvetiu nga `.github/workflows/deploy.yml` në çdo `push` te `main`, ose manualisht nga skeda **Actions** → **Publiko Onyx Hairline V1** → **Run workflow**.

Ky rrjedhim ndërton me `GITHUB_ACTIONS=true`, prandaj `astro.config.mjs` vendos `base: '/onyx-hairline-v1'`. Jashtë GitHub Actions — pra edhe në Cloudflare Pages, HawkHost apo lokalisht — `base` mbetet `/`. Kjo do të thotë se i njëjti kod ndërtohet drejt për të dyja mjediset dhe se rezultati i GitHub Pages **nuk** duhet ngarkuar në rrënjën e një domeni tjetër.

## Publikimi alternativ në HawkHost

Hapat e plotë me cPanel dhe FTP janë te [README.md](README.md). Përmbledhje: `npm run build`, pastaj ngarkoni **përmbajtjen** e `dist/` në rrënjën e dokumenteve të domenit, duke ruajtur `_astro/` dhe `sherbimet/`.

## Kontrolli pas çdo publikimi

1. Ballina hapet dhe animacioni i fijes së flokut nuk bllokon lëvizjen e faqes.
2. Të tri faqet e shërbimeve hapen nga `/sherbimet/` dhe secila ka përmbajtjen e vet.
3. `/rreth-nesh/` dhe `/kontakt/` hapen dhe formulari shfaq konfirmimin.
4. Një rrugë e pasaktë shfaq faqen `404`.
5. `favicon.svg` shfaqet te skeda e shfletuesit.
6. Butoni lundrues i WhatsApp-it hap bisedën me numrin e saktë.
7. Faqja kontrollohet edhe në celular dhe me `prefers-reduced-motion` të aktivizuar.

## Ende të hapura para publikimit përfundimtar

- Numri +355 69 345 2141 (telefon dhe WhatsApp) është marrë nga bio e Instagram-it; pret konfirmim nga klienti.
- Ditët e punës (e hënë – e shtunë) janë nga Instagram-i; orari 09:00 – 19:00 pret konfirmim.
- Adresa është nxjerrë nga pika e Google Maps që dërgoi Klea; formulimi pret konfirmim.
- Before/after te Ngjyrosje Flokësh duhet zëvendësuar me një çift me të njëjtën veshje dhe pozicion.
- Formulari te `src/pages/kontakt.astro` nuk dërgon të dhëna derisa të vendoset `data-endpoint`.

Fotografitë dhe videot janë tashmë materiale reale nga salloni (`public/media/`). `astro.config.mjs` vendos `site: 'https://onyxhairline.com'` jashtë GitHub Actions, kështu që URL-të absolute (p.sh. `og:image`) tani janë të sakta.
