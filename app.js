const svg = document.querySelector('svg');
const pathArray = Array.from(svg.querySelectorAll('path'));

const boxButton = document.createElement("div");
document.body.append(boxButton);
boxButton.classList.add("boxButton")

pathArray.map(path => {
  const id = path.getAttribute('id');
  const name = path.getAttribute("name");
  

  let button = document.createElement("button");
  boxButton.append(button);
  button.textContent = name;

  button.addEventListener("click",() => {
    path.classList.add("red")
    const span = document.createElement('div');
    span.textContent = `${name}`;
    

    const rect = path.getBoundingClientRect();
    span.style.position = "absolute";
    span.style.left = rect.left + "px";
    span.style.top = rect.top + "px";
    svg.parentElement.appendChild(span);
  });

  path.addEventListener('click', () => {
    document.querySelector(".red")?.classList.remove("red");
    const span = document.createElement('div');
    span.textContent = `${name}`;
    document.querySelector(".box")?.classList.remove("box");
    span.classList.add("box")
    
    const rect = path.getBoundingClientRect();
    span.style.position = "absolute";
    span.style.left = rect.left + "px";
    span.style.top = rect.top + "px";
    
    svg.parentElement.appendChild(span);
  });

  path.addEventListener("click",()=>{
      console.log("yes")

  });
});

