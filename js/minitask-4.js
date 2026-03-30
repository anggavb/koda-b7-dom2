const main = document.querySelector("main")
const form = document.querySelector("form")
const menuLogin = document.querySelector("ul :nth-child(3)")
const menuLogout = document.querySelector("ul :nth-child(4)")

const user = localStorage.getItem('user')
const credentials = {
  username: 'admin',
  password: 'password'
}

if (user) {
  menuLogin.classList.add('hidden')
  menuLogout.classList.remove('hidden')
  form.classList.add('hidden')
} else {
  menuLogin.classList.remove('hidden')
  menuLogout.classList.add('hidden')
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const formLogin = {
    username: e.target.elements.username.value,
    password: e.target.elements.password.value
  }

  if (JSON.stringify(credentials) === JSON.stringify(formLogin)) {
    localStorage.setItem('user', JSON.stringify(formLogin))
    alert("Welcome!")
    menuLogin.classList.add('hidden')
    menuLogout.classList.remove('hidden')

    window.location.reload();
  } else {
    alert("Wrong Credentials!")
    menuLogin.classList.remove('hidden')
    menuLogout.classList.add('hidden')
    window.location.reload();
  }
})

menuLogout.addEventListener("click", () => {
  localStorage.removeItem('user')
  alert("Yo've been logout!")
  window.location.reload(); 
})