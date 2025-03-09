<?php

class Tarefa{
    private $id;
    private $id_status;
    private $tarefa;
    private $data_cadastro;
    
    public function __get($atr){
        return $this->$atr;
    }

    public function __set($atr, $value){
       return $this->$atr = $value;
    }
}

?>