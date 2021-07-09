const btn = document.querySelector(".submit");
const input = document.querySelector(".input");
const distinguish = document.querySelector(".distinguish");

const palindrome = (e) => {
  e.preventDefault();
  const inputValue = input.value;
  console.log("inputValue: ", inputValue);

  // 1. to lowercase
  const lowerCasing = inputValue.toLowerCase();

  // 2. strip non-alphanumeric characters
  const matchOnes = lowerCasing.match(/[a-z0-9]/g);
  const makeStr = matchOnes.join("");

  // 3. return string === reversed String
  const reversedArr = matchOnes.reverse();
  const reversedStr = reversedArr.join("");

  console.log("reversedStr :", reversedStr);

  // 4. comparison

  if (makeStr === reversedStr) {
    console.log("true");
    distinguish.innerHTML = "IT IS PALINDROME";
    distinguish.classList.remove("red");
  } else {
    console.log("false");
    distinguish.innerHTML = "IT'S NOT PALINDROME ";
    distinguish.classList.add("red");
  }

  // 5. Make the input field empty
  input.value = "";
};

btn.addEventListener("click", palindrome);
