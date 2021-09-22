//Loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#").style.visibility = "visible";
  } else {
    document.querySelector("#").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
//FAQ's section
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let currFaq = "";
    currFaq = e.currentTarget.parentElement.parentElement;
    currFaq.classList.toggle("show-text");
  })
);
