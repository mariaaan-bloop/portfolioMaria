// Semua foto di-resolve lewat Vite supaya path aman (spasi, "&") dan ikut ter-bundle saat build.
const files = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp,pdf}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const asset = (path: string): string => files[`../assets/images/${path}`] ?? '';
