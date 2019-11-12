import React from 'react';

export const useEventListener = (
  eventName: string,
  handler: unknown,
  element = window
) => {
  const savedHandler = React.useRef<unknown>();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return () => {};

    const eventListener = (event: unknown) => {
      savedHandler.current(event);
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};