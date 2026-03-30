const password = document.querySelector("#password");
const toggle = document.querySelector("#togglePassword");

toggle.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    toggle.textContent = type === "password" ? "👁️" : "🙈";
});
