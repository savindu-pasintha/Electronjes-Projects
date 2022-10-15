console.log("load js");
function summation() {
  const a = window.document.getElementById("a");
  const b = window.document.getElementById("b");
  const sum = window.document.getElementById("sum");
  sum.innerHTML = parseInt(a.value) + parseInt(b.value);
}
window.document.querySelector("#a").addEventListener("change", () => {
    summation();
  });

window.document.querySelector("#b").addEventListener("change", () => {
  summation();
});
