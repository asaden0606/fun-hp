<script lang="ts" setup></script>
<template>
  <div class="root" id="strong">
    <h2 class="maintitle">私の強み</h2>
    <section class="frontSection">
      <h3 class="subtitle">最新のWebプログラミングに対応</h3>
      <p>
        近年、プログラミング言語の進化は目覚ましのものがあり、その中で最も急激に進化しているのがWebのプログラミング言語でしょう。
        私はWebの言語の常に最新情報に目を配り、技術の対応を積極的に進めてます。
        以下は私が扱えるWebの言語の例です。
      </p>
      <ul>
        <li>JavaScript(ES2018)</li>
        <li>BABEL</li>
        <li>TypeScript</li>
      </ul>
      <div class="languageImgs -js-fade-left" data-scroll="out">
        <img class="languageImg" src="@/assets/img/front/bland/es-1.svg" />
        <img class="languageImg" src="@/assets/img/front/bland/javascript-1.svg" />
        <img class="languageImg" src="@/assets/img/front/bland/typescript.svg" />
        <img class="languageImg" src="@/assets/img/front/bland/webpack-icon.svg" />
      </div>
      <p>また、Web以外にも扱える言語として、下記があります。</p>
      <ul>
        <li>C/C++</li>
        <li>C#</li>
        <li>Java</li>
        <li>Python</li>
        <li>PHP</li>
        <li>Perl</li>
        <li>VB</li>
        <li>VBS</li>
        <li>VBA</li>
      </ul>
      <div class="qualificationImgs -js-fade-right" data-scroll="out">
        <img class="qualificationImg" src="@/assets/img/front/bland/c.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/c-2975.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/microsoft-net.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/java-4.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/python-4.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/php.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/vb.svg" />
        <img class="qualificationImg" src="@/assets/img/front/bland/vbs.svg" />
      </div>
    </section>
    <section class="frontSection">
      <h3 class="subtitle">Linuxが得意</h3>
      <p>
        前業務ではLinuxサーバーの構築も行っており、100台以上のインストール及び管理を任されておりました。
      </p>
      <p>
        また、小規模なサイト構築の経験も多々あります。
        趣味で自宅サーバーも作成しており、本サイトはその自宅サーバーにて運営して配信されております。
      </p>
      <img class="serverImg -js-fade-left" src="@/assets/img/front/server.jpg" data-scroll="out" />
    </section>
    <section class="frontSection">
      <h3 class="subtitle">豊富な知識に裏付けされる、資格の数</h3>
      <p>
        私は実力を証明するためにも、積極的に資格を取得しております。
        以下私が取得している資格の一覧です。(2019年8月時点)
      </p>
      <ul>
        <li>LPIC 7種(303/302/301/202/201/102/101)</li>
        <li>情報セキュレイティスペシャリスト</li>
        <li>OSS DB Silver</li>
        <li>応用情報技術者</li>
        <li>基本情報技術者</li>
        <li>OCJ-P</li>
        <li>OCJ-WC</li>
        <li>XML Master</li>
        <li>UMTP</li>
        <li>他5資格</li>
      </ul>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import "@/css/share.scss";

.root {
  padding: 3em;

  @include sp($sph) {
    padding: 1em;
  }

  .frontSection {
    margin-bottom: 5em;

    .languageImgs {
      display: flex;
      align-items: top;
      flex-wrap: wrap;

      .languageImg {
        width: 100%;
        max-width: 100px;
        margin: 0 0.5em 0.5em 0;
      }
    }

    .qualificationImgs {
      display: flex;
      align-items: top;
      flex-wrap: wrap;

      .qualificationImg {
        width: 100%;
        height: 100px;
        max-width: 100px;
        margin: 0 0.5em 0.5em 0;
      }
    }

    .serverImg {
      max-width: 400px;
      width: 100%;
    }
  }
}
</style>
