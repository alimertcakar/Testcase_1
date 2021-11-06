export function isEmpty<T>(value: T): boolean {
  return typeof value === 'undefined' || value === null;
}

export function anyEmpty<T>(...values: Array<T>): boolean {
  if (Array.isArray(values)) {
    return values.some((value) => isEmpty(value));
  } else {
    return isEmpty(values);
  }
}
