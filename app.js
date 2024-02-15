// app.js
function addBtn() {
  let folderList = document.getElementById("hoge");

  if (folderList) {
  // folderList(hogehoge)の中の末尾に行を追加
  var row = folderList.insertRow(-1);
  var secRow = folderList.insertRow(-1);

  // 新しく追加した行にidを設定
  row.id = "newRow";
  //上で追加したrowに空白セルを追加
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell(-1);
  var cell5 = row.insertCell(-1);
  // セルに内容を入れる
  cell1.innerHTML = "";
  cell2.innerHTML = "┣━";
  cell3.innerHTML = "<button>＞</button>";
  cell4.id = "col1";
  cell4.innerHTML =
    '  <td><input type="button" value="file1"/></td>';
  cell5.innerHTML =
    '<input type="button" value="-" onclick="delBtn(this)">';
  // <tr>
  //     <td></td>
  //     <td></td>
  //     <td><button>＞</button></td>
  //     <td><input type="button" value="行を追加" id="coladd" onclick="addBtn()"/></td>
  //     <td><input type="button" value="-" id="coladd(this)" onclick="delBtn(this)"></td>
  // </tr>


   //上で追加したsecRowに空白セルを追加
  var secCell1 = secRow.insertCell(-1);
  var secCell2 = secRow.insertCell(-1);
      // 新しく追加したsecRowにidを設定
      secRow.id = "newSecRow";
  secCell1.innerHTML = "┗━";
  secCell2.innerHTML ='<td><input type="button" value="+" onclick="addBtn(this)"/></td>';


  console.log(folderList);
  } else {
    console.error("テーブルが見つかりません。");
  }
}
// 削除ボタンを押した時の処理
function delBtn(obj) {
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  // trのインデックスを取得して行を削除する
    console.log(obj);
  console.log(obj.parentNode);
  console.log(obj.parentNode.parentNode);
  console.log(obj.parentNode.parentNode.parentNode);
  console.log(tr.parentNode);
  // tr.parentNode.deleteRow(tr.sectionRowIndex);


}
