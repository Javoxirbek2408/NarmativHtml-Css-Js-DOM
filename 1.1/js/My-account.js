// Dastlabki ma'lumotlar
const defaultUser = {
  firstName: "MD",
  lastName: "Rimel",
  email: "rimel1111@gmail.com",
  address: "Kingston, 5236, United State",
  password: "12345678", // oldindan berilgan parol
};

// DOM elementlar
const firstNameInput = document.querySelector(".firstName");
const lastNameInput = document.querySelector(".lastName");
const emailInput = document.querySelector(".email");
const addressInput = document.querySelector(".address");

const currentPasswordInput = document.querySelector(".currentPassword");
const newPasswordInput = document.querySelector(".newPassword");
const confirmNewPasswordInput = document.querySelector(".confirmNewPassword");

const saveBtn = document.querySelector(".Save__acont");
const cancelBtn = document.querySelector(".Cancel__acont");

// Xatolik xabari chiqarish uchun element
const showError = (message) => {
  let errorBox = document.querySelector(".error-message");
  if (!errorBox) {
    errorBox = document.createElement("p");
    errorBox.className = "error-message";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "10px";
    currentPasswordInput.parentElement.appendChild(errorBox);
  }
  errorBox.textContent = message;
};

// Xatolikni o‘chirish
const clearError = () => {
  const errorBox = document.querySelector(".error-message");
  if (errorBox) errorBox.remove();
};

// Foydalanuvchi ma'lumotlarini LocalStorage'dan olish
const loadUserData = () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || defaultUser;
  firstNameInput.value = userData.firstName;
  lastNameInput.value = userData.lastName;
  emailInput.value = userData.email;
  addressInput.value = userData.address;
};

// Saqlash funksiyasi
const saveChanges = (e) => {
  e.preventDefault();
  clearError();

  const storedData =
    JSON.parse(localStorage.getItem("userData")) || defaultUser;

  const currentPassword = currentPasswordInput.value.trim();
  const newPassword = newPasswordInput.value.trim();
  const confirmNewPassword = confirmNewPasswordInput.value.trim();

  // Agar foydalanuvchi parol o'zgartirishni xohlasa
  if (currentPassword || newPassword || confirmNewPassword) {
    if (currentPassword !== storedData.password) {
      showError("Current password is incorrect.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      showError("New passwords do not match.");
      return;
    }

    storedData.password = newPassword;
  }

  storedData.firstName = firstNameInput.value.trim();
  storedData.lastName = lastNameInput.value.trim();
  storedData.email = emailInput.value.trim();
  storedData.address = addressInput.value.trim();

  localStorage.setItem("userData", JSON.stringify(storedData));
  alert("Changes saved successfully!");
  clearPasswordFields();
};

// Parollarni tozalash
const clearPasswordFields = () => {
  currentPasswordInput.value = "";
  newPasswordInput.value = "";
  confirmNewPasswordInput.value = "";
};

// Bekor qilish funksiyasi
const cancelChanges = (e) => {
  e.preventDefault();
  clearError();
  loadUserData();
  clearPasswordFields();
  alert("Changes have been cancelled.");
};

// Eventlar
document.addEventListener("DOMContentLoaded", loadUserData);
saveBtn.addEventListener("click", saveChanges);
cancelBtn.addEventListener("click", cancelChanges);
