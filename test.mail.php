<form action="wyslij_email.php" method="post">
  <div>
    <label for="name">Imię:</label>
    <input type="text" id="name" name="name">
  </div>
  <div>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email">
  </div>
  <div>
    <label for="message">Wiadomość:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <button type="submit">Wyślij</button>
</form>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "walik1.dam@wp.pl";
  $subject = "Wiadomość od $name";
  $headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
  
  if (mail($to, $subject, $message, $headers)) {
    echo "Wiadomość została wysłana.";
  } else {
    echo "Wystąpił błąd podczas wysyłania wiadomości.";
  }
}
?>
