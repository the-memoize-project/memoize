!("startViewTransition" in document) &&
  Reflect.defineProperty(document, "startViewTransition", {
    value(functionRef) {
      requestAnimationFrame(functionRef, 0);
    },
  });
