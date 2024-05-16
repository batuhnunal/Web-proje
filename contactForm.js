new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        message: '',
        error: ''
    },
    methods: {
        validateForm() {
            this.error = '';
            if (!this.name) {
                this.error = 'Ad Soyad boş bırakılamaz.';
                return;
            }
            if (!this.email) {
                this.error = 'Email boş bırakılamaz.';
                return;
            }
            if (!this.validateEmail(this.email)) {
                this.error = 'Geçerli bir email adresi giriniz.';
                return;
            }
            if (!this.message) {
                this.error = 'Mesaj boş bırakılamaz.';
                return;
            }
            alert('Form başarıyla gönderildi!');
            this.clearForm();
        },
        validateEmail(email) {
            var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            return re.test(email);
        },
        clearForm() {
            this.name = '';
            this.email = '';
            this.message = '';
            this.error = '';
        }
    }
});
