const building = document.getElementById("building");
const modal = document.getElementById("storyModal");
const closeBtn = document.getElementById("closeBtn");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

stories.forEach((story, index) => {
  const windowDiv = document.createElement("div");
  windowDiv.className = "window";

  windowDiv.addEventListener("click", () => {
    storyTitle.textContent = story.title;
    storyText.textContent = story.text;
    modal.style.display = "block";
  });

  building.appendChild(windowDiv);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
