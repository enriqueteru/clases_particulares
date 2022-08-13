const arr = [1, 2, 3, 4];
const title = document.getElementsByTagName("h1")[0];

function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

const generaLoop = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    title.appendChild(createMenuItem(element));
  }
};

generaLoop(arr);
