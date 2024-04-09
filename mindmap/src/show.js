// eslint-disable-next-line func-style
function show(element,) {
  if (! element || ! element.hasAttribute('data-image',)) {
    return;
  }
  const img = document.createElement('img',);
  img.setAttribute('src', element.getAttribute('data-image',),);
  img.onmouseleave = () => img.parentElement.removeChild(img,);
  if (element.hasAttribute('title',)) {
    img.setAttribute('title', element.getAttribute('title',),);
  }
  if (element.hasAttribute('href',)) {
    const a = document.createElement('a',);
    a.setAttribute('href', element.getAttribute('href',));
    a.setAttribute('target', '_blank',);
    a.setAttribute('rel', 'noreferrer',);
    a.setAttribute('class', 'modal',);
    a.appendChild(img,);
    document.body.appendChild(a,);
    return;
  }
  img.setAttribute('class', 'modal',);
  document.body.append(img,);
}
