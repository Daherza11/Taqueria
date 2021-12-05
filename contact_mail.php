<?php
     $to = "danielherza11@gmail.com";
     $subject = $_POST['nombre']. " nos ha contactado.";
     $txt = $_POST['mensaje'];
     $headers = "From: ". $_POST['email'] . "\r\n" .
     "CC: juan.duarte@logicode.com.mx";


    if(mail($to,$subject,$txt,$headers)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }

?>