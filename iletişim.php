<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        echo "Adı Soyadı:  ". $name;
        echo  "  <br>  ";
        echo "Email:  " . $email;
        echo "  <br>  ";
        echo "Mesaj:  " . $message;
        echo "  <br>  ";

    }
        
    ?>

</body>
</html>