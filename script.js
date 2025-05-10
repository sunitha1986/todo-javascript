console.log("In Script");

const myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
  addDeleteBtn(myNodeList[i]);
}

function onClickDeleteBtn() {
  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function addDeleteBtn(node) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
  onClickDeleteBtn();
}

const addNewTodo = () => {
  const li = document.createElement("li");
  const inputValue = document.getElementById("todo-input").value;
  const span = document.createElement("SPAN");
  const textNode = document.createTextNode(inputValue);
  span.appendChild(textNode);
  li.appendChild(span);
  if (inputValue == "") {
    alert("Enter input ");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("todo-input").value = "";

  addDeleteBtn(li);

  onClickDeleteBtn();
};

//Add a "checked" symbol when clicking on a list item.

const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);
