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
const create =
  (type: 'a'|'img'|'picture'|'source',) => document.createElement(type,);
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
  const picture = create('picture',);
  const img = create('img',);
  const webp = create('source',);
  const avif = create('source',);
  set(img, 'src', get(element, 'data-image',),);
  set(
    webp,
    'srcset',
    get(element, 'data-image',).replace(/(jpg|png)$/u, 'webp',),
  );
  set(
    avif,
    'srcset',
    get(element, 'data-image',).replace(/(jpg|png)$/u, 'avif',),
  );
  set(webp, 'type', 'image/webp',);
  set(avif, 'type', 'image/avif',);
  picture.appendChild(avif,);
  picture.appendChild(webp,);
  picture.appendChild(img,);
  if (has(element, 'title',)) {
    set(picture, 'title', get(element, 'title',),);
  }
  if (has(element, 'href',)) {
    const a = create('a',);
    set(a, 'href', get(element, 'href',),);
    set(a, 'target', '_blank',);
    set(a, 'rel', 'noreferrer',);
    set(a, 'class', 'modal',);
    a.appendChild(picture,);
    picture.onmouseleave = () => remove(a,);
    add(a,);
    return;
  }
  picture.onmouseleave = () => remove(picture,);
  set(picture, 'class', 'modal',);
  body.append(picture,);
};
