<?php
  
  $name = $_POST["name"];
  $visitor_email = $_POST["email"];
  $message = $_POST["message"];

  $email_from = "mail.droptag.com";

  $email_subject = "New Form Submission";

  $email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "User Message: $message.\n"; 

  
  $to = "dropesrt5@gmail.com" ;
  
  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: http://dropetag.com/index.html");

?>