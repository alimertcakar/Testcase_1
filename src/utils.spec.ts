import { anyEmpty, isEmpty } from './utils';

describe('IsEmpty should return true for null or undefined values', () => {
  it('handles null values', () => {
    const result = isEmpty(null);
    expect(result).toBe(true);
  });

  it('handles undefined values', () => {
    let foo = undefined;
    const result = isEmpty(foo);
    expect(result).toBe(true);
  });

  it('handles numbers', () => {
    const result = isEmpty(1);
    expect(result).toBe(false);
  });

  it('handles strings', () => {
    const result = isEmpty('1');
    expect(result).toBe(false);
  });

  it('handles falsy values', () => {
    const result = isEmpty(0);
    expect(result).toBe(false);
  });
});

describe('anyEmpty should return true if any of its arguments is undefined or null', () => {
  it('handles falsy values', () => {
    const result = anyEmpty(0, 0);
    expect(result).toBe(false);
  });
});
