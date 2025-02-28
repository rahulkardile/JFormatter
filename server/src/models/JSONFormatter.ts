/**
 * Formats JSON strings into a readable format.
 */
export class JSONFormatter {
    /**
     * Formats a JSON string with specified indentation.
     * @param jsonString - The JSON string to format.
     * @returns The formatted JSON string.
     * @throws Error if JSON is invalid.
     */
    static format(jsonString: string): string {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    }
  }