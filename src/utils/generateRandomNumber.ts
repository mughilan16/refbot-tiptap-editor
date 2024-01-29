export function generateRandomNumber(start: number, end: number) {
    // Generate a random number between start and end (inclusive)
    return Math.floor(Math.random() * (end - start + 1)) + start;
}