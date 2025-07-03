# DOM Traversal Example with parentNode, childNodes, and nextSibling

This project demonstrates how to use JavaScript’s `parentNode`, `childNodes`, and `nextSibling` properties to traverse and log different parts of the DOM (Document Object Model).

## How It Works

- **parentNode:**  
  Retrieves the immediate parent node of the selected element.  
  Example: `child.parentNode` gives you the parent of the element with `id="child"`.

- **childNodes:**  
  Returns a NodeList of all child nodes (including text nodes and comments) of the selected parent element.  
  Example: `parent.childNodes` lists all children of the element with `id="parent"`.

- **nextSibling:**  
  Returns the next sibling node (can be an element, text, or comment node) of the selected element.  
  Example: `firstItem.nextSibling` gets the next node after the element with `id="item1"`.
