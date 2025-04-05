<?php
class Conexao {
    private $host;
    private $dbname;
    private $user;
    private $pass;

    public function __construct() {
        $this->host = getenv('DB_HOST') ?: 'db';
        $this->dbname = getenv('DB_NAME') ?: 'php_com_pdo';
        $this->user = getenv('DB_USER') ?: 'root';
        $this->pass = getenv('DB_PASS') ?: 'root';
    }

    public function conectar() {
        try {
            $conexao = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->user, $this->pass);
            $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conexao;
        } catch (PDOException $e) {
            echo 'Erro de conexão: ' . $e->getMessage();
            return null;
        }
    }
}
?>
