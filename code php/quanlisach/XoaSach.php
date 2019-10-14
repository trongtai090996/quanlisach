<?php
	$con = mysqli_connect('localhost','root','','quanlisach');
	mysqli_set_charset($con,"utf8");
	$data=json_decode(file_get_contents('php://input'),true);
    $idsach=$data["IdSach"];
    $sql="DELETE FROM sach WHERE idsach='$idsach'";
    $resuft=$con->query($sql);
    if (isset($resuft)) {
        echo json_encode('Xoa thong tin sach thanh cong');
    }else
    {
        echo json_encode('Xoa thong tin sach khong thanh cong');
    }

?>