/**
 * BionicReadingを適用した文字列を返す
 */
function boldify(text) {
    // 単語に分解
    const words = text.split(" ")
    // それぞれ前半だけ太字に
    const newWords = [];
    words.map((w)=>{
      const wSize = Math.floor(w.length / 2);
      const first = w.substring(0, wSize).bold();
      const last = w.substring(wSize, w.length);
      console.log(`first: ${first}`)
      console.log(`last: ${last}`)
      newWords.push(first.concat(last));
    });
    console.log(`text: ${text}`)
    console.log(`newText: ${newWords.join(" ")}`)
    // 連結して返す
    return newWords.join(" ");
}

document.body.onclick = (e) => {
    // 始点
    const x = e.pageX;
    const y = e.pageY;
    // 終点
    const elementUnderMouse = document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset);
    // 指定座標の要素がもらえる
    console.log(elementUnderMouse);

    // 2点→Range
    const range = document.createRange();
    range.selectNodeContents(elementUnderMouse);

    // Range→Selection
    const selection = window.getSelection();
    if(!selection.rangeCount) return; //範囲選択されている箇所がない場合は何もせず終了

    let selectedRange = selection.getRangeAt(0);
    let newNode = document.createElement('span');
    // ボールドにする
    // range.toString()が使えるからやっぱりselectionいらないかも
    newNode.innerHTML = boldify(selection.toString());
    // 元のテキストを削除して
    selectedRange.deleteContents();
    // 装飾済みテキストを挿入
    selectedRange.insertNode(newNode);
}
