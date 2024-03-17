<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Загрузчик файлов</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <section class="container">
        <h1>Загрузчик файлов</h1>
        <form action="upload.php" method="POST" enctype="multipart/form-data">
            <label for="file">Выбирайте только txt файл</label>
            <input type="file" name="file" id="file">
            <button type="submit" name="submit">Загрузить</button>
        </form>
        <div id="status">
            <?php
            if (isset($_GET['status'])) {
                $status = $_GET['status'];
                if ($status === 'success') {
                    echo '<div class="circle green"></div>';
                    echo '<p>Файл успешно загружен.</p>';
                } elseif ($status === 'error') {
                    echo '<div class="circle red"></div>';
                    echo '<p>Ошибка загрузки файла.</p>';
                } elseif ($status === 'invalid') {
                    echo '<div class="circle red"></div>';
                    echo '<p>Разрешены только файлы .txt .</p>';
                }
            }
            ?>
        </div>
    </section>
</body>

</html>