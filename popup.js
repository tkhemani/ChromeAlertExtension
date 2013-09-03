function myAlert() {
    alert('hello world')
}
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('alertButton').addEventListener('click', myAlert);
    });
