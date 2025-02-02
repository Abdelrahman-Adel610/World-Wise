export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-us", {
    year: "numeric",
    day: "2-digit",
    month: "long",
  });
}
