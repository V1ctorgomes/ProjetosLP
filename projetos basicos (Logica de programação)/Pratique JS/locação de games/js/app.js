function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let image = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

   if(image.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')){
    image.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.innerHTML ='Alugar';

   }else{
    image.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.innerHTML = 'Devolver';

   }
}