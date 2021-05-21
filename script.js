function trocarCor(){

    let c1 = parseInt(Math.ceil(Math.random()*255))
    let c2 = parseInt(Math.ceil(Math.random()*255))
    let c3 = parseInt(Math.ceil(Math.random()*255))

    let cor = document.getElementById('cor')
    let corCaixa = document.getElementById('troca_cor_fundo')

    cor.style.backgroundColor = `rgba(${c1}, ${c2}, ${c3})`;
    corCaixa.style.backgroundColor = `rgba(${c1}, ${c2}, ${c3})`;

}