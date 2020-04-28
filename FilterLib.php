<?php
	if (isset($_POST['file'])) {
		$filename = md5(strval($_SERVER['REMOTE_ADDR']).strval(date('d-m-YH:i:s')).mt_rand(0, 999999999999)).".jpg";
		if (!file_put_contents($filename, base64_decode($_POST['file']))) {
			echo "error";
		}
		else {
			echo $filename;
		}
	}
	else {
		echo "error";
	}
?>