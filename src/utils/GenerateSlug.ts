export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD") // Elimina diacrítics
    .replace(/[\u0300-\u036f]/g, "") // Elimina diacrítics restants
    .replace(/\s+/g, "-") // Substitueix espais per guions
    .replace(/[^\w\-]+/g, "") // Elimina caràcters no desitjats
    .replace(/\-\-+/g, "-") // Substitueix múltiples guions per un sol
    .trim();
}
