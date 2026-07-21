# Onyx Hairline V1

Faqe prezantuese plotësisht statike për Onyx Hairline, e ndërtuar me Astro, Tailwind CSS dhe GSAP. Projekti nuk përdor bazë të dhënash, rrugë API apo proces Node.js në host.

## Kërkesat lokale

- Node.js 20 ose më i ri
- npm 10 ose më i ri

Node.js nevojitet vetëm në kompjuterin ku zhvillohet dhe ndërtohet faqja. HawkHost merr vetëm skedarët statikë të prodhuar.

## Zhvillimi lokal

```bash
npm install
npm run dev
```

Adresa lokale shfaqet në terminal, zakonisht `http://localhost:4321`.

## Kontrolli dhe ndërtimi statik

```bash
npm run check
npm run build
```

Astro krijon dosjen `dist/`. Kjo është dosja e vetme që duhet publikuar në HawkHost. Për ta kontrolluar lokalisht versionin e ndërtuar:

```bash
npm run preview
```

## Publikimi në HawkHost me cPanel

1. Ekzekutoni `npm install`, pastaj `npm run build` në kompjuterin lokal.
2. Hapni dosjen `dist/` dhe krijoni një arkiv `.zip` me **përmbajtjen** e saj. Mos vendosni vetë dosjen `dist` si nivel shtesë brenda arkivit.
3. Hyni në cPanel të HawkHost dhe hapni **File Manager**.
4. Hapni `public_html/` për domenin kryesor. Për një domen shtesë, hapni rrënjën e dokumenteve që cPanel tregon për atë domen.
5. Ngarkoni arkivin, përdorni **Extract**, pastaj hiqni arkivin nga hosti.
6. Verifikoni që `index.html`, dosja `_astro/`, `favicon.svg` dhe dosjet e faqeve si `sherbimet/`, `kontakt/` e `rreth-nesh/` ndodhen drejtpërdrejt në rrënjën e domenit.
7. Hapni domenin dhe kontrolloni Ballinën, secilën faqe shërbimi dhe formularin.

Nuk duhet të ngarkohen `node_modules/`, `src/`, `package.json` apo skedarët e tjerë të projektit. Nuk kërkohet dhe nuk duhet konfiguruar një aplikacion Node.js në cPanel.

## Publikimi me FTP

Pas `npm run build`, lidheni klientin FTP me rrënjën e dokumenteve të domenit dhe ngarkoni të gjithë skedarët e dosjet **brenda** `dist/`. Ruani strukturën e dosjeve, veçanërisht `_astro/` dhe `sherbimet/`.

## Çfarë duhet konfirmuar para publikimit

- Zëvendësoni `+355XXXXXXXXX` dhe lidhjen `wa.me/355XXXXXXXXX` në komponentin lundrues dhe faqen e kontaktit.
- Vendosni adresën dhe orarin përfundimtar.
- Zëvendësoni fotografitë e përkohshme me fotografitë origjinale të markës. Kërkoni në projekt për `TODO` dhe `përkohshme`.
- Zëvendësoni dëshmitë shembull në Ballinë me dëshmi reale dhe të miratuara.
- Vendosni lidhjet reale të Instagramit dhe Facebook-ut në fundfaqe.
- Lidhni formularin me një shërbim statik formularësh ose me pikën e miratuar të dërgimit. Vendoseni adresën te atributi `data-endpoint` i formularit në `src/pages/kontakt.astro`. Deri atëherë formulari shfaq vetëm një konfirmim demonstrues dhe nuk dërgon të dhëna.

## Struktura kryesore

```text
src/
  components/     komponentët globalë dhe ndërfaqja
  data/            përmbajtja e tri shërbimeve
  layouts/         faqosja bazë dhe faqosja e përbashkët e shërbimeve
  pages/           të gjitha rrugët statike
  styles/          stilet globale dhe Tailwind CSS
public/            skedarë publikë
dist/              rezultati statik, krijohet nga komanda e ndërtimit
```

Tri faqet individuale të shërbimeve krijohen nga `src/data/services.ts` përmes një faqosjeje të vetme të përbashkët. Animacioni i fijes së flokut dhe zbulimet në lëvizje përdorin GSAP me ScrollTrigger; kur përdoruesi ka aktivizuar zvogëlimin e lëvizjeve, fija shfaqet statike dhe animacionet çaktivizohen.
