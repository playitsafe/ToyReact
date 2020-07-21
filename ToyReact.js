

export let ToyReact = {
  createElement(type, attributes, ...children) {
    // console.log(arguments)
    let element = document.createElement(type);
    for (let name in attributes) {
      // element[name] = attributes[name] wrong
      element.setAttribute(name, attributes[name])
    }
    for (let child of children) {
      element.appendChild(child);
      
    }
    return element;
  }
}