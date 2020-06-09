import EventTracker from './event-tracker';

const secondsToMs = (seconds: number): number => {
  return seconds * 1000;
};

describe('Event Tracker Class', () => {
  it('should instantiate properly', () => {
    const tracker = new EventTracker();
    expect(tracker).toBeInstanceOf(EventTracker);

    const trackerTwo = new EventTracker();
    expect(trackerTwo).toBeInstanceOf(EventTracker);
    expect(trackerTwo).not.toBe(tracker);
  });

  it('should have working emit and getEventCount function', () => {
    const tracker = new EventTracker();
    expect(tracker.getEventCount(60)).toBe(0);
    tracker.emit();
    expect(tracker.getEventCount(60)).toBe(1);
    tracker.emit();
    expect(tracker.getEventCount(60)).toBe(2);
  });

  it('should not allow requests for further back than the threshold', () => {
    const tracker = new EventTracker();
    const overFiveMinutes = 400;

    expect(() => tracker.getEventCount(overFiveMinutes)).toThrowError(
      'Cannot request events older than the threshold : Default is 5 minutes'
    );
  });

  it('should return different counts as events are emitted', () => {
    jest.useFakeTimers();

    const tracker = new EventTracker();
    expect(tracker.getEventCount(60)).toBe(0);

    setTimeout(() => tracker.emit(), secondsToMs(30));
    setTimeout(() => tracker.emit(), secondsToMs(60));
    setTimeout(() => tracker.emit(), secondsToMs(120));

    // Advance from 0s - 30s
    jest.advanceTimersByTime(secondsToMs(30));
    expect(tracker.getEventCount(125)).toBe(1);

    // Advance from 30s - 60s
    jest.advanceTimersByTime(secondsToMs(30));
    expect(tracker.getEventCount(125)).toBe(2);

    // Advance from 60s - 120s
    jest.advanceTimersByTime(secondsToMs(60));
    expect(tracker.getEventCount(125)).toBe(3);
  });

  it('should remain performant when requesting a large count', () => {
    const today = Date.now();
    const tracker = new EventTracker();

    // @ts-ignore
    tracker._events = Array(1000000).fill(today);

    expect(tracker.getEventCount(60)).toBe(1000000);
  }, 10); // Added 10ms timeout to make sure that the test completes within a short period of time

  // it('should clean up requests older than the provided threshold on emit()', () => {
  //   const thresholdOne = 300;
  //   const thresholdTwo = 500;
  //   const oldValue = Date.parse('2020-01-07');
  //   console.log("OLD VALUE: ", oldValue)

  //   const trackerOne = new EventTracker(thresholdOne);
  //   const trackerTwo = new EventTracker(thresholdTwo);

  //   //@ts-ignore
  //   trackerOne._events = new Array(10).fill(oldValue);
  //   expect(trackerOne.getEventCount(300)).toBe(10);

  //   // @ts-ignore
  //   trackerTwo._events = new Array(10).fill(oldValue);
  //   expect(trackerTwo.getEventCount(500)).toBe(10);

  //   trackerOne.emit();
  //   trackerTwo.emit();

  //   expect(trackerOne.getEventCount(300)).toBe(1);
  // });
});
