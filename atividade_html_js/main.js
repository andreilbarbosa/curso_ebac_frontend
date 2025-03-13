const formValor = document.querySelector('#form-campos');
const resultadoA = document.querySelector("#campo-A");
const resultadoB = document.querySelector("#campo-B");


formValor.addEventListener('submit', function(e){
    e.preventDefault();
    if(resultadoB.value > resultadoA.value){
        
        let msgSuccess = `Tudo certo. O valor A "<b>${resultadoA.value}</b>" é menor do que o valor B "<b>${resultadoB.value}</b>".`;
        const mensagemSucesso = document.querySelector('.success-message');
        mensagemSucesso.innerHTML = msgSuccess;
        mensagemSucesso.style.display = 'block';

        document.querySelector('.error-message').style.display = 'none';
        resultadoA.value = ' ';
        resultadoB.value = ' ';


    }else{
        let msgError = `Por favor, tente novamente. O valor A "<b>${resultadoA.value}</b>" é maior do que o valor B "<b>${resultadoB.value}</b>".`;
        const mensagemError = document.querySelector('.error-message');
        mensagemError.innerHTML = msgError;
        mensagemError.style.display = 'block';

        document.querySelector('.success-message').style.display = 'none';
        resultadoA.value = ' ';
        resultadoB.value = ' ';
    }
})


console.log();