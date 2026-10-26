// Zusatzdaten für die Design-Entwürfe /entwurf-a und /entwurf-b.
// Die Inhalte der Leistungen selbst kommen weiter aus site.ts.
import type { ImageMetadata } from 'astro';
import { leistungen } from './site';
import bank from '../assets/images/entwurf/bank.jpg';
import familie from '../assets/images/entwurf/familie.jpg';
import haende from '../assets/images/entwurf/haende.jpg';
import jungeErwachsene from '../assets/images/entwurf/junge-erwachsene.jpg';
import netzwerk from '../assets/images/entwurf/netzwerk.jpg';
import karussell from '../assets/images/entwurf/karussell.jpg';

export type Zielgruppe = 'jung' | 'familie' | 'erwachsen';

export const zielgruppen: { id: Zielgruppe; label: string }[] = [
  { id: 'jung', label: 'Kinder und Jugendliche' },
  { id: 'familie', label: 'Familien' },
  { id: 'erwachsen', label: 'Junge Erwachsene' },
];

interface Extra {
  /** Kurzname ohne Paragraf */
  name: string;
  /** Rechtsgrundlage, leer bei Clearing */
  ref: string;
  /** Für wen, in einer Zeile */
  fuer: string;
  gruppen: Zielgruppe[];
  photo: ImageMetadata;
  alt: string;
}

const extras: Record<string, Extra> = {
  erziehungsbeistandschaft: {
    name: 'Erziehungsbeistandschaft',
    ref: '§ 30 SGB VIII',
    fuer: 'Junge Menschen auf dem Weg zur Selbstständigkeit',
    gruppen: ['jung'],
    photo: bank,
    alt: 'Drei Jungen sitzen lachend auf einer Holztribüne',
  },
  familienhilfe: {
    name: 'Sozialpädagogische Familienhilfe',
    ref: '§ 31 SGB VIII',
    fuer: 'Familien, die ihren Alltag gemeinsam stärken wollen',
    gruppen: ['familie'],
    photo: familie,
    alt: 'Zwei Frauen mit zwei kleinen Kindern auf einem Sofa',
  },
  eingliederungshilfe: {
    name: 'Eingliederungshilfe',
    ref: '§ 35a SGB VIII',
    fuer: 'Kinder und Jugendliche mit seelischen Belastungen',
    gruppen: ['jung', 'familie'],
    photo: haende,
    alt: 'Kinder legen auf einer Wiese ihre Hände übereinander',
  },
  'junge-volljaehrige': {
    name: 'Hilfen für junge Volljährige',
    ref: '§ 41 SGB VIII',
    fuer: 'Junge Erwachsene auf dem Weg in ein eigenes Leben',
    gruppen: ['erwachsen'],
    photo: jungeErwachsene,
    alt: 'Junge Erwachsene spielen gemeinsam ein Brettspiel',
  },
  clearing: {
    name: 'Clearing',
    ref: 'in Arbeit',
    fuer: 'Familien, deren Situation erst geklärt werden muss',
    gruppen: ['familie', 'jung'],
    photo: netzwerk,
    alt: 'Holzfiguren, mit Linien zu einem Netzwerk verbunden',
  },
  kinderschutz: {
    name: 'Kinderschutz',
    ref: '§ 8a SGB VIII',
    fuer: 'Wenn das Wohl eines Kindes in Gefahr sein könnte',
    gruppen: ['jung', 'familie'],
    photo: karussell,
    alt: 'Ein Mädchen und eine junge Frau lachen auf einem Karussell',
  },
};

export const hilfen = leistungen.map((l) => ({ ...l, ...extras[l.id] }));

export const mailto = (subject: string) =>
  `mailto:helios@helios-hilfen.de?subject=${encodeURIComponent(subject)}`;
