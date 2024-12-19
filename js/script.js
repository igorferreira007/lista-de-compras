const inputNewItem = document.getElementById("input-item")
const form = document.querySelector("form")
const ul = document.querySelector("ul")
const warning = document.querySelector(".warning")
const closeWarning = document.getElementById("close-warning")

let newItem = ""

inputNewItem.addEventListener("change", () => {
  newItem = inputNewItem.value
})

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (newItem.trim() === "") {
    return alert("Digite algum item para adicionar na lista.")
  }

  addNewItem()

  inputNewItem.value = ""
  inputNewItem.focus()
})

ul.addEventListener("click", removeItem)

closeWarning.addEventListener("click", () => {
  warning.classList.remove("display-flex")
})

function addNewItem() {
  const newLi = document.createElement("li")

  newLi.innerHTML = `
    <div>
      <input type="checkbox" name="" id="">
      <span></span>
      <label for="">${newItem}</label>
    </div>
    <button><img src="./assets/Frame.svg" alt=""></button>
  `

  /* Esse código é outra opção para remover um item da lista.
  Ele adiciona um evento a cada botão da lista, separadamente.

  const deleteButton = newLi.querySelector("button")
  deleteButton.addEventListener("click", () => {
    ul.removeChild(newLi)
  })
  */

  ul.append(newLi)

  newItem = ""
}

function removeItem(event) {
  const target = event.target

  if (target.closest("button")) {
    const response = confirm("Tem certeza que deseja excluir o item?")

    if (response) {
      const itemToRemove = target.closest("li")
      ul.removeChild(itemToRemove)

      warning.classList.add("display-flex")
      setTimeout(() => {
        warning.classList.remove("display-flex")
      }, 3000)
    }
  }
}