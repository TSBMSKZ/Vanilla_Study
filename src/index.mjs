import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //divタグ生成
  const div = document.createElement(div);
  div.className = "listRow"

  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

};

document
.getElementById("addTodo")
.addEventListener("click",() => onClickAdd());