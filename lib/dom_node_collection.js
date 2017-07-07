class DOMNodeCollection {
  constructor(Element) {
    this.elements = Element;
  }

  html (string) {
    if (string) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i] = string;
      }
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty () {
    // this.Elements = "";
    this.html = "";
  }

  append (children) {
    if (this.elements.length === 0) return;
    if (typeof children === 'object' && !(children instanceof DOMNodeCollection)) {
      children = $l(children);
    }

    if (typeof children === "string") {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML += children;
      }
    } else if (children instanceof DOMNodeCollection) {
      for (var j = 0; j < this.elements.length; j++) {
        this.elements[j].appendChild(this.elements[j].cloneNode(true));
      }
    }
    this.innerHTML.append(this.elements.outerHTML);
  }

  attr () {
    let attrs = this.elements.attributes;
  }

  addClass () {
    
  }

  removeClass () {

  }

  children () {
    let children = this.elements.children;
  }

  parent() {
    let parents = this.elements.parents;
  }

  find(selectors) {
    let elementList = this.elements.querySelectorAll(selectors);
  }

  remove () {
    this.elements.remove();
  }
}

module.exports = DOMNodeCollection;
