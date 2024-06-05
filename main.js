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

// Exercise 1

// const pomKey = document.querySelector(".pom_key");

// let counter = 0;

// function incrementCounter() {
//   counter = counter + 1;
//   console.log("Counter: " + counter);
// }

// pomKey.onclick = incrementCounter;

// Exercise 2

// const keyList = document.querySelectorAll(".key");
// console.log(keyList);

// Exercise 3

// const keyList = document.querySelectorAll(".key");
// keyList[3].onclick = incrementCounter

// Exercise 4

// let i = 0;

// while (i < keyList.length) {
//   keyList[i].onclick = incrementCounter;
//   i++;
// }

// Exercise 5

// for (let i = 0; i < keyList.length; i++) {
//   keyList[i].onclick = incrementCounter;
// }