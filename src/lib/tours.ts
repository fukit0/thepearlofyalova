import manifest from '../data/tours.json';

export interface TourScene {
  readonly slug: string;
  readonly source: string;
  readonly base: string;
  readonly faces: readonly string[];
  readonly faceSize: number;
  readonly hasThumb: boolean;
}

const TOURS = manifest as Record<string, readonly TourScene[]>;

export const TOUR_IDS = Object.keys(TOURS);

export const scenesOf = (tourId: string): readonly TourScene[] => TOURS[tourId] ?? [];

/**
 * Pannellum `cubeMap` sırası: ön, sağ, arka, sol, üst, alt.
 * prepare-tours.mjs yüzleri bu adlarla yazar.
 */
export const cubeMapFor = (scene: TourScene): string[] =>
  scene.faces.map((face) => `${scene.base}/${face}.webp`);

export const thumbFor = (scene: TourScene): string | null =>
  scene.hasThumb ? `${scene.base}/thumb.webp` : null;
