export const getRandomNumber = (min: number, max: number): number => {
  const range = max - min + 1;
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  return min + ((randomBuffer[0] ?? 0) % range);
};
