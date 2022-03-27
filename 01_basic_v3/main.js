const table = document.querySelector("table"); // 表
const todo = document.getElementById("todo"); // TODO
const priority = document.querySelector("select"); // 優先度
const deadline = document.querySelector('input[type="date"]'); // 締切
const submit = document.getElementById("submit"); // 登録ボタン
const storage = localStorage;
const list = [];  // TODOリストのデータ

//TODO登録ボタン
submit.addEventListener("click", () => {
  const item = {}; //入力値をいったん格納するオブジェクト。

  item.todo = todo.value;
  item.priority = priority.value;
  if (deadline.value != '') {
    item.deadline = deadline.value;
  } else {
    item.deadline = new Date().toLocaleDateString().replace(/\//g, '-');
  }
  item.done = false; //完了はひとまず、boolean型で設定

  //フォームのリセット
  todo.value = "";
  priority.value = "中";
  deadline.value = "";

  const tr = document.createElement('tr'); // tr要素を生成

  // オブジェクトの繰り返しはfor-in文
  for (const prop in item) {
    const td = document.createElement('td'); // td要素を生成
    if (prop == 'done') { // 完了欄の場合
      const checkbox = document.createElement('input');  // 要素生成
      checkbox.type = 'checkbox';    // type属性をcheckboxに
      checkbox.checked = item[prop]; // checked属性を設定
      td.appendChild(checkbox);      // td要素の子要素に
    } else {
      td.textContent = item[prop]; // ブラケット記法
    }
    tr.appendChild(td); // 生成したtd要素をtr要素に追加
  }

  table.appendChild(tr); // trエレメントをtable要素に追加

  list.push(item);
  storage.todoList = JSON.stringify(list);

});

