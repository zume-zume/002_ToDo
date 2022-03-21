const table = document.querySelector('table');     // 表
const todo = document.getElementById('todo');      // TODO
const priority = document.querySelector('select'); // 優先度
const deadline = document.querySelector('input[type="date"]');  // 締切
const submit = document.getElementById('submit');  // 登録ボタン

//TODO登録ボタン
submit.addEventListener('click', () => {
  //ここに処理を書く
});

const item = {}; //入力値をいったん格納するオブジェクト。

item.todo = todo.value;
item.priority = priority.value;
item.deadline = deadline.value;
item.done = false; //完了はひとまず、boolean型で設定

//フォームのリセット
todo.value = '';
priority.value = '普';
deadline.value = '';

const tr = document.createElement('tr');   // tr要素を生成

// オブジェクトの繰り返しはfor-in文
for (const prop in item) {
  const td = document.createElement('td'); // td要素を生成
  td.textContent = item[prop];  // ブラケット記法
  tr.appendChild(td);  // 生成したtd要素をtr要素に追加
}

table.append(tr);  // trエレメントをtable要素に追加