$(document).ready(function(){
    const form = $('#add-tarefas').val();

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefaValor = $('#input-tarefa').val();
        const novaAtividade = $('<li></li>');
        $(`
            <div class="atividade">
                <p class="texto">${tarefaValor}</p>    
                <input class="check" type="checkbox"/>
            </div>
        `).appendTo(novaAtividade);
        $(novaAtividade).appendTo('ul');
    })

    $('ul').on('change', '.check', function(){
        const tarefa = $(this).siblings('.texto');
        if($(this).is(':checked')){
            tarefa.addClass('concluido');
        }else{
            tarefa.removeClass('concluido');
        }
    })

    $('#botao-reset').click(function(){
        $('ul').empty();
    })
})