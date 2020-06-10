export class EventTracker {
  private _threshold: number;
  private _events: number[] = [];

  constructor(threshold: number = 300) {
    this._threshold = threshold * 1000;
  }

  emit(): void {
    const timestamp = Date.now();
    this._events.push(timestamp);
  }

  getEventCount(seconds: number): number {
    if (!seconds) {
      throw new Error('You must pass a number of seconds into the function');
    }

    const timespanInMilliseconds = seconds * 1000;

    if (timespanInMilliseconds > this._threshold) {
      throw new Error(
        'Cannot request events older than the threshold : Default is 5 minutes'
      );
    }

    let millisecondsAgo = Date.now() - timespanInMilliseconds;
    const filteredEvents = this._events.filter(item => item > millisecondsAgo);
    return filteredEvents.length;
  }
}
