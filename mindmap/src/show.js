// eslint-disable-next-line func-style,@typescript-eslint/no-unused-vars
function show(element,) {
  if (! element || ! element.hasAttribute('data-image',)) {
    return;
  }
  const img = document.createElement('img',);
  img.setAttribute('src', element.getAttribute('data-image',),);
  if (element.hasAttribute('title',)) {
    img.setAttribute('title', element.getAttribute('title',),);
  }
  if (element.hasAttribute('href',)) {
    const a = document.createElement('a',);
    a.setAttribute('href', element.getAttribute('href',),);
    a.setAttribute('target', '_blank',);
    a.setAttribute('rel', 'noreferrer',);
    a.setAttribute('class', 'modal',);
    a.appendChild(img,);
    img.onmouseleave = () => a.parentElement.removeChild(a,);
    document.body.appendChild(a,);
    return;
  }
  img.onmouseleave = () => img.parentElement.removeChild(img,);
  img.setAttribute('class', 'modal',);
  document.body.append(img,);
}
