export function isEmpty<T>(value: T): boolean {
  return typeof value === 'undefined' || value === null;
}

export function allEmpty<T>(values: T): boolean {
  let result = false;

  if (Array.isArray(values)) {
    if (values.length === 0) return true;
    values.forEach((value) => {
      if (isEmpty(value)) result = true;
    });
    return result;
  } else {
    return isEmpty(values);
  }
}
