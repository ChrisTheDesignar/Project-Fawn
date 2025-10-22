// src/lib/topics.ts
export const TOPICS = [
  "3D-Printing",
  "3D-Scanning",
  "AI Tools",
  "Bootfitting",
  "Biomechanics",
  "Electronics & Sensing",
  "Filaments",
  "Footwear",
  "Modeling",
  "Motion Tracking",
  "Other",
  "Reference",
  "Skier Boot Binding Ski",
  "Software",
  "Structure",
] as const;
export type Topic = (typeof TOPICS)[number];

// Canonicalize loose inputs to your tags
export const CANON: Record<string, Topic> = {
  "Printing": "3D-Printing",
  "3D printing": "3D-Printing",
  "3D Printing": "3D-Printing",
  "3D Scanning": "3D-Scanning",
  "3D scanned": "3D-Scanning",
  "3D printed footwear": "Footwear",
};

export const toSlug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export const normalizeTopics = (t: string | string[]): Topic[] => {
  const arr = Array.isArray(t) ? t : [t];
  return arr
    .filter(Boolean)
    .map(x => CANON[x] ?? (x as Topic))
    .map(x => x.trim()) as Topic[];
};
