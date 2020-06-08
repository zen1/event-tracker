declare class EventTracker {
    private count;
    constructor();
    emit(): void;
    getEventCount(): number;
}
export default EventTracker;
