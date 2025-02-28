import { JSONFormatter } from '../models/JSONFormatter';

describe('JSONFormatter', () => {
  it('formats valid JSON correctly', () => {
    const input = '{"key":"value"}';
    const expected = '{\n  "key": "value"\n}';
    expect(JSONFormatter.format(input)).toBe(expected);
  });

  it('throws error for invalid JSON', () => {
    const input = '{invalid json}';
    expect(() => JSONFormatter.format(input)).toThrow();
  });
});