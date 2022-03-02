var b1 = document.getElementById("btn1");
var b2 = document.getElementById("btn2");
var b3 = document.getElementById("btn3");
var b4 = document.getElementById("btn4");
var b5 = document.getElementById("btn5");
var gtb = document.getElementById("gstep");
var btnClose = document.getElementById("mclose");
var title = document.getElementById("exampleModalLongTitle");
var snum = 0;
var btnum = 0;
function openModal() {
  document.getElementById("exampleModalCenter").style.display = "block";
  document.getElementById("exampleModalCenter").style.display = "block";
  document.getElementById("exampleModalCenter").classList.add("show");
}
function closeModal() {
  document.getElementById("exampleModalCenter").style.display = "none";
  document.getElementById("exampleModalCenter").style.display = "none";
  document.getElementById("exampleModalCenter").classList.add("hide");
}
function content(snum, btnum) {
  title.innerHTML = `Step ${snum}`;
  gtb.innerHTML = `Go to Step ${snum + 1}`;
  if (btnum.disabled === true) {
    gtb.removeAttribute("hidden");
  } else {
    gtb.setAttribute("hidden", true);
  }
  gtb.addEventListener("click", function () {
    btnum.removeAttribute("disabled");
    closeModal();
  });
}
btnClose.addEventListener("click", function () {
  closeModal();
});

b1.addEventListener("click", function () {
  openModal();
  title.innerHTML = "Step 1";
  gtb.innerHTML = "Go to Step 2";
  if (b2.disabled === false) {
    gtb.setAttribute("hidden", true);
  }
  gtb.addEventListener("click", function () {
    btn2.removeAttribute("disabled");
    closeModal();
    gtb.setAttribute("hidden", true);
  });
});

b2.addEventListener("click", function () {
  openModal();
  content(2, btn3);
});

b3.addEventListener("click", function () {
  openModal();
  content(3, btn4);
});

b4.addEventListener("click", function () {
  openModal();
  content(4, btn5);
});

b5.addEventListener("click", function () {
  openModal();
  title.innerHTML = "Step 5";
  gtb.innerHTML = "Finish";
  gtb.removeAttribute("hidden");
  gtb.addEventListener("click", function () {
    [b1, b2, b3, b4, b5].forEach(function (btn) {
      btn.remove();
    });
    document.querySelector("#finish").removeAttribute("style");
    closeModal();
  });
});
