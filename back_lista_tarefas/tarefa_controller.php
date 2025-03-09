<?php
    require "tarefa_model.php";
    require "tarefa_service.php";
    require "conexao.php";

    echo '<pre>';
    print_r($_POST);
    echo '</pre>';

    $tarefa = new Tarefa();
    $tarefa->__set('tarefa', $_POST['tarefa']);

    $conexao = new Conexao();

    $tarefaService = new TarefaService($conexao,$tarefa);
    $tarefaService->inserir();

    header('Location: nova_tarefa.php?inclusao=1');
?>