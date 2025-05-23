# 開発者向けドキュメント

ここでは、Twin:te と連携したサービスを開発したい開発者向けに、Twin:te の仕様や連携サービスを開発する上での注意点などを説明しています。

Twin:te と連携したサービスを開発する場合は、必ずこのページに目を通してください。
また、[Twin:te 外部連携機能に関する規約](https://www.twinte.net/apiterms) を必ずご確認ください。

※許可なく連携機能を利用して不特定多数に向けて公開することはできません。
不特定多数に向けて公開する場合には Twin:te 運営への連絡と許可が必要になります。
[Twin:te 外部連携機能に関する規約](https://www.twinte.net/apiterms) に関する違反がないかを確認次第、こちらからご連絡いたします。

## Twin:te の API について

セキュリティ上、Twin:te の外部サービスでは Twin:te の API を利用することはできません。
Twin:te 側で用意した UI を介して外部と連携する機能を提供しています。

## 1. Twin:te へのインポート機能

外部サービスから Twin:te に授業データをインポートすることができます。
以下のように codes 以下はカンマ区切りの文字列で渡します。

(例) `GB11514`と`1101102`の授業をインポートする場合

`https://app.twinte.net/import?codes=GB11514,1101102`

### 仕様

#### 年度と年度替わりのタイミングについて

Twin:te には年度の概念があり、年度ごとに異なる KdB を参照しています。
既定では「現在の年度」が表示・検索・追加に用いられ、これはメニューの「表示設定」で変更可能です。
また「現在の年度」は KdB が更新される 4/1 から最新の年度になります。（ニュースページにて広報予定です。）

![](https://user-images.githubusercontent.com/37821819/172515599-1e2ad2e7-7ec6-41c0-97b2-fb2124859444.png)

インポート URL からは年度の指定はできません。
これはユーザーの意図しない年度にインポートするのを防ぐためです。

表示設定またはメニューバーで表示されている年度に追加されます。

### トラブルシューティング

#### 未ログイン時の場合

ユーザーが Twin:te にログインしていない場合、ログインを促すモーダルが表示されます。
ログイン後、インポートページにリダイレクトされます。

#### 講義が見つからなかった場合

講義が見つからない場合エラートーストが表示されます。
エラー表示されていない授業は Twin:te に追加されています。

また年度によっては講義が見つからない場合があります。

#### 重複していた場合

講義が重複している場合エラートーストが表示されます。
エラー表示されていない授業は Twin:te に追加されています。

## お問い合わせ先

mail: info@twinte.net  
Twitter: @te_twin
