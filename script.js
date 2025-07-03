// Example: Using parentNode to log the parent element of a node
const child = document.querySelector('#child');
console.log('Parent node:', child.parentNode);

// Example: Using childNodes to log all child nodes of a parent element
const parent = document.querySelector('#parent');
console.log('Child nodes:', parent.childNodes);

// Example: Using nextSibling to log the next sibling node of an element
const firstItem = document.querySelector('#item1');
console.log('Next sibling node:', firstItem.nextSibling);

// Note: nextSibling may return text nodes (like whitespace). 
// Use nextElementSibling to get only element nodes.