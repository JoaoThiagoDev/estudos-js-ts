const paragrafos = document.querySelector('.paragrafos');
const pTags = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

pTags.forEach(p => {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'
});