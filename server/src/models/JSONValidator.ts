import Ajv from 'ajv';

/**
 * Validates JSON against a schema.
 */
export class JSONValidator {
  private static ajv = new Ajv();

  /**
   * Validates JSON against a provided schema.
   * @param jsonString - The JSON string to validate.
   * @param schemaString - The JSON schema string.
   * @returns Validation result with errors if any.
   * @throws Error if JSON or schema is invalid.
   */
  static validate(jsonString: string, schemaString: string): { valid: boolean; errors?: string[] } {
    const json = JSON.parse(jsonString);
    const schema = JSON.parse(schemaString);
    const validate = this.ajv.compile(schema);
    const valid = validate(json);
    return {
      valid,
      errors: valid ? undefined : validate.errors?.map((err) => `${err.instancePath} ${err.message}`),
    };
  }
}