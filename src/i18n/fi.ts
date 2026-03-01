import type { Locale } from './en';

const fi: Locale = {
  nav: {
    about: 'Tietoa',
    skills: 'Taidot',
    projects: 'Projektit',
    experience: 'Kokemus',
    contact: 'Ota yhteyttä',
    hireMe: 'Palkkaa minut',
  },
  hero: {
    availableBadge: 'Avoin uusille mahdollisuuksille',
    greeting: 'Hei, olen',
    cta: {
      work: 'Katso töitäni',
      contact: 'Ota yhteyttä',
    },
  },
  about: {
    heading: 'Tietoa minusta',
    bio: [
      'Minulla on lähes kaksi vuotta kokemusta frontend-kehityksestä, ja olen työskennellyt pääasiassa TypeScriptin, Reactin ja Next.js:n kanssa skaalautuvien web-sovellusten parissa.',
      'Tieto- ja viestintätekniikan opintoni {university} antoivat minulle vahvan teknisen pohjan ja auttoivat kehittämään avointa ja yhteisöllistä persoonallisuuttani — olen parhaimmillani tiimeissä, joissa arvostetaan dynaamisuutta.',
      'Olen aidosti intohimoinen käyttämään taitojani projekteissa, jotka ovat innovatiivisia ja joilla on positiivinen vaikutus. Suoritan parhaillaan {degree} -tutkintoani ja etsin tiimiä, jossa voin kehittyä ja vaikuttaa.',
    ],
    meta: {
      location: 'Sijainti',
      email: 'Sähköposti',
    },
  },
  skills: {
    heading: 'Taidot',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      tooling: 'Työkalut & DevOps',
      other: 'Muut',
    },
  },
  projects: {
    heading: 'Projektit',
    liveDemo: 'Live-demo',
    source: 'Lähdekoodi',
    live: 'Live →',
    repo: 'Repo →',
  },
  experience: {
    heading: 'Kokemus',
  },
  contact: {
    heading: 'Ota yhteyttä',
    body: 'Onpa sinulla mielessä projekti, kysymys tai haluatko vain sanoa hei — postilaatikkoni on aina auki.',
    form: {
      name: 'Nimi',
      namePlaceholder: 'Matti Meikäläinen',
      email: 'Sähköposti',
      emailPlaceholder: 'matti@esimerkki.fi',
      message: 'Viesti',
      messagePlaceholder: 'Kerro projektistasi…',
      send: 'Lähetä viesti',
      sending: 'Lähetetään…',
    },
    success: {
      title: 'Viesti lähetetty!',
      body: 'Kiitos yhteydenotosta. Palaan asiaan pian.',
    },
  },
  footer: {
    rights: 'Kaikki oikeudet pidätetään.',
  },
};

export default fi;
