"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventTracker {
    constructor() {
        this.count = 0;
    }
    emit() {
        this.count++;
    }
    getEventCount() {
        return this.count;
    }
}
exports.default = EventTracker;
