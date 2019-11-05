<?php
    session_start();

    include_once "database.php";
    if(!isset($_POST))
    {
        echo "Access Error";
        exit();
    }
    $user_name=$_POST['user_name'];
    $password=$_POST['password'];

    $sql = "SELECT password FROM users_login WHERE user_name='".$user_name."'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row=$result->fetch_assoc();
        $db_pass=$row['password'];

        if(md5($password)==$db_pass)
        {
            $_SESSION['user_name']=$user_name;
            $_SESSION['password']=$password;

            echo json_encode(True);
            exit();
        }
    }
    echo json_encode(False);
    

    $conn->close();
?>