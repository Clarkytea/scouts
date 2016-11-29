<?php

    //A file for server-side form validation and mailing
    if(isset($_POST['name']) && $_POST['valid'] == "valid"){

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        //Replace '1stOwlsmoorScouts.org' with the correct
        // Email Address
        $to = "1stOwlsmoorScouts.org";

        //Subject of the email
        $subject = "Contact form message for 1st Owlsmoor";

        //Return feedback based on message status
        $feedback = array();

        //Message to be sent in the email
        $text = $message;

        //Send the email if the name and message are filled in
        if($name != '' && $text != ''){
          mail($to,$subject,$text);
          $feedback['message'] = "Thank you! we will be in touch";
        }
        else{
          $feedback['message'] = "Please fill in all fields!";
        }

        echo json_encode($feedback);

        }



?>
