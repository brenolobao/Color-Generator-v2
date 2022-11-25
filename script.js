const button = document.querySelector('.button')

button.addEventListener('click', function () {
    document.querySelector('.card').style.background = gerar_cor()
    document.querySelector('.card').innerText = document.querySelector('.card').style.background
    document.querySelector('.card-c2').style.background = gerar_cor()
    document.querySelector('.card-c2').innerText = document.querySelector('.card').style.background
    document.querySelector('.card-c3').style.background = gerar_cor()
    document.querySelector('.card-c3').innerText = document.querySelector('.card').style.background
    document.querySelector('.card-c4').style.background = gerar_cor()
    document.querySelector('.card-c4').innerText = document.querySelector('.card').style.background
    document.querySelector('.card-c5').style.background = gerar_cor()
    document.querySelector('.card-c5').innerText = document.querySelector('.card').style.background
})
function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgba(${r.toFixed(1)}, ${g.toFixed(1)}, ${b.toFixed(1)}, ${opacidade})`;
}