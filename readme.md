Expressのミドルウェアで使用するRequest/Responseの定義の拡張について学習する

- `.d.ts`は`tsconfig.json`の設定によるが名前を問わず自動的に有効になる
- `hoge.d.ts`に対し`hoge.ts`が必要というわけではない
- モジュールスコープ外であれば`declare global`を省略して記述可能
- typescriptにおけるglobalはブラウザのwindow、Nodeのglobalのような「グローバルオブジェクト」とは違い名前空間である。後者はメソッドなどを使用するためのものだが前者はそういった使われ方はしない
- モジュールスコープとはimport/exportをしていないスクリプトであり、型のみを定義した(jsへのコンパイルにより空白になるような)ファイルのこと
