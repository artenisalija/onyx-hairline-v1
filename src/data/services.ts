export interface Service {
  slug: string;
  title: string;
  shortLabel: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  cardImage: string;
  cardAlt: string;
  description: string[];
  benefits: { title: string; text: string }[];
  gallery: { src: string; alt: string }[];
  faq: { question: string; answer: string }[];
}

// TODO: zëvendëso fotografitë e përkohshme me materialet origjinale të Onyx Hairline.
export const services: Service[] = [
  {
    slug: 'zgjatime-flokesh',
    title: 'Zgjatime Flokësh',
    shortLabel: 'Gjatësi · Volum · Natyralitet',
    tagline: 'Gjatësi e pakufishme. Ndjesi krejtësisht natyrale.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&fm=webp&w=2000&q=85',
    heroAlt: 'Flokë të gjatë dhe të shëndetshëm me shkëlqim natyral',
    cardImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&fm=webp&w=1000&q=82',
    cardAlt: 'Portret me flokë të gjatë në dritë të butë',
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
      { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Flokë të gjatë ngjyrë kafe me valëzim të butë' },
      { src: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Pamje elegante me flokë të gjatë dhe volum' },
      { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Portret me flokë natyralë dhe të dendur' },
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
    heroImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&fm=webp&w=2000&q=85',
    heroAlt: 'Flokë të ngjyrosur profesionalisht me reflektime të ngrohta',
    cardImage: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&fm=webp&w=1000&q=82',
    cardAlt: 'Detaj i flokëve me reflektime shumëdimensionale',
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
      { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Ngjyrosje kafe e ngrohtë me shkëlqim' },
      { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Portret me tonalitet natyral dhe dritë të butë' },
      { src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Flokë me reflektime të ndritshme dhe dimension' },
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
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&fm=webp&w=2000&q=85',
    heroAlt: 'Ambient profesional për trajtime të kujdesshme të flokëve',
    cardImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&fm=webp&w=1000&q=82',
    cardAlt: 'Kujdes profesional për flokë të butë dhe të shëndetshëm',
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
      { src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Larje dhe trajtim profesional në sallon' },
      { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Flokë të shëndetshëm pas trajtimit profesional' },
      { src: 'https://images.unsplash.com/photo-1523268755815-fe7c372a0349?auto=format&fit=crop&fm=webp&w=900&q=82', alt: 'Detaj i flokëve të butë dhe me shkëlqim' },
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
