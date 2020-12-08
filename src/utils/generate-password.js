export function generatePassword(length) {
  const charset =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+!#^*()=-_~";
  return Array(length)
    .fill(charset)
    .map((x) => x[Math.floor(Math.random() * x.length)])
    .join("");
}
