

<?php
	$con = mysqli_connect('localhost','root','','quanlisach');
    mysqli_set_charset($con,"utf8");
	$data=json_decode(file_get_contents('php://input'),true);
    $tensach=$data["TenSach"];
    $theloai=$data["TheLoai"];
    $nhaxuatban=$data["NhaXuatBan"];
    $gia=$data["Gia"];
    $linkanh=$data["LinkAnh"];
    $tim="SELECT * FROM sach WHERE tensach='$tensach'";
    $kiemtra=$con->query($tim);
    if (mysqli_num_rows($kiemtra) > 0) {
        echo json_encode('Da ton tai sach nay vui long nhap lai');
    }else{
         $sql="INSERT INTO sach (idsach,tensach,theloai,nhaxuatban,gia,linkanh) VALUES (NULL,'$tensach','$theloai','$nhaxuatban',$gia,'$linkanh')";
        $resuft=$con->query($sql);
        echo json_encode('Them sach thanh cong');
    }
   
    

?>