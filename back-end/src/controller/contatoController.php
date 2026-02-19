<?php

require_once __DIR__ . '/../validation/contatoValidation.php';
require_once __DIR__ . '/../service/emailService.php';

function receberContato()
{
    header('Content-Type: application/json');

    $input = json_decode(file_get_contents("php://input"), true);

    $errors = validarContato($input);

    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode($errors);
        exit;
    }

    try {
        enviarEmailContato($input);
        http_response_code(200);
        echo json_encode(["message" => "Mensagem enviada com sucesso"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
