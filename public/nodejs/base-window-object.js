// Il n'y a pas d'objet "window" en Node. Il y a plutôt un objet "global".
// Par exemple global.console.log() plutôt que window.console.log() ou simplement console.log().

console.log(window);

// Result:
// ReferenceError: window is not defined
