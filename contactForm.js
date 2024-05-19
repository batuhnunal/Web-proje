
function kayıtkontrol()
{
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
    var subscribeYes = document.getElementById('subscribeYes').checked;
    var subscribeNo = document.getElementById('subscribeNo').checked;


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
    if (!KontrolEmail(email)) {
       alert("Geçerli bir email adresi giriniz.");
       return false;
    }
    if (!subscribeYes && !subscribeNo) {
        alert("Üniversite öğrenci olup olmadığınızı seçin.");
        return false;
    }
          
     alert('Form başarıyla gönderildi!');
     return true;

}
function KontrolEmail(email) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}

function sil()
{
   
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    document.getElementById('subscribeYes').checked = false;
    document.getElementById('subscribeNo').checked = false;

}

