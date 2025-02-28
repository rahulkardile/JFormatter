import * as yaml from 'js-yaml';
import * as xml from 'fast-xml-parser';
import { parse } from 'json2csv';

/**
 * Converts JSON to various formats.
 */
export class JSONConverter {
  /**
   * Converts JSON to the specified format.
   * @param jsonString - The JSON string to convert.
   * @param format - The target format ('yaml', 'xml', 'csv').
   * @returns The converted string.
   * @throws Error if JSON is invalid or format is unsupported.
   */
  static convert(jsonString: string, format: 'yaml' | 'xml' | 'csv'): string {
    const json = JSON.parse(jsonString);
    switch (format) {
      case 'yaml':
        return yaml.dump(json);
      case 'xml':
        return xml.stringify({ root: json });
      case 'csv':
        return parse(json);
      default:
        throw new Error('Unsupported format');
    }
  }
}