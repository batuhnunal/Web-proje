
function kayıtkontrol()
{
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;

    if (name == "") {
        alert("Ad Soyad boş bırakılamaz.");
        return false;
    } 
     if (email == "") {
        alert("Email boş bırakılamaz.")
        return false;
    }
    if (message == "") {
        alert("mesaj boş bırakılamaz.");
        return false;
    } 
    if (!validateEmail(email)) {
       alert("Geçerli bir email adresi giriniz.");
       return false;
    }
          
     alert('Form başarıyla gönderildi!');
     return true;

}
function validateEmail(email) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}

function sil()
{
    var name = document.getElementById('name').value ;
    name = "";
    var password = document.getElementById('password').value = " ";
    var email = document.getElementById('email').value = " ";
 
}

