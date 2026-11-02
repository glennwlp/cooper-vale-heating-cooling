import type { ImageMetadata } from 'astro';
const all = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });
export const img = (name: string): ImageMetadata => {
  const m = all[`../assets/img/${name}.jpg`];
  if (!m) throw new Error(`missing image ${name}`);
  return m.default;
};
