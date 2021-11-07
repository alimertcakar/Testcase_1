import { performance } from 'perf_hooks';

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

type logPerformanceCallback = (...args: any) => void;

function averageOfArray(arr: Array<any>) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export class PerformanceTool {
  static index = 0;
  /**
   * measures performance of the callback
   * @param callbackToPerfCheck callback function to test performance on
   * @param poolSize default is 1, defines how many times callbackToPerfCheck will be tested and the average will be returned
   * @return runtime of callbackToPerfCheck, if poolsize > 1, average runtime.
   */
  static measure(callbackToPerfCheck: logPerformanceCallback, poolSize: number = 1) {
    ++this.index;
    let totalRunTime = 0;

    if (poolSize > 1) {
      let results = [];
      for (let i = 0; i < poolSize; i++) {
        results.push(this.runPerformanceTest(callbackToPerfCheck));
      }
      totalRunTime = averageOfArray(results); // average of performance tests
    } else {
      totalRunTime = this.runPerformanceTest(callbackToPerfCheck);
    }

    console.log(
      '\x1b[36m%s\x1b[0m',
      `Perf test #${this.index}: Tested function "${
        callbackToPerfCheck.name
      }", it ran in ${totalRunTime.toFixed(4)} miliseconds (Average of ${poolSize} tests)`,
    );
    return totalRunTime;
  }

  private static runPerformanceTest(callbackToPerfCheck: logPerformanceCallback) {
    const t0 = performance.now();
    callbackToPerfCheck();
    const t1 = performance.now();
    const totalRunTime = t1 - t0;
    return totalRunTime;
  }
}

export function deepCopy(obj: object) {
  // deep copies simple objects. does not resolve circular deps
  return JSON.parse(JSON.stringify(obj));
}
