const arr = [1, 2, 3, 4];
const title = document.getElementsByTagName("h1")[0];

const createMenuItem = (name) => {
  let h2 = document.createElement("span");
  h2.textContent = name;
  return h2;
};

const generaLoop = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    title.appendChild(createMenuItem(element));
  }
};

generaLoop(arr);
