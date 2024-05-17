<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function redirectAfterDelay(url, delay) {
            setTimeout(function() {
                window.location.href = url;
            }, delay);
        }
    </script>
    
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
        echo "Hatalı Giriş. Tekrar deneyiniz. 4 sn sonra yönlendirme -> giriş.html ";
        echo '<script>redirectAfterDelay("giriş.html", 4000);</script>';
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