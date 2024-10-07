/**
 * Returns a promise that resolves after a random delay between 200 and 500 milliseconds.
 * @returns A promise that resolves with a string message.
 */
export function randomDelay(): Promise<string> {
  const delay = Math.ceil(Math.random() * 300 + 200);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${delay}ms`);
    }, delay);
  });
}
