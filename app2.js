// app2.js
function addBtn() {
    let folderList = document.getElementById("hoge");
  
    if (folderList) {
      // 新しい行を作成
      var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      var cell2 = document.createElement("td");
      var cell3 = document.createElement("td");
  
      // セルに内容を追加
      cell1.innerHTML = "";
      cell2.innerHTML = "┣━";
      cell3.innerHTML = '<button>＞</button>';
      
      // セルを行に追加
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
  
      // テーブルのtbodyに行を追加
      folderList.querySelector('tbody').appendChild(row);
  
      // 新しい行を作成（secRow）
      var secRow = document.createElement("tr");
      var secCell1 = document.createElement("td");
      var secCell2 = document.createElement("td");
  
      // セルに内容を追加
      secCell1.innerHTML = "┗━";
      secCell2.innerHTML = '<td><input type="button" value="+" onclick="addBtn(this)"/></td>';
  
      // セルを行に追加
      secRow.appendChild(secCell1);
      secRow.appendChild(secCell2);
  
      // テーブルのtbodyにsecRowを追加
      folderList.querySelector('tbody').appendChild(secRow);
  
      console.log(folderList);
    } else {
      console.error("テーブルが見つかりません。");
    }
  }
  
  // 削除ボタンを押した時の処理
  function delBtn(obj) {
    // 削除ボタンを押下された行を取得
    var tr = obj.parentNode.parentNode;
    // trのインデックスを取得して行を削除する
    tr.parentNode.removeChild(tr);
  }
  