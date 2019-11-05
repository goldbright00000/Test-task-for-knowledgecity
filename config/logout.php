<?php
        session_start();

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: *");
        header("Content-Type: application/json; charset=UTF-8");

        // remove all session variables
        session_unset();
        // destroy the session
        session_destroy();
       
        echo json_encode(true);
?>