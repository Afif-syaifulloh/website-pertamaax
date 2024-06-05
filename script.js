const userNameInput = document.getElementById("user-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");
const registerButton = document.querySelector(".button-container button");

registerButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const userName = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const age = ageInput.value.trim();

  if (userName === "") {
    alert("Anda belum memasukkan username");
    return;
  }

  if (userName.charAt(0) !== userName.charAt(0).toUpperCase()) {
    alert("User name harus diawali dengan huruf kapital.");
    return;
  }

  if (
    email === "" ||
    !validateEmailWithoutRegex(email) ||
    !email.endsWith("@gmail.com")
  ) {
    alert("Anda belum memasukkan email (harus gmail).");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Anda harus menggunakan email dengan domain @gmail.com.");
    return;
  }

  if (password === "") {
    alert("Silahkan masukkan password");
    return;
  }

  if (
    password.charAt(0) !== password.charAt(0).toUpperCase() ||
    !containsNumber(password)
  ) {
    alert(
      "Password harus diawali dengan huruf kapital dan harus terdapat minimal 1 angka."
    );
    return;
  }

  if (age === "") {
    alert("Anda belum memasukkan umur.");
    return;
  }

  if (isNaN(age) || age < 1) {
    alert("Umur harus berupa angka yang valid.");
    return;
  }

  alert("Registration successful!");
});

function validateEmailWithoutRegex(email) {
  const atSymbolIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  return (
    atSymbolIndex > 0 &&
    dotIndex > atSymbolIndex + 1 &&
    dotIndex < email.length - 1 &&
    !email.includes(" ")
  );
}

function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str.charAt(i)) && str.charAt(i) !== " ") {
      return true;
    }
  }
  return false;
}
