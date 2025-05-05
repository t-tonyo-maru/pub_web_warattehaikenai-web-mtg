# pub_web_warattehaikenai-web-mtg

## 概要

「笑ってはいけない Web 会議」のデモアプリです。

## 解説記事

[> 【ネタ】笑ってはいけない Web 会議を作ってみる。デモアプリ編](https://zenn.dev/t_tonyo_maru/articles/1fbbaae7fd4a8b)

## デモ URL

[> デモ URL](https://t-tonyo-maru.github.io/pub_web_warattehaikenai-web-mtg/)

## デモ URL の動作確認手順

1. デモ URL にアクセスします。
2. Web カメラの利用許可が求められますので、許可をしてください。
   - **Web カメラで得た映像の収集・保存などはしませんので、ご安心ください。**
     **あくまで表情を解析するために、デモ URL 内で利用するだけです。**
3. Web カメラに映った人物が笑うと「ババーン！」の効果音と「〇〇 OUT」の文字が展開されます。
4. 画面右上のコントロールパネルから、デモアプリの設定を変更できます。
   - 笑顔の判定ライン: 本デモアプリは「[検出された顔の表情が喜び・幸せ(happy)である確率](https://justadudewhohacks.github.io/face-api.js/docs/index.html#withfaceexpressions)」が閾値を超えることで「笑っている」とみなします。その閾値を変更できます。
     あくまで確率による判定であるため、コントロールパネル上で 1 にすると「笑っている」と判定されなくなります。
   - SE のボリューム: 「ババーン！」の効果音のボリュームを変更できます。
   - SE を再生する: 「ババーン！」の効果音を再生するかどうかを切り替えられます。
   - 罰ゲーム対象者: 「〇〇 OUT」の「〇〇」に展開する文字を変更できます。

## ローカル環境で動かす場合のクイックスタート

※ローカルで動かすには Node.js が必要です。適宜インストールしてください。

1. 本リポジトリを clone します。
2. `npm i` を実行します。
3. `npm run dev` を実行します。

## 参考サイト・素材サイト

### 参考サイト

- face-api.js
  - [Github](https://github.com/justadudewhohacks/face-api.js)
  - [npm](https://www.npmjs.com/package/face-api.js/v/0.22.2)
- [【うわっ...私の表情、硬すぎ...？】face-api.js で顔検出して感情と年齢を判定する](https://qiita.com/ymmt1089/items/4e35a7ba62d38c568cb6)

### 素材サイト

- [DOVA-SYNDROME](https://dova-s.jp/se/play656.html)
