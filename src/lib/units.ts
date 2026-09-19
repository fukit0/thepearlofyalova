import rawUnits from '../data/units.json';

export interface UnitFloor {
  readonly slug: string;
  readonly label: string;
  readonly layout: string;
  readonly areaM2: number;
  readonly planImage: string | null;
  readonly planThumb: string | null;
}

export interface UnitPosition {
  readonly block: string;
  readonly position: string;
  readonly positionTr: string;
  readonly floors: readonly UnitFloor[];
}

export const UNITS = rawUnits as readonly UnitPosition[];

export const BLOCK_IDS: readonly string[] = [...new Set(UNITS.map((unit) => unit.block))].sort();

export const POSITION_IDS: readonly string[] = [...new Set(UNITS.map((unit) => unit.position))];

export const FLOOR_IDS: readonly string[] = [
  ...new Set(UNITS.flatMap((unit) => unit.floors.map((floor) => floor.slug))),
];

export const positionsOfBlock = (block: string): readonly UnitPosition[] =>
  UNITS.filter((unit) => unit.block === block);

export const findUnit = (block: string, position: string): UnitPosition | undefined =>
  UNITS.find((unit) => unit.block === block && unit.position === position);

/** Plan görselinin medya manifestindeki anahtarı — prepare-media.mjs ile aynı kural. */
export const planMediaKey = (block: string, position: string, floorSlug: string): string =>
  `plan/${block}-${position}-${floorSlug}`.toLowerCase();

export interface LayoutSummary {
  readonly layout: string;
  readonly count: number;
  readonly minArea: number;
  readonly maxArea: number;
}

/** Tip bazında plan sayısı ve net alan aralığı — daire karması tablosu için. */
export const layoutSummary = (): readonly LayoutSummary[] => {
  const buckets = new Map<string, number[]>();
  for (const unit of UNITS) {
    for (const floor of unit.floors) {
      buckets.set(floor.layout, [...(buckets.get(floor.layout) ?? []), floor.areaM2]);
    }
  }
  return [...buckets.entries()]
    .map(([layout, areas]) => ({
      layout,
      count: areas.length,
      minArea: Math.min(...areas),
      maxArea: Math.max(...areas),
    }))
    .sort((a, b) => a.minArea - b.minArea);
};

export const areaRange = (): { readonly min: number; readonly max: number } => {
  const areas = UNITS.flatMap((unit) => unit.floors.map((floor) => floor.areaM2));
  return { min: Math.min(...areas), max: Math.max(...areas) };
};
