<?php
    include_once "database.php";
    $sql = "SELECT user_name, full_name, group_name FROM user_list";
    $result = $conn->query($sql);
    $data=array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data['data'][]=array(
                $row['user_name'],
                $row['full_name'],
                $row['group_name']
            );
        }
    }
    echo json_encode($data);

    $conn->close();
?>