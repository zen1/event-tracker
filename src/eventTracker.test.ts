import EventTracker from './index';

const time = (seconds: number) => {
  return seconds * 1000;
};

describe('Event Tracker Class', () => {
  
  it('should instantiate properly', () => {
    const tracker = new EventTracker();
    expect(tracker).toBeInstanceOf(EventTracker);
  });

  it('should have working emit and getEventCount function', () => {
    const tracker = new EventTracker();
    expect(tracker.getEventCount(60)).toBe(0);
    tracker.emit();
    expect(tracker.getEventCount(60)).toBe(1);
    tracker.emit();
    expect(tracker.getEventCount(60)).toBe(2);
  });

  it.skip('should return different count after each time emit is triggered', () => {
    const tracker = new EventTracker();
    expect(tracker.getEventCount(60)).toBe;
  });
});
