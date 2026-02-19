<?php

function validarContato($data)
{
    $errors = [];

    if (empty($data['nomeCompleto'])) {
        $errors[] = "O nome completo é obrigatório";
    }

    if (empty($data['telefone'])) {
        $errors[] = "O telefone é obrigatório";
    }

    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "O email deve ser válido";
    }

    if (empty($data['areaInteresse'])) {
        $errors[] = "A área de interesse é obrigatória";
    }

    if (empty($data['mensagem'])) {
        $errors[] = "A mensagem é obrigatória";
    }

    return $errors;
}
