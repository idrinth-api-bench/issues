// eslint-disable-next-line func-style
function show(element,) {
  if (! element || ! element.hasAttribute('data-image',)) {
    return;
  }
  const img = document.createElement('img',);
  img.setAttribute('src', element.getAttribute('data-image',),);
  img.setAttribute('class', 'modal',);
  img.onmouseleave = () => img.parentElement.removeChild(img,);
  document.body.append(img,);
}
