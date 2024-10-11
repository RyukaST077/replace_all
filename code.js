function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('置換ツール')
  .addItem('一括置換を実行', 'replaceTextWithRules')
  .addToUi()
}

// Google Apps Script上の置換ルールを保持する変数
// searchに置換したい文字列、replaceに置換後の文字列を指定
var rules = [
  {search: 'これはレイです', replace: 'これは例です。'},
  {search: '私はHTMLのコードを', replace: 'まとめて置換するために使ってます'},
  {search: '<table>', replace: '<table class="table-blue">'}
];


// 実際の置換を実行する関数
function replaceTextWithRules() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  for (var i = 0; i < rules.length; i++) {
    body.replaceText(rules[i].search, rules[i].replace);
  }

  Logger.log('置換が完了しました');
}
