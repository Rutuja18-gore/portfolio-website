// Typing Effect
const words = ["Frontend Developer", "UI Designer", "Web Developer"];
let i = 0, j = 0, deleting = false;

function typing() {
  let word = words[i];
  document.querySelector(".typing").textContent = word.substring(0, j);

  if(!deleting && j < word.length) j++;
  else if(deleting && j > 0) j--;
  else {
    deleting = !deleting;
    if(!deleting) i = (i + 1) % words.length;
  }

  setTimeout(typing, deleting ? 50 : 100);
}
typing();

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));