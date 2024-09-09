/* https://codepen.io/njbair/pen/NYJOJZ */
const i = document.querySelector('.ms-fluent');
document.addEventListener('mousemove', evt => {
    let x = evt.clientX - i.offsetLeft;
    let y = evt.clientY - i.offsetTop;
    i.style.setProperty('--mouse-x', x + "px");
    i.style.setProperty('--mouse-y', y + "px");
});