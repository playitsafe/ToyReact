import { ToyReact } from './ToyReact';

class MyComp {
  render() {
    return <div>cool</div>
  }

  setAttribute(name, value) {
    this[name] = value;
  }

  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }
}

let a = <MyComp name="a" id="ida">

        </MyComp>

ToyReact.render(
  a,
  document.body
);

//console.log(a)
/*
var a = ToyReact.createElement(
  "div", 
  {
    name: "a",
    id: "ida"
  }, 
  ToyReact.createElement("span", null, "Hello"), 
  ToyReact.createElement("span", null, "World"), 
  ToyReact.createElement("span", null, "!!!")); 
*/

// document.body.appendChild(a);