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

export class Performance {
static index = 0;

  static measure(callbackToPerfCheck: logPerformanceCallback){
    ++this.index;

    const t0 = performance.now();
    callbackToPerfCheck();
    const t1 = performance.now();

    const totalRunTime = t1-t0;
    console.log(`Perf test #${this.index}: Tested function ${callbackToPerfCheck.name}, it ran in ${totalRunTime} miliseconds`);
    return totalRunTime;
  }
}