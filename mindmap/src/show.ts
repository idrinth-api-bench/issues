const FIRST = 0;
const body = document.body;
const remove = (
  element: HTMLAnchorElement|HTMLSpanElement,
) => body.removeChild(element,);
const add = (
  element: HTMLAnchorElement|HTMLSpanElement,
) => body.appendChild(element,);
const set = (
  element: HTMLAnchorElement|HTMLSpanElement,
  key: string,
  value: string,
) => element.setAttribute(key, value,);
const get = (
  element: HTMLAnchorElement|HTMLSpanElement,
  key: string,
) => element.getAttribute(key,);
const has = (
  element: HTMLAnchorElement|HTMLSpanElement,
  key: string,
) => element.hasAttribute(key,);
const create = (type: 'a'|'img',) => document.createElement(type,);
const removeModals = () => {
  const modals = document.getElementsByClassName('modal',);
  while (modals.item(FIRST,)) {
    remove(modals.item(FIRST,) as HTMLSpanElement|HTMLAnchorElement,);
  }
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.show = (element: HTMLAnchorElement|HTMLSpanElement,) => {
  if (! element || ! has(element, 'data-image',)) {
    return;
  }
  removeModals();
  const img = create('img',);
  set(img, 'src', get(element, 'data-image',),);
  if (has(element, 'title',)) {
    set(img, 'title', get(element, 'title',),);
  }
  if (has(element, 'href',)) {
    const a = create('a',);
    set(a, 'href', get(element, 'href',),);
    set(a, 'target', '_blank',);
    set(a, 'rel', 'noreferrer',);
    set(a, 'class', 'modal',);
    a.appendChild(img,);
    img.onmouseleave = () => remove(a,);
    add(a,);
    return;
  }
  img.onmouseleave = () => remove(img,);
  set(img, 'class', 'modal',);
  body.append(img,);
};
