class EventTracker {
  private _count: number[];

  constructor() {
    this._count = [];
  }

  emit(): void {
    this._count.push(Date.now());
  }

  getEventCount(seconds: number): number {
    const timespanInMilliseconds = seconds * 1000;
    
    let millisecondsAgo = Date.now() - timespanInMilliseconds;
    return this._count.filter(item => item > millisecondsAgo).length;
  }
}

export default EventTracker;
