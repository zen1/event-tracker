# Event Tracker

[![Test](https://github.com/zen1/event-tracker/workflows/Test/badge.svg)](https://github.com/zen1/event-tracker/actions)

A simple library for tracking and counting events

### Installation

---

#### Manual Install

1. Clone the repository to your local machine
2. Run `npm build` within the event-tracker root directory
3. Copy the dist folder to a folder in your project (name it event-tracker or
   something memorable)
4. Import the EventTracker class from that folder and start using the library as
   outlined in the [Documentation](#documentation)

```js
import { EventTracker } from './path/to/event-tracker';
```

#### Github Packages Install

> This method will set your project up to use the Github packages registry This
> allows the use of packages from the Github package registry as well as NPM.
> For more info check the documentation
> [here](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)

1. Create a file in the root of your project and name it .npmrc
2. Add the below lines to your .npmrc file

```shell
  registry=https://npm.pkg.github.com/zen1
  //npm.pkg.github.com/:_authToken={{YOUR_ACCESS_TOKEN}}
```

3. On Github navigate to your profile and click settings
4. Navigate to Developer settings
5. Choose Personal Access Tokens and click generate new token
6. Copy the token that it generates
7. You will only see this token one time, so copy it and in your .npmrc file
   replace {{YOUR_ACCESS_TOKEN}} with the new generated token
8. In your project run `npm install @zen1/event-tracker`
9. If the package installed properly, then you should be able to import it and
   use it within your project. See [Documentation](#documentation) below to use
   the package.

### Documentation

---

#### Creating a new instance

Usage of the event tracker is simple. All you need to do is import/require the
tracker and instantiate it in your code.

The default threshold for the tracker is 5 minutes, but you can instantiate the
tracker with a different value (in seconds) to modify the threshold for your
needs.  This threshold sets a limit on the length of time from which events can be retrieved.

**Example:**

```js
import { EventTracker } from '@zen1/event-tracker';

const tracker = new EventTracker();

const twoMinuteTracker = new EventTracker(120);

const tenMinuteTracker = new EventTracker(600);
```

#### Available methods

> The tracker has two available methods. One for emitting events, and another
> for getting the current count of events.

- **emit()** Calling the emit function will add a new timestamp to the
  trackers event storage. It uses the javascript Date.now() behind the scenes to get the
  timestamp

```js
const tracker = new EventTracker();

tracker.emit();
```

- **getEventCount(seconds)** To get the number of emitted events over a set
  time period (e.g. 2 minutes ago until now), you must pass a number of seconds in as an argument.
  The function will return a count of all events that have ocurred since the specified number of seconds ago.
  
**Example:**

```js
const tracker = new EventTracker();

tracker.getEventCound(60); // Returns a count of all events that happened in the last 60 seconds
```
