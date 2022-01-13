import React from "react";
import Human from "../interfaces/Human";

const Index = () => {
  rrih.getAge(rrih.birth.year, rrih.birth.month, rrih.birth.day);
  return (
    <>
      <h1>rrih</h1>
      とある社会人一年目
      <br/>
      作ったものについて列挙してみる。途中で諦めたものが多いかも
      <h2>リンク</h2>
      <ul>
        <li><a href="https://github.com/rrih">GitHub</a></li>
        <li><a href="https://roiroi.dev">WebSite</a></li>
      </ul>
      <h2>
      製作物
      </h2>

      <ul>
        <li>
          カラオケ用の曲管理ツール
          <ul>
            <li>
              <a href={`${rrih.ghPersonalAccountUrl}song-front`}>rrih/song-front</a>
            </li>
            <li>
              <a href={`${rrih.ghPersonalAccountUrl}song-api`}>rrih/song-api</a>
            </li>
          </ul>
          <div>
            2022/01/14 現在、一応開発中のはずなのですが一生完成しなそうな雰囲気があります。<br/>
            物が作りたいのか技術を触りたいのか主目的が常にブレていて前に進まない
          </div>
        </li>
        <li>
          オレオレカンバンツール
          <div>
            <a href="https://roiroi.dev/kanban">kanban</a>
          </div>
          <div>現状中身からっぽ。たしか react-dnd とか使ってみたかっただけな気がする。やる気あったのかな、いやない</div>
        </li>
        <li>
          再帰コンポーネント
          <div>
            <a href="https://roiroidev.github.io/recursive-component/">ここ</a>
          </div>
          Qiita の試し
        </li>
        <li>
          3の倍数のやつ
          <div>
            <a href="https://3-fool.vercel.app/">ここ</a>
          </div>
          Twitterで某芸人風アカウントが流行っていた時に勢いで作った
        </li>
        <li>
          チャット用ツール
          <div>
            <a href="https://github.com/roiroidev/chat-social-networking-service">chat-social-networking-service
</a>
          </div>
          CakePHP の練習に作った
        </li>
        <li>
          ログ整形ツール
          <div>
            <a href="https://mysql-log-formatter.vercel.app/">https://mysql-log-formatter.vercel.app/</a>
          </div>
          一生使わなそう
        </li>
        <li>
          <a href="https://roiroidev.github.io/cakephp-baked-code-formatter/">https://roiroidev.github.io/cakephp-baked-code-formatter/</a>
        </li>
        コードフォーマッタ的なもの。多分もう一生使わない。
        <li>
          <a href="https://github.com/roiroidev/kyugyo">https://github.com/roiroidev/kyugyo</a>
        </li>
        今は亡き自作サイト。React+Nest.jsの組み合わせで初めてSPA+APIの構成で作ったけどDBにしていたやつが廃止されててそのままお亡くなりになった。<br/>
        ref: <a href="http://kazuhito-m.github.io/tech/2020/11/11/maybe-lost-heroku-mongodb-data">http://kazuhito-m.github.io/tech/2020/11/11/maybe-lost-heroku-mongodb-data</a>
      </ul>
    </>
  )
}

export default Index

const rrih: Human = {
  id: 1,
  name:   "Kawahara Ryohei",
  birth:  {
    year:   1997,
    month:     9,
    day:      11,
  },
  job:     "IT作業員",
  company: "Lancers, inc.",
  university:    "Tokyo Denki Univ",
  address: "Meguro",
  email: "rsklv@icloud.com",
  getAge(year, month, day) { return 0 },
  ghPersonalAccountUrl: "https://github.com/rrih/",
  ghOrgAccountUrl: "https://github.com/roiroidev/",
};