<?php
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

if (isset($_POST['email']) && isset($_POST['message'])) {
  $mail = new PHPMailer(true); // Passing `true` enables exceptions
  try {
      echo 'Message has been sent';
  } catch (Exception $e) {
      echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
}
?>