const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const branchInput = document.getElementById("branch");
const phoneInput = document.getElementById("phone");

nameInput.addEventListener("input", () => {
  if (nameInput.value !== "") {
    nameInput.classList.add("filled");
  } else {
    nameInput.classList.remove("filled");
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value !== "") {
    emailInput.classList.add("filled");
  } else {
    emailInput.classList.remove("filled");
  }
});
branchInput.addEventListener("input", () => {
  if (branchInput.value !== "") {
    branchInput.classList.add("filled");
  } else {
    branchInput.classList.remove("filled");
  }
});
phoneInput.addEventListener("input", () => {
  if (phoneInput.value !== "") {
    phoneInput.classList.add("filled");
  } else {
    phoneInput.classList.remove("filled");
  }
});
