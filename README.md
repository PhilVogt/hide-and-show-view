# Getting Started 

### `npm install`
then

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Then to run the app inside openfin.\
openfin -l -c http://localhost:3000/app.json

## Points of interest
1) Notice the "detachOnClose": true property for the view that will be hidden and shown. This tells the runtime to not destroy the underlying view when the platform.close method is called. This ensures that the app keeps running in the background, even when its no longer attached to a platform window.
2) Take a look at the main-window.js preload script. It created a channelProvider, and registers 2 actions. "hide-me" and "show-me", when called they will remove and add the sender's view from the current view's platform window.
3) Finally, have a look at the hide-show.js component. This has a button which will communicate with the parent window (via the "hide/show-me" actions). The app also has a ticking state, just to show that the view is not destroyed and created each time it is unloaded from the platform window. 

## Final thoughts
- I would not personally recommend this approach, not for performance reasons but rather it feels like a very intrusive way to deliver pop-up/notification type visual events.
- I would recommend either using a simple startup_app window for this or even have one of your applications running inside OpenFin to open and close standalone windows to show popups.
- Final thought, can you use our Notification center? This feels like a perfect fit and provides a lot of the functionality I believe you're looking for "out of the box".
