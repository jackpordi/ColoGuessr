export const sleep = (n: number) => new Promise((res) => setTimeout(res, n));

export const randomColor = () => "#" + Math.floor(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0");

function padNumWithSpaces(i: number) {
  const asString = i.toString();
  if (asString.length === 2) return " " + asString;
  if (asString.length === 1) return " " + asString + " ";

  return asString;
}

export function formatHexToRGB(hex: string ) {

  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  const r = parseInt(hex.slice(0, 2), 16),
  g = parseInt(hex.slice(2, 4), 16),
  b = parseInt(hex.slice(4, 6), 16);

  return `RGB(${[ r, g, b].map(padNumWithSpaces).join(",")})`;
}
