export interface Service {
  slug: string;
  title: string;
  shortLabel: string;
  tagline: string;
  heroImage: string;
  /** Optional looping clip shown over heroImage (which becomes its poster). */
  heroVideo?: string;
  heroAlt: string;
  cardImage: string;
  cardAlt: string;
  description: string[];
  benefits: { title: string; text: string }[];
  gallery: { src: string; alt: string }[];
  faq: { question: string; answer: string }[];
}

// Fotografitë dhe videot janë materiale origjinale të Onyx Hairline (public/media/).
export const services: Service[] = [
  {
    slug: 'zgjatime-flokesh',
    title: 'Zgjatime Flokësh',
    shortLabel: 'Gjatësi · Volum · Natyralitet',
    tagline: 'Gjatësi e pakufishme. Ndjesi krejtësisht natyrale.',
    heroImage: '/media/img/hero-zgjatime-poster.webp',
    heroVideo: '/media/video/hero-zgjatime.mp4',
    heroAlt: 'Tufë zgjatimesh me flokë njerëzorë me valëzim natyral',
    cardImage: '/media/img/card-zgjatime.webp',
    cardAlt: 'Klientja me zgjatime bionde me valë të buta në sallonin Onyx',
    description: [
      'Zgjatimet tona realizohen me flokë njerëzorë të përzgjedhur për strukturën, dendësinë dhe shkëlqimin e tyre. Çdo aplikim nis me një konsultë të hollësishme, ku përcaktojmë gjatësinë, volumin dhe nuancën që bashkohet në mënyrë të padukshme me flokët tuaj.',
      'Teknika zgjidhet sipas tipit të flokut dhe stilit tuaj të jetesës. Vendosja e kujdesshme ruan lëvizjen natyrale dhe rehatinë, ndërsa prerja përfundimtare krijon një siluetë të balancuar nga çdo kënd.',
      'Pas shërbimit, ju udhëzojmë për mirëmbajtjen në shtëpi dhe ritmin e rregullimeve, në mënyrë që rezultati të mbetet i bukur, i butë dhe i shëndetshëm për sa më gjatë.',
    ],
    benefits: [
      { title: 'Flokë njerëzorë cilësorë', text: 'Përzgjidhen për butësi, qëndrueshmëri dhe sjellje sa më natyrale.' },
      { title: 'Përshtatje e personalizuar', text: 'Ngjyra, gjatësia dhe dendësia harmonizohen me tiparet dhe flokët tuaj.' },
      { title: 'Vendosje diskrete', text: 'Pikat e aplikimit pozicionohen me kujdes për liri në stilim dhe rehati.' },
      { title: 'Këshillim pas shërbimit', text: 'Merrni udhëzime të qarta për larjen, stilimin dhe mirëmbajtjen periodike.' },
    ],
    gallery: [
      { src: '/media/img/zgjatime-1.webp', alt: 'Krahasim i flokut natyral me tufën e zgjatimeve para vendosjes' },
      { src: '/media/img/zgjatime-2.webp', alt: 'Koleksion tufash me flokë njerëzorë në nuanca të ndryshme, me qesen Onyx' },
      { src: '/media/img/zgjatime-3.webp', alt: 'Rezultat me zgjatime të drejta bionde para murit me logon Onyx' },
    ],
    faq: [
      { question: 'Sa zgjasin zgjatimet e flokëve?', answer: 'Kohëzgjatja varet nga teknika, kujdesi në shtëpi dhe ritmi i rritjes së flokut. Gjatë konsultës përcaktojmë edhe planin e mirëmbajtjes që i përshtatet rutinës suaj.' },
      { question: 'A mund t’i stiloj me nxehtësi?', answer: 'Po, flokët njerëzorë mund të stilohen. Rekomandojmë gjithmonë mbrojtës termik, temperaturë të kontrolluar dhe shmangien e nxehtësisë së drejtpërdrejtë mbi pikat e lidhjes.' },
      { question: 'Si zgjidhet ngjyra e duhur?', answer: 'Përdorim krahasim fizik të nuancave dhe, kur nevojitet, kombinojmë disa tone për një kalim shumëdimensional dhe natyral.' },
      { question: 'A dëmtojnë flokun natyral?', answer: 'Aplikimi profesional, pesha e përshtatur dhe mirëmbajtja në kohë janë thelbësore për të respektuar flokun natyral. Gjithçka vlerësohet individualisht para vendosjes.' },
    ],
  },
  {
    slug: 'ngjyrosje-flokesh',
    title: 'Ngjyrosje Flokësh',
    shortLabel: 'Tonalitet · Dritë · Dimension',
    tagline: 'Nuanca juaj, e interpretuar me saktësi.',
    heroImage: '/media/img/hero-ngjyrosje.webp',
    heroAlt: 'Flokë bionde me valë para murit me tufa flokësh në sallonin Onyx',
    cardImage: '/media/img/card-ngjyrosje.webp',
    cardAlt: 'Flokë të gjatë me kalim nga kafe në biond të ndritshëm',
    description: [
      'Ngjyra e bukur nuk është thjesht një nuancë; është ekuilibër mes tonit të lëkurës, strukturës së flokut dhe mënyrës si drita lëviz mbi të. Ne krijojmë ngjyrosje të personalizuara që duken të rafinuara sot dhe rriten bukur me kalimin e kohës.',
      'Nga ndryshimet e plota te balayage, reflektimet e buta dhe korrigjimet e ngjyrës, çdo proces planifikohet me vëmendje ndaj shëndetit të fibrës. Formula dhe teknika përshtaten pas një analize të gjendjes aktuale të flokut.',
      'Përfundimi përfshin tonalizim dhe kujdes specifik për shkëlqim, butësi dhe një rezultat me dimension. Ju merrni gjithashtu një plan praktik për ruajtjen e nuancës mes vizitave.',
    ],
    benefits: [
      { title: 'Konsultë kromatike', text: 'Vlerësojmë tonin e lëkurës, bazën aktuale dhe rezultatin që dëshironi.' },
      { title: 'Formula të personalizuara', text: 'Çdo përzierje krijohet posaçërisht për nuancën dhe strukturën e flokut tuaj.' },
      { title: 'Dimension natyral', text: 'Vendosja strategjike e dritës krijon thellësi pa vija të forta.' },
      { title: 'Mbrojtje dhe shkëlqim', text: 'Procesi shoqërohet me kujdes që ndihmon në ruajtjen e butësisë së flokut.' },
    ],
    gallery: [
      { src: '/media/img/ngjyrosje-1.webp', alt: 'Flokë të drejtë me balayage bionde dhe fund të lëmuar' },
      { src: '/media/img/ngjyrosje-2.webp', alt: 'Tufë bionde me rrënjë më të errët dhe reflektime të ngrohta' },
      { src: '/media/img/ngjyrosje-3.webp', alt: 'Kalim i butë nga kafe e errët në biond në flokë të gjatë' },
    ],
    faq: [
      { question: 'A duhet konsultë para ngjyrosjes?', answer: 'Po, veçanërisht për ndryshime të mëdha ose korrigjim ngjyre. Konsulta na lejon të vlerësojmë historikun, gjendjen e flokut dhe rrugën më të sigurt drejt rezultatit.' },
      { question: 'Sa kohë zgjat një seancë?', answer: 'Koha ndryshon sipas teknikës, gjatësisë dhe historikut të flokut. Pas konsultës ju japim një parashikim të qartë për seancën tuaj.' },
      { question: 'Si ruhet ngjyra më gjatë?', answer: 'Përdorni produkte për flokë të ngjyrosur, ujë jo shumë të nxehtë dhe mbrojtje termike. Do t’ju rekomandojmë një rutinë sipas nuancës suaj.' },
      { question: 'A realizoni korrigjim ngjyre?', answer: 'Po. Korrigjimi nis gjithmonë me analizë dhe mund të kërkojë më shumë se një seancë për të ruajtur integritetin e flokut.' },
    ],
  },
  {
    slug: 'trajtime-flokesh',
    title: 'Trajtime Flokësh',
    shortLabel: 'Rikthim · Forcë · Shkëlqim',
    tagline: 'Kujdes i thellë për flokë që ndihen po aq mirë sa duken.',
    heroImage: '/media/img/hero-trajtime.webp',
    heroAlt: 'Tufa flokësh kafe me shkëlqim të thellë në dritë natyrale',
    cardImage: '/media/img/card-trajtime.webp',
    cardAlt: 'Flokë kafe të gjatë me valë dhe shkëlqim të shëndetshëm',
    description: [
      'Floku ndryshon nga stina, stilimi, ngjyrosja dhe ritmi i jetës. Trajtimet tona nisin me një vlerësim të strukturës dhe nevojave të tij, për të zgjedhur kujdesin që sjell përmirësim të dukshëm pa e rënduar.',
      'Punojmë mbi hidratimin, forcimin dhe butësinë përmes protokolleve profesionale të përshtatura. Qëllimi është të mbështesim fibrën e flokut, të reduktojmë pamjen e dëmtimit dhe t’i rikthejmë shkëlqimin e kontrollin.',
      'Trajtimi mund të shoqërojë shërbimin e ngjyrosjes ose të realizohet më vete si ritual mirëmbajtjeje. Në fund, ndërtojmë një rutinë të thjeshtë që vazhdon kujdesin edhe në shtëpi.',
    ],
    benefits: [
      { title: 'Diagnozë e personalizuar', text: 'Përcaktojmë nevojat reale të flokut para se të zgjedhim protokollin.' },
      { title: 'Hidratim i thellë', text: 'Rikthen ndjesinë e butësisë dhe ndihmon në kontrollin e flokut të thatë.' },
      { title: 'Mbështetje për fibrën', text: 'Kujdesi profesional ndihmon flokun e dobësuar nga procese kimike dhe termike.' },
      { title: 'Rezultat i menjëhershëm', text: 'Floku duket më i lëmuar, më i ndritshëm dhe më i lehtë për t’u stiluar.' },
    ],
    gallery: [
      { src: '/media/img/trajtime-1.webp', alt: 'Tufë flokësh kafe të errët, të lëmuar dhe me shkëlqim' },
      { src: '/media/img/trajtime-2.webp', alt: 'Flokë me valë natyrale, të butë dhe të hidratuar' },
      { src: '/media/img/trajtime-3.webp', alt: 'Detaj i valëve të buta në flokë me ton kafe të ftohtë' },
    ],
    faq: [
      { question: 'Cili trajtim është i duhuri për mua?', answer: 'Kjo përcaktohet pas vlerësimit të porozitetit, elasticitetit, historikut kimik dhe shqetësimit tuaj kryesor. Nuk përdorim të njëjtin protokoll për çdo flok.' },
      { question: 'Sa shpesh rekomandohet trajtimi?', answer: 'Ritmi varet nga gjendja e flokut dhe rutina juaj. Mund të jetë një ritual periodik ose pjesë e planit pas ngjyrosjes; rekomandimin e japim individualisht.' },
      { question: 'A e rëndon trajtimi flokun e hollë?', answer: 'Zgjedhim produkte dhe sasi sipas dendësisë së flokut. Për flokun e hollë fokusohemi te formula të lehta që japin kujdes pa humbur lëvizjen.' },
      { question: 'A mund të kombinohet me ngjyrosjen?', answer: 'Po. Shumë protokolle mund të integrohen në ditën e ngjyrosjes për të mbështetur butësinë dhe shkëlqimin e rezultatit.' },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
