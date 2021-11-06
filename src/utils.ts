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

}

type logPerformanceCallback = (...args: any) => void;

class Performance {
static index = 0;

  static measure(callbackToPerfCheck: logPerformanceCallback){
    const t0 = performance.now();
    callbackToPerfCheck();
    const t1 = performance.now();
    const totalRunTime = t1-t0;

    console.log(`Perf test #${this.index}: `)
  }
}