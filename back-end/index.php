<?php

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Carrega o .env da raiz do projeto
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once __DIR__ . '/src/controller/contatoController.php';

// CORS
header("Access-Control-Allow-Origin: https://barretoesantana.adv.br");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/api/contato' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    receberContato();
} else {
    http_response_code(404);
    echo json_encode(["error" => "Rota não encontrada"]);
}
