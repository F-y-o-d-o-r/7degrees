<?php
// if (isset($_POST['email']) && isset($_POST['message'])) {

//     //$from_email = "f.mail.diff@gmail.com"; //!!! $from_email - отправитель - РЕАЛЬНЫЙ...
//     $title_str = "From portfolio site" . date('d-m-Y H:i:s');
//     $headers = "Content-type: text/html; charset=utf-8 \r\n";
//     //$headers .= "From: " . $title_str . " от fyodor.pp.ua<" . $from_email . ">\r\n"; //!!! $from - отправитель - РЕАЛЬНЫЙ...
//     $headers .= "From: " . $title_str . " от fyodor.pp.ua";
//     $message = "Email: " . $_POST['email'] . "<br>";
//     $message .= "Message: " . $_POST['message'] . "<br>";
//     $result = mail('fyodor.work@gmail.com', "From portfolio site " . date('d-m-Y H:i:s'), $message, $headers); //no denwer. answer true/false
//     //$result = file_get_contents('http://mailer.25one.com.ua/api_mail_file_get_contents.php?mail=' . urlencode($_POST['email']) . '&title=' . urlencode("Message from site.25one.com.ua of " . date('d-m-Y H:i:s')) . '&message=' . urlencode($message) . '&headers=' . urlencode($headers));
//     // if ($result) {
//     //     echo '<script>';
//     //     echo 'document.body.innerHTML="Ваше письмо отправлено!!!";;';
//     //     echo '</script>';
//     // }

// // Send
//     //mail('fyodor.work@gmail.com', 'From portfolio site', $message);
// }

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../mail/phpmailer/Exception.php';
require '../../mail/phpmailer/PHPMailer.php';
require '../../mail/phpmailer/SMTP.php';

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['tel'])) {
    $mail = new PHPMailer(true); // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 2; // Enable verbose debug output
        $mail->isSMTP(); // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = '777sevendegrees777@gmail.com'; // SMTP username
        $mail->Password = 'asdfdKJasdfdKJ'; // SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587; // TCP port to connect to

        //Recipients
        $mail->setFrom('777sevendegrees777@gmail.com', 'Mailer');
        $mail->addAddress('777sevendegrees777@gmail.com', 'Joe User'); // Add a recipient
        // $mail->addAddress('ellen@example.com');               // Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        //Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = "From 7degrees " . date('d-m-Y H:i:s');
        $mail->Body = "Name: " . $_POST['name'] . "<br>" . "Email: " . $_POST['email'] . "<br>" . "Tel: " . $_POST['tel']. "<br>" . "Message: " . $_POST['textarea'] . "<br>";
        $mail->AltBody = "Name: " . $_POST['name'] . "<br>" . "Email: " . $_POST['email'] . "<br>" . "Tel: " . $_POST['tel']. "<br>" . "Message: " . $_POST['textarea'] . "<br>";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
