<?php
    session_start();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");

    if(!isset($_POST))
    {
        echo "Access denied";
        exit();
    }
    $user_name=$_POST['user_name'];
    $password=$_POST['password'];

    if($user_name==$_SESSION['user_name']&&$password==$_SESSION['password'])
    {
        echo json_encode(true);
        exit();
    }
    echo json_encode(false);
?>