export const cdnUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_CDN_URL ?? ""}${path}`;
