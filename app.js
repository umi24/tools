// app.js
function coladd() {
  let folderList = document.getElementById("hoge");

  if (folderList) {
  // folderList(hogehoge)の中の末尾に挿入
  var row = folderList.insertRow(-1);

  //セルの追加
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell(-1);
  var cell5 = row.insertCell(-1);

  // セルに内容を入れる
  cell1.innerHTML = "";
  cell2.innerHTML = "┣━";
  cell3.innerHTML = "<button>＞</button>";
  cell4.innerHTML =
    "<tr>" +
    "  <td></td>" +
    "  <td></td>" +
    '  <td><input type="button" value="行を追加" id="coladd"onclick="coladd()"/></td>' +
    "</tr>";
  cell5.innerHTML =
    '<input type="button" value="-" id="coladd" onclick="coldel(this)">';
  // <tr>
  //     <td></td>
  //     <td></td>
  //     <td><button>＞</button></td>
  //     <td><input type="button" value="-" id="coladd" onclick="coldel(this)"></td>
  // </tr>
  console.log(folderList);
  } else {
    console.error("テーブルが見つかりません。");
  }
}
// 削除ボタンを押した時の処理
function coldel(obj) {
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  // trのインデックスを取得して行を削除する
  tr.parentNode.deleteRow(tr.sectionRowIndex);
}
