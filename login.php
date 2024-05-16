<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Öğrenci numarasını kullanıcı adından çıkarma
    $studentNumber = explode('@', $username)[0];

    // Giriş bilgilerini kontrol etme
    if ($username == "$studentNumber@sakarya.edu.tr" && $password == $studentNumber) {
        echo "Hoşgeldiniz " . $username;
    } else {
        // Başarısız giriş denemesinde login sayfasına geri yönlendirme
        header("Location: giriş.html");
        exit();
    }
} else {
    // POST dışında bir istek yapılırsa login sayfasına geri yönlendirme
    header("Location: giriş.html");
    exit();
}
?>




</body>
</html>