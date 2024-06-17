grid = document.querySelector("container");
document.body.style.margin = 0;
function draw_grid(size) {
  border = 0.1
  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let vh = 100/size
        let div = document.createElement("div");
        div.style.width = vh + "vh"
        div.style.height = vh + "vh";
        div.style.outline = border +"vh black solid"
        div.style.backgroundColor = 'white';
        grid.appendChild(div);
        div.addEventListener("mouseover", ()=> {
          div.style.backgroundColor = "gray"
        })
      }
  }
}

let size1 = prompt("grid size here: ")
draw_grid(size1)

change_button = document.querySelector("#change")
change_button.addEventListener("click", () => {
  let newsize = prompt("new grid size here:")
  document.querySelectorAll("div").forEach(a => a.remove())
  draw_grid(newsize)
})