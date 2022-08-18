var btnNumber = document.querySelectorAll("#btnNumber");
// birden fazla btnNumber oldugu icin all kullanıyoruz

var screen = document.querySelector("#screen");
// butun tıklanma islemlerimiz burada goruntulenır

var btnOpt = document.querySelector("#btnOpt");
var optState = false;
var opt = "";
var final = 0;

btnNumber.forEach((Number) => {
    Number.addEventListener("click", showNumber);
    function showNumber() {
        screen.textContent = this.textContent;
    }
});
