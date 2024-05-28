const keyList = document.querySelectorAll(".key");

function playKeySound(keyId) {
  document.querySelector(keyId).play();
}

for (let i = 0; i < keyList.length; i++) {
  const keyName = keyList[i].classList[1];

  //Template String
  const keyId = `#${keyName}_sound`;
  keyList[i].onclick = () => {
    playKeySound(keyId);
  };
}
