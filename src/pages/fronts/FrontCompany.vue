<script lang='ts' setup>
</script>
<template>
  <div id="company" class="root">
    <h2 class="maintitle">会社概要</h2>

    <table class="companyTable">
      <tr>
        <th>会社名</th>
        <td>朝日電気</td>
      </tr>
      <tr>
        <th>設立年月日</th>
        <td>2004年 6月</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>asaden0606@gmail.com</td>
      </tr>
    </table>


    <iframe class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.733732607353!2d130.82107209272715!3d31.393904658132314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e9196106119a1%3A0xce9be300804ccdf1!2z44CSODkzLTAwNjUg6bm_5YWQ5bO255yM6bm_5bGL5biC6YO35LmL5Y6f55S677yR77yS77yQ77yS77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1679291400897!5m2!1sja!2sjp"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>      
<style lang="scss" scoped>
@import "@/css/share";

.root {
  padding: 1em;

  .companyTable {
    border: none;
    margin: auto;
    width: 100%;
    max-width: 800px;

    table-layout: fixed;
    margin-bottom: 3em;
    padding-left: 1em;
    padding-right: 1em;

    tr {
      border: none;
    }

    td,
    th {
      border: none;
      background: none;
      text-align: left;
      word-wrap: break-word;
    }

    th {
      font-size: 1.5rem;
      font-weight: bold;
      width: 30%;
      min-width: 100px;

      @include sp($sph) {
        font-size: 1rem;
      }
    }

    td {
      width: auto;
      font-size: 1.5rem;

      @include sp($sph) {
        font-size: 1rem;
      }
    }
  }

  .map {
    width: 95%;
    height: 400px;
    border: none;
  }
}
</style>
