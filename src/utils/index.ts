export function convertToCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
