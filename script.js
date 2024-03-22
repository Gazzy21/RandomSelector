const nameArray = []

function addName () {
    const nameInput = document.getElementById('nameInput')
  const name = nameInput.value.trim()
  nameArray.push(name)
  displayName()
  nameInput.value
}

document.getElementById('addNameBtn').addEventListener('click', addName)