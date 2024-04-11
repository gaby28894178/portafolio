const checkbox = document.getElementById('language-toggle');

checkbox.addEventListener('change', function() {
    window.location.href = checkbox.checked ? "/indexen.html" : "/index.html";
});

document.addEventListener('DOMContentLoaded', function() {
    if (location.href.includes("index.html")) {
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
    }
});
export default  checkbox