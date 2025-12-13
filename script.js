const windowsContainer = document.getElementById("windows");
const modal = document.getElementById("modal");
const pdf = document.getElementById("pdf");
const closeBtn = document.getElementById("close");

// Night detection (local time)
const hour = new Date().getHours();
const isNight = hour >= 19 || hour <= 6;

stories.forEach((story, index) => {
  const w = document.createElement("div");
  w.className = "window";

  if (isNight) w.classList.add("lit");

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

