class EventTracker {
  private _threshold: number;
  private _events: number[];

  constructor(threshold = 300) {
    this._threshold = threshold * 1000;
    this._events = [];
  }

  // TODO: Fix test for below cleanup logic
  // private cleanup(): void {
  //   const thresholdLimit: number = Date.now() - this._threshold;
  //   console.log("LIMIT: ", thresholdLimit)
  //   const newEvents: number[] = this._events.filter(item => item > thresholdLimit);
  //   console.log("NEW EVENTS: ", newEvents)
  //   this._events = [...newEvents];
  // }

  emit(): void {
    this._events.push(Date.now());
  }

  getEventCount(seconds: number): number {
    if (!seconds) {
      throw new Error('You must pass a number of seconds into the function');
    }

    const timespanInMilliseconds = seconds * 1000;

    if (timespanInMilliseconds > this._threshold) {
      throw new Error('Cannot request events older than the threshold : Default is 5 minutes');
    }

    let millisecondsAgo = Date.now() - timespanInMilliseconds;
    return this._events.filter(item => item > millisecondsAgo).length;
  }
}

export default EventTracker;