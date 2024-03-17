<?php

$uploadDir = 'files/';

if (isset($_FILES['file'])) {
    $fileName = $_FILES['file']['name'];
    $fileType = $_FILES['file']['type'];
    $fileTmpName = $_FILES['file']['tmp_name'];

    $allowedTypes = array('text/plain');
    if (in_array($fileType, $allowedTypes)) {
        $filePath = $uploadDir . $fileName;

        if (move_uploaded_file($fileTmpName, $filePath)) {
            header("Location: index.php?status=success");
            exit();
        } else {
            header("Location: index.php?status=error");
            exit();
        }
    } else {
        header("Location: index.php?status=invalid");
        exit();
    }
}