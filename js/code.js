const button = document.getElementById('button')
const overlayE = ({target})=> {
    target.style.opacity = 1
}
const overlayL = ({target})=> {
    target.style.opacity = 0.8
}
button.addEventListener("mouseenter",overlayE)
button.addEventListener("mouseleave",overlayL)