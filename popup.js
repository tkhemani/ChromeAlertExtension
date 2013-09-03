function myAlert() {
   document.getElementById("leftNav").style.display = document.getElementById("leftNav").style.display != "none" ? "none" : ""; document.getElementById("content").style.removeProperty("margin-left");
}
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('alertButton').addEventListener('click', myAlert);
    });
