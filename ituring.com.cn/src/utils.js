export function $(selector, context) {
  context = context || document;
  var elements = context.querySelector(selector);
  return elements;
}

export function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return [...elements];
}

export function injectElements(elements, parent = document.body) {
  const fragment = document.createDocumentFragment();
  fragment.append(...elements);
  parent.appendChild(fragment);
}
