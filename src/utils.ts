import {performance} from "perf_hooks";


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

export class PerformanceTool {
static index = 0;
/**
 * measures performance of the callback
 * @param callbackToPerfCheck callback function to test performance on
 * @param poolSize default is 1, defines how many times callbackToPerfCheck will be tested and the average will be returned
 * @return runtime of callbackToPerfCheck, if poolsize > 1, average runtime.
 */
  static measure(callbackToPerfCheck: logPerformanceCallback, poolSize?:number){
    ++this.index;

    const totalRunTime = this.runPerformanceTest(callbackToPerfCheck);

    console.log(`Perf test #${this.index}: Tested function ${callbackToPerfCheck.name}, it ran in ${totalRunTime} miliseconds`);
    return totalRunTime;
  }

  private static runPerformanceTest(callbackToPerfCheck: logPerformanceCallback){
    const t0 = performance.now();
    callbackToPerfCheck();
    const t1 = performance.now();
    const totalRunTime = t1-t0;
    return totalRunTime;
  }
}

