var amodal = document.getElementById('addModal');
var mModal = document.getElementById('modifyModal');
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("conBtn");
        //var btn2 = document.getElementsByClassName("conBtn");
var closeBtn = document.getElementById("close1");
var closeBtn2 = document.getElementById("close2");
var addBtn = document.getElementById("addBtn");
var content = document.getElementsByClassName("doContent");
btn.onclick = function () {
    amodal.style.display = "block";
}
btn2.onclick = function () {
    mModal.style.display = "block";
}

closeBtn.onclick = function () {
    if (amodal.style.display = "block") {
        amodal.style.display = "none";
    }
}
closeBtn2.onclick = function () {
    if (mModal.style.display = "block") {
        mModal.style.display = "none";
}
}
window.onclick = function (event) {
    if (event.target == amodal) {
        amodal.style.display = "none";
    } else if (event.target == mModal) {
        mModal.style.display = "none";
    }
}