<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function enviarEmailContato($contato)
{
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = $_ENV['MAIL_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['MAIL_USER'];
        $mail->Password = $_ENV['MAIL_PASS'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = (int) $_ENV['MAIL_PORT'];

        $mail->setFrom($_ENV['MAIL_USER'], 'Contato Site');
        $mail->addAddress($_ENV['MAIL_TO']);

        $mail->Subject = "Novo contato de " . $contato['nomeCompleto'];
        $mail->Body = "
Nome: {$contato['nomeCompleto']}
Telefone: {$contato['telefone']}
Email: {$contato['email']}
Área de interesse: {$contato['areaInteresse']}

Mensagem:
{$contato['mensagem']}
        ";

        $mail->send();
        return true;

    } catch (Exception $e) {
        throw new Exception("Erro ao enviar e-mail: " . $mail->ErrorInfo);
    }
}
