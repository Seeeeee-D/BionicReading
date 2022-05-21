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
    let newNode = document.createElement('strong');
    // ボールドにする
    // range.toString()が使えるからやっぱりselectionいらないかも
    newNode.innerHTML = selection.toString();
    // 元のテキストを削除して
    selectedRange.deleteContents();
    // 装飾済みテキストを挿入
    selectedRange.insertNode(newNode);
}
