<?php
	$con = new mysqli('localhost','root', '', 'quanlisach');
	mysqli_set_charset($con,"utf8");
    if($con->connect_error){
        die("Kết nối thất bại: "+ $con->connect_error);
    }
    $sql = "SELECT * FROM sach";
    $result = $con->query($sql);
    if($result->num_rows>0){
        while($row[]=$result->fetch_assoc()){
            $item = $row;
            $json = json_encode($item);
        }
    }else{
        echo "Không có kết quả";
    }
    echo $json;
    $con -> close();
?>