export function removeExtraSpaces(inputString: string) {
    // Use a regular expression to replace multiple spaces with a single space
    let result = inputString.replace(/\s+/g, ' ');
    return result.trim(); // Remove leading and trailing spaces if needed
}