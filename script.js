const windowsContainer = document.getElementById("windows");
const modal = document.getElementById("modal");
const pdf = document.getElementById("pdf");
const closeBtn = document.getElementById("close");

// Night detection (local time)
const hour = new Date().getHours();
const isNight = hour >= 19 || hour <= 6;

// Convert number to Roman numeral
function toRoman(num) {
  const romans = [
    ["M",1000],["CM",900],["D",500],["CD",400],
    ["C",100],["XC",90],["L",50],["XL",40],
    ["X",10],["IX",9],["V",5],["IV",4],["I",1]
  ];
  let result = "";
  romans.forEach(([r, v]) => {
    while (num >= v) {
      result += r;
      num -= v;
    }
  });
  return result;
}

stories.forEach((story, index) => {
  const w = document.createElement("div");
  w.className = "window";

  if (isNight) w.classList.add("lit");

  // Window number
  const num = document.createElement("div");
  num.className = "window-number";
  num.textContent = toRoman(index + 1);
  w.appendChild(num);

  w.onclick = () => {
    w.classList.add("open");
    pdf.src = story.pdf;
    modal.style.display = "block";
  };

  windowsContainer.appendChild(w);
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  pdf.src = "";
  document.querySelectorAll(".window").forEach(w => w.classList.remove("open"));
};

window.onclick = e => {
  if (e.target === modal) closeBtn.onclick();
};

