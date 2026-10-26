// Zentrale Inhalte der HELIOS-Website (übernommen von helios-hilfen.de,
// Stand 23.10.2026). Startseite, Footer und Rechtstexte lesen von hier.

export const contact = {
  company: 'HELIOS Hilfen GmbH',
  brand: 'HELIOS - Kinder- und Familienhilfe',
  street: 'Friedberger Str. 8',
  city: '61118 Bad Vilbel',
  phone: '+49 6101 656325 0',
  phoneHref: 'tel:+4961016563250',
  fax: '+49 6101 656325 5',
  email: 'helios@helios-hilfen.de',
  management: 'Philipp Z. Açba',
  court: 'Amtsgericht Friedberg:',
  register: 'HRB 7969',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.722696978316!2d8.740824077497107!3d50.18502090643858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd050c0ce35dd3%3A0x37d743aec65d2042!2sHelios%20Hilfen%20GmbH!5e0!3m2!1sde!2sde!4v1747821089365!5m2!1sde!2sde',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Helios+Hilfen+GmbH+Friedberger+Str.+8+61118+Bad+Vilbel',
};

// One-Pager-Abschnitte: Menü und Punkt-Navigation rechts
export const sections = [
  { id: 'willkommen', label: 'Willkommen' },
  { id: 'unser-leitbild', label: 'Unser Leitbild' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'unser-team', label: 'Unser Team' },
];

export const team = [
  { name: 'Alexandra Kaffine', lines: ['M.Sc. Psychologie', 'ISEF'], role: 'Teamleitung', email: 'a.kaffine@helios-hilfen.de' },
  { name: 'Franziska Platz', lines: ['M.A. soziale Arbeit'], role: 'Teamleitung', email: 'f.platz@helios-hilfen.de' },
  { name: 'Heike Franzmann', lines: [], role: 'Verwaltung', email: 'h.franzmann@helios-hilfen.de' },
  { name: 'Philipp Z. Açba', lines: [], role: 'Geschäftsführung', email: 'p.acba@helios-hilfen.de' },
];

type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ul'; items: string[] };

export interface Leistung {
  id: string;
  title: string;
  /** Einleitung: Absätze, je Eintrag eine Zeile (im Original per <br>) */
  intro: string[];
  blocks: Block[];
  law?: { label: string; href: string };
}

export const leistungen: Leistung[] = [
  {
    id: 'erziehungsbeistandschaft',
    title: '§30 SGB VIII – Erziehungsbeistandschaft',
    intro: [
      'Die Erziehungsbeistandschaft unterstützt junge Menschen dabei, ihren Alltag zunehmend selbstständig, verantwortungsvoll und strukturiert zu gestalten. Sie hilft bei der Entwicklung eigener Perspektiven, dem Umgang mit persönlichen Herausforderungen sowie der schulischen und beruflichen Orientierung.',
      'Emotionale und soziale Kompetenzen werden gestärkt, Konfliktfähigkeit gefördert und die jungen Menschen in belastenden Situationen professionell begleitet.',
      'Ziel ist ein gefestigter Entwicklungsprozess hin zu einem selbstbestimmten Erwachsenwerden.',
    ],
    blocks: [
      { type: 'h', text: 'Mögliche Themenbereiche' },
      {
        type: 'ul',
        items: [
          'Verselbstständigung und Aufbau einer stabilen Alltagsstruktur',
          'Erarbeitung realistischer Zukunftsperspektiven (z. B. Beruf, Ausbildung, Studium)',
          'Unterstützung bei Schule, Job- oder Ausbildungsfindung',
          'Finanzielle Absicherung, insbesondere bei Übergängen ins Erwachsenenleben',
          'Umgang mit familiären Konflikten, emotionalen Belastungen und persönlichen Krisen',
          'Begleitung bei Themen wie Abhängigkeit, Straffälligkeit oder persönlicher Neuorientierung',
          'Förderung der Persönlichkeitsentwicklung und sozialer Kompetenzen',
        ],
      },
      { type: 'h', text: 'Methoden' },
      {
        type: 'ul',
        items: [
          'Regelmäßige Einzelgespräche',
          'Begleitung bei schulischen, beruflichen und behördlichen Anliegen',
          'Genogramm- und Biografiearbeit',
          'Ressourcenarbeit (z. B. Ressourcenbaum)',
          'Notfallpläne und Notfallkoffer',
          'Alltagspraktisches Training (Haushalt, Struktur, Zeitmanagement)',
          'Emotionsregulation (z. B. Wutthermometer)',
          'Entwicklung sozialer Kompetenzen',
          'Krisenintervention',
          'Unterstützung beim Aufbau stabiler sozialer Netzwerke',
        ],
      },
    ],
    law: { label: 'Zum §30 SGB VIII – Erziehungsbeistandschaft', href: 'https://www.gesetze-im-internet.de/sgb_8/__30.html' },
  },
  {
    id: 'familienhilfe',
    title: '§31 SGB VIII – Sozialpädagogische Familienhilfe',
    intro: [
      'Die Sozialpädagogische Familienhilfe stärkt Familien darin, ihren Alltag verlässlich, strukturiert und gemeinsam zu bewältigen.',
      'Wir fördern eine wertschätzende Kommunikation, helfen Konflikte konstruktiv zu lösen und unterstützen Eltern wie Kinder dabei, sichere Routinen und förderliche Erziehungsstrategien aufzubauen.',
      'Belastungen werden reduziert, Ressourcen aktiviert und die Selbstwirksamkeit der gesamten Familie gestärkt.',
    ],
    blocks: [
      { type: 'h', text: 'Mögliche Themenbereiche' },
      {
        type: 'ul',
        items: [
          'Kinder-, Eltern- und Familientermine nach Bedarf',
          'Erarbeitung von Konfliktlösungsstrategien für Alltagssituationen',
          'Etablierung einer gesunden Streitkultur',
          'Förderung von gegenseitigem Verständnis, Respekt und Rücksichtsnahme',
          'Unterstützung bei finanzieller Stabilisierung und Haushaltsorganisation',
          'Ausweitung sozialer Netzwerke zur Entlastung und Stärkung der Familie',
          'Entwicklung individueller Erziehungskompetenzen und familiärer Routinen',
        ],
      },
      { type: 'h', text: 'Methoden' },
      {
        type: 'ul',
        items: [
          'Kinder-, Eltern- und Familientermine',
          'Familienaufstellungen / „Familie in Tieren“',
          'Netzwerkkarten, Lebensweltanalysen',
          'Konflikt- und Kommunikationsmodelle',
          'Alltagsstrukturierung (Wochen- und Tagespläne)',
          'Entwicklung von Erziehungsstrategien',
          'Entspannungstechniken und Stressreduktion',
          'Rollenspiele und Übungssituationen',
          'Erarbeitung von Notfallstrategien',
          'Unterstützung bei finanziellen und organisatorischen Anliegen',
        ],
      },
    ],
    law: { label: 'Zum §31 SGB VIII – Sozialpädagogische Familienhilfe', href: 'https://www.gesetze-im-internet.de/sgb_8/__31.html' },
  },
  {
    id: 'eingliederungshilfe',
    title: '§35a SGB VIII – Eingliederungshilfe für seelisch behinderte Kinder und Jugendliche',
    intro: [
      'Die Eingliederungshilfe richtet sich an junge Menschen mit seelischen oder psychischen Belastungen.',
      'Sie unterstützt dabei, den Alltag trotz Einschränkungen bewältigen zu können, emotionale Stabilität aufzubauen und am gesellschaftlichen Leben teilzuhaben.',
      'Wir begleiten die Betroffenen dabei, geeignete Bewältigungsstrategien zu entwickeln, soziale Fähigkeiten zu stärken und passende Unterstützungssysteme zu finden.',
      'Auch Familien werden entlastet und in ihrer Rolle stabilisiert.',
    ],
    blocks: [
      { type: 'h', text: 'Mögliche Themenbereiche' },
      {
        type: 'ul',
        items: [
          'Unterstützung bei der Anbindung an spezialisierte und helfende Institutionen\n(Therapeuten, Kliniken, Beratungsstellen, medizinische Fachstellen)',
          'Entwicklung eines bedarfsgerechten und entlastenden Familienalltags',
          'Stärkung der Fähigkeit, eigene Belastungen zu erkennen und individuelle Bewältigungsstrategien zu entwickeln',
          'Förderung sozialer Kompetenzen und emotionaler Stabilität',
        ],
      },
      { type: 'h', text: 'Methoden' },
      {
        type: 'ul',
        items: [
          'Zusammenarbeit mit therapeutischen und medizinischen Fachstellen',
          'Begleitung zu Terminen und Unterstützung bei Antragsverfahren',
          'Entwicklung geeigneter Alltagsroutinen',
          'Emotionsregulation und Stressreduktion',
          'Förderung sozialer Fähigkeiten',
          'Ressourcenorientierte Verfahren (z. B. Ressourcenbaum, Stärkenprofil)',
          'Krisenintervention',
          'Eltern- und Familiengespräche',
        ],
      },
    ],
    law: {
      label: 'Zum §35a SGB VIII – Eingliederungshilfe für seelisch behinderte Kinder und Jugendliche',
      href: 'https://www.gesetze-im-internet.de/sgb_8/__35a.html',
    },
  },
  {
    id: 'junge-volljaehrige',
    title: '§ 41 SGB VIII – Hilfen für junge Volljährige',
    intro: [
      'Diese Hilfeform begleitet junge Erwachsene auf dem Weg in ein eigenständiges Leben.',
      'Wir unterstützen beim Aufbau einer stabilen Alltagsstruktur, bei beruflicher Orientierung sowie bei organisatorischen und finanziellen Themen.',
      'Ziel ist es, junge Volljährige zu befähigen, ihr Leben Schritt für Schritt eigenverantwortlich zu gestalten – sicher, reflektiert und zukunftsorientiert.',
    ],
    blocks: [
      { type: 'h', text: 'Mögliche Themenbereiche' },
      {
        type: 'ul',
        items: [
          'Aufbau einer eigenständigen Lebensführung\n(Wohnen, Haushalt, Struktur, Selbstorganisation)',
          'Finanzielle Absicherung\n(Budgetplanung, Schuldenprävention, Umgang mit Sozialleistungen)',
          'Berufliche Orientierung\n(Job- und Ausbildungsfindung, Studium, Bewerbungsprozesse)',
          'Klärung persönlicher Zukunftsperspektiven',
          'Stärkung von Selbstwirksamkeit und Problemlösekompetenz',
          'Umgang mit persönlichen Herausforderungen, z. B. familiäre Distanzierung, psychische Belastungen oder unsichere Lebenssituationen',
          'Aufbau eines tragfähigen sozialen Netzwerks, das langfristig unterstützt',
          'Förderung emotionaler Stabilität und sicherer Alltagsroutinen',
        ],
      },
      { type: 'h', text: 'Methoden' },
      {
        type: 'ul',
        items: [
          'Begleitung bei behördlichen und organisatorischen Angelegenheiten',
          'Unterstützung bei Job- und Ausbildungssuche',
          'Bewerbungstraining und Berufsorientierung',
          'Alltags- und Haushaltsmanagement',
          'Budgetplanung & Schuldenprävention',
          'Aktivierung sozialer Netzwerke',
          'Krisenintervention und Notfallstrategien',
          'Zusammenarbeit mit therapeutischen Fachstellen',
          'Regelmäßige Reflexions- und Planungsgespräche',
        ],
      },
    ],
    law: { label: 'Zum § 41 SGB VIII – Hilfen für junge Volljährige', href: 'https://www.gesetze-im-internet.de/sgb_8/__41.html' },
  },
  {
    id: 'clearing',
    title: 'Clearing - in Arbeit',
    intro: [],
    blocks: [
      {
        type: 'p',
        text: 'Das Clearing dient der strukturierten Klärung einer familiären oder persönlichen Lebenssituation innerhalb eines klar definierten Zeitrahmens.',
      },
      {
        type: 'p',
        text: 'Ziel ist es, Belastungen und Ressourcen transparent zu erfassen, Handlungsmöglichkeiten aufzuzeigen und eine fachlich fundierte Empfehlung für die weitere Hilfeplanung zu formulieren – gemeinsam mit dem Jugendamt und den Beteiligten.',
      },
      { type: 'h', text: 'Mögliche Themenbereiche' },
      {
        type: 'ul',
        items: [
          'Erfassung der aktuellen Lebenssituation, Belastungen und Ressourcen',
          'Analyse familiärer Beziehungen, Rollen und Interaktionen',
          'Klärung von Erziehungs-, Entwicklungs- und Versorgungsbedarfen',
          'Identifikation möglicher Kindeswohlrisiken und Schutzfaktoren',
          'Sichtung vorhandener Unterstützungsangebote und notwendiger Hilfen',
          'Reflexion der bisherigen Strategien der Familie zur Bewältigung des Alltags',
          'Entwicklung erster Ansätze für eine bedarfsgerechte Alltagsgestaltung',
        ],
      },
      { type: 'h', text: 'Methoden' },
      {
        type: 'ul',
        items: [
          'Strukturierte Erst- und Anamnesegespräche',
          'Genogramm- und Biografiearbeit',
          'Lebenswelt- und Netzwerkanalyse',
          'Gespräche mit relevanten Bezugspersonen',
          'Alltagssituationsbeobachtungen',
          'Ressourcenorientierte diagnostische Elemente',
          'Systemische Methoden (Aufstellungen, Visualisierungen)',
          'Schriftlicher Clearing-Bericht',
          'Gemeinsame Abstimmung der weiteren Hilfeplanung',
        ],
      },
    ],
  },
  {
    id: 'kinderschutz',
    title: 'Kinderschutz nach § 8a SGB VIII',
    intro: [],
    blocks: [
      {
        type: 'p',
        text: 'Der Schutz von Kindern und Jugendlichen besitzt bei HELIOS höchste Priorität. Wir arbeiten konsequent schutzkonzeptkonform, orientieren uns an den Vorgaben des § 8a SGB VIII und handeln bei jedem Anhaltspunkt auf eine mögliche Kindeswohlgefährdung verantwortungsbewusst, transparent und fachlich fundiert.',
      },
      { type: 'h', text: 'Was ist Kinderschutz?' },
      {
        type: 'p',
        text: 'Kinderschutz bedeutet für uns, Kinder und Jugendliche vor körperlicher, emotionaler, psychischer und sexualisierter Gewalt sowie vor Vernachlässigung zu bewahren. Gleichzeitig umfasst er alle Maßnahmen, die junge Menschen stärken, Risiken frühzeitig erkennen lassen und ihnen ein sicheres, förderliches Aufwachsen ermöglichen.',
      },
      { type: 'h', text: 'Wie leisten wir Kinderschutz?' },
      {
        type: 'p',
        text: 'Unsere Fachkräfte verfügen über fundierte Kenntnisse in Gefährdungseinschätzung, Risikodiagnostik und systemischer Fallanalyse. Verdachtsmomente werden strukturiert geprüft, im Team reflektiert und – im Sinne der gemeinsamen Verantwortung – in enger Abstimmung mit dem Jugendamt bewertet. Wir arbeiten mit klaren internen Abläufen, definierten Meldewegen und regelmäßigen Fortbildungen, um eine hohe fachliche Qualität sicherzustellen.',
      },
      {
        type: 'p',
        text: 'Transparente Kommunikation, professioneller Austausch und eine konsequent ressourcenorientierte Haltung bilden dabei die Grundlage unseres Handelns.',
      },
      { type: 'h', text: 'Wie unterstützen wir Familien im Kinderschutz?' },
      { type: 'p', text: 'Wir begleiten Familien dabei, sichere, entlastende und entwicklungsfördernde Alltagsstrukturen aufzubauen. Dazu gehören:' },
      {
        type: 'ul',
        items: [
          'die Erarbeitung alternativer, nicht-gewaltorientierter Erziehungsstrategien,',
          'die Sensibilisierung für kindeswohlgefährdende Aspekte im familiären Alltag und im sozialen Umfeld,',
          'die Entwicklung von Schutzfaktoren, die junge Menschen stärken und Risiken reduzieren,',
          'die Förderung einer achtsamen, wertschätzenden und verantwortungsvollen Eltern-Kind-Interaktion.',
        ],
      },
      {
        type: 'p',
        text: 'Unser Ziel ist es, Familien nicht zu verurteilen, sondern sie zu befähigen, Risiken zu erkennen, Verantwortung zu übernehmen und sichere Lösungen zu entwickeln.',
      },
      { type: 'h', text: 'Kindeswohlgefährdung als aktives Thema in der Hilfe' },
      { type: 'p', text: 'Kindeswohl steht in unserer Arbeit nicht nur im Hintergrund, sondern wird aktiv und kontinuierlich thematisiert.' },
      {
        type: 'p',
        text: 'Wir sprechen Risiken offen an, reflektieren gemeinsam mit den Beteiligten belastende Dynamiken und entwickeln Strategien, die Kindern und Jugendlichen Sicherheit geben. Dabei achten wir darauf, Beteiligte nicht zu überfordern, sondern konstruktiv und respektvoll an Veränderungen heranzuführen.',
      },
      {
        type: 'p',
        text: 'So schaffen wir einen Rahmen, in dem Prävention möglich ist, Risiken frühzeitig erkannt werden und Familien verlässliche Unterstützung erfahren – immer mit dem Ziel, Schutz und Entwicklung junger Menschen nachhaltig zu sichern',
      },
    ],
    law: { label: 'Zum Kinderschutz nach § 8a SGB VIII', href: 'https://www.gesetze-im-internet.de/sgb_8/__8a.html' },
  },
];
