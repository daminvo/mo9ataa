import '../static/style.css';

document.addEventListener("DOMContentLoaded", function(event) {
    const download = document.getElementById("btn-download");
    document.getElementById("download").addEventListener( 'click', function() {
        download.classList.toggle("downloaded");
    });
});