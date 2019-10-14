<?php
	$con = mysqli_connect('localhost','root','','quanlisach');
    mysqli_set_charset($con,"utf8");
	$data=json_decode(file_get_contents('php://input'),true);
    $idsach=$data["IdSach"];
    $tensach=$data["TenSach"];
    $theloai=$data["TheLoai"];
    $nhaxuatban=$data["NhaXuatBan"];
    $gia=$data["Gia"];
    $linkanh=$data["LinkAnh"];
    
    $sql = "UPDATE `sach` SET `tensach` = '$tensach', `theloai` = '$theloai', `nhaxuatban` = '$nhaxuatban', `gia` = $gia, `linkanh` = '$linkanh' WHERE `sach`.`idsach` = $idsach";
    
    $resuft=$con->query($sql);
    if (isset($resuft)) {
        echo json_encode('Sua thong tin sach thanh cong');
    }else
    {
        echo json_encode('Sua thong tin sach khong thanh cong');
    }

    	

?>