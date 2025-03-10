function editar(id, txt_tarefa){
    //criar um form edição
    let form = document.createElement('form');
    form.action = 'tarefa_controller.php?acao=atualizar';
    form.method = 'post';
    form.className = 'row'
    //criar um input para entrada do texto
    let inputTarefa = document.createElement('input');
    inputTarefa.type = 'text';
    inputTarefa.name = 'tarefa';
    inputTarefa.className = 'col-9 form-control';
    inputTarefa.value = txt_tarefa;

    //criar um input hidden para guardar id da tarefa
    let inputId = document.createElement('input');
    inputId.type = 'hidden';
    inputId.name = 'id';
    inputId.value = id;



    //criar um button para envio do form
    let buttonEditar = document.createElement('button');
    buttonEditar.type = 'submit';
    buttonEditar.className = 'col-3 btn btn-info';
    buttonEditar.innerHTML = 'Atualizar';

    //incluir inputTarefa no form
    form.appendChild(inputTarefa);

    //incluir inputId no form
    form.appendChild(inputId)

    //incluir o button no form
    form.appendChild(buttonEditar);

    //selecionar a div tarefa
    let tarefa = document.getElementById('tarefa_'+id);

    //Limpar conteudo interno par aa inclusao do form
    tarefa.innerHTML = '';

    //incluir form na página
    tarefa.insertBefore(form, tarefa[0]);
}

function apagar(id){
    location.href = 'todas_tarefas.php?acao=apagar&id=' + id;
}

function realizado(id){
    location.href = 'todas_tarefas.php?acao=marcarRealizado&id=' + id;
}