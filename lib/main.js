const Dom = require('./dom_node_collection');

window.$l = arg => {
  let NodeList = Array.prototype.slice.call(document.querySelectorAll(arg));
  if (arg instanceof HTMLElement){
    const domnode = new Dom([arg]);
  }
};
