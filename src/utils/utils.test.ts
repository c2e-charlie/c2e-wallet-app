import { formatNumber } from './utils';

describe('formatNumber', () => {
  it('should format a number correctly', () => {
    expect(formatNumber(1234567.8912)).toBe('1,234,567.891');
    expect(formatNumber('1234567.8912')).toBe('1,234,567.891');
    expect(formatNumber(1234567)).toBe('1,234,567');
    expect(formatNumber('1234567')).toBe('1,234,567');
  });

  it('should handle edge cases', () => {
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber('0')).toBe('0');
    expect(formatNumber(0.1)).toBe('0.1');
    expect(formatNumber('0.1')).toBe('0.1');
    expect(formatNumber(1.0)).toBe('1');
    expect(formatNumber('1.000')).toBe('1');
  });
});
