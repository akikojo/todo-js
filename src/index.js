import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liを生成
  const li = document.createElement("li");
  console.log(li);
  alert(inputText);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
