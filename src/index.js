import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liを生成
  const li = document.createElement("li");
  li.className = "list-row";

  //pを作成
  const p = document.createElement("p");
  p.innerText = inputText;

  //liの子要素に各要素を設定
  li.appendChild(p);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
