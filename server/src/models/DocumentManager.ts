/**
 * Manages JSON document state for collaboration.
 */
export class DocumentManager {
    private static documents: Map<string, string> = new Map();
  
    /**
     * Gets a document by ID.
     * @param docId - The document ID.
     * @returns The JSON string or undefined if not found.
     */
    static getDocument(docId: string): string | undefined {
      return this.documents.get(docId);
    }
  
    /**
     * Updates a document and returns the new state.
     * @param docId - The document ID.
     * @param jsonString - The new JSON string.
     * @throws Error if JSON is invalid.
     */
    static updateDocument(docId: string, jsonString: string): string {
      JSON.parse(jsonString); // Validate JSON
      this.documents.set(docId, jsonString);
      return jsonString;
    }
  }