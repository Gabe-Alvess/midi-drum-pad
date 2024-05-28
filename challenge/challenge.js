const keysList = document.querySelectorAll("input[type=button]");
const display = document.querySelector("input[type=tel]");

for (let i = 0; i < keysList.length; i++) {
  const key = keysList[i];
  key.onclick = () => {
    display.value = display.value + key.value;
  };
}
