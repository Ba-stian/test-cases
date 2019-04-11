const modal = document.getElementById("order-popup");
const open = document.getElementById('open-popup');
const close = document.getElementsByClassName("order__add")[0];

open.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
};

close.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/*popup*/

/*responsive menu*/

const openMenu = document.getElementById('responsive');

openMenu.onclick = function (e) {
    e.preventDefault();
    console.log('hi');
}