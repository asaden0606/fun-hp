<script lang='ts' setup>
import NavComponent from "@/components/nav.vue";
import GameComponent from "@/components/game.vue";
</script>
<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="menu_content">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <game-component></game-component>
  </div>
</template>
<style lang='scss'>
@import "@/css/share";

html {
  background-color: $theme1;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 12px;

  @include sp($sph) {
    font-size: 16px;
  }
}

body {
  margin: 0em;
}



.menu_content {
  padding: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
<style lang='scss'>
@import "@/css/share.scss";

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0em;
  margin-bottom: 0em;
}

h2 {
  font-family: verdana, arial, helvetica, Sans-Serif;
  border-left: 8px solid $theme5;
  color: $theme5;
  padding: .3em;
  margin-bottom: 1em;
  border-bottom: 1px solid #ccc;
}



table,
tr,
td,
th {
  border-collapse: collapse;
  border: solid 0.5px black;
}

th {
  background-color: #cccccc;
}

td.buy {
  background-color: $buy;
}

td.sell {
  background-color: $sell;
}

table {
  max-width: 100%;
}

span.buy {
  color: $buy_font;
}

span.sell {
  color: $sell_font;
}


input,
select,
button {
  font-size: 1rem;
}

.content_root {
  @include pc($pch) {
    margin: 1em;
  }

  @include sp($sph) {
    margin: 0.1em;
  }
}


button,
input[type="submit"],
input[type="reset"],
select {
  border-radius: 1.5em;
  border: transparent 2px solid;
  color: #fff;
  text-align: center;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background: $active;
  cursor: pointer;
}

button,
input[type="submit"],
input[type="reset"] {
  &:active {
    background: $active;
  }
}

button,
input[type="submit"],
input[type="reset"] {
  &:disabled {
    background: gray;
  }
}



input[type="text"],
textarea {
  outline: none;
  border: 1px solid #aaa;
  -webkit-transition: all .3s;
  transition: all .3s;
}

input[type="text"]:focus,
textarea:focus {
  box-shadow: 0 0 7px #1abc9c;
  border: 1px solid #1abc9c;
}



label.checkbox {
  * {
    cursor: pointer;

  }

  input {
    display: none;
  }

  span {
    padding-left: 1.2em;
    position: relative;
  }

  span::before {

    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1em;
    height: 1em;
    font-size: 1rem;
    border: 1px solid #999;
    border-radius: 4px;
  }

  input:checked+span::after {
    content: "";
    display: block;
    position: absolute;
    top: -0.5em;
    left: 0.5em;
    width: 0.5em;
    height: 1em;
    transform: rotate(40deg);
    border-bottom: 0.3em solid $active;
    border-right: 0.3em solid $active;
  }
}




label.radio {
  * {
    cursor: pointer;
  }

  input {
    display: none;
  }

  span {
    padding-left: 1.2em;
    position: relative;
  }

  span::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1em;
    height: 1em;
    border: 1px solid #999;
    border-radius: 50%;
  }

  input:checked+span::after {
    content: "";
    display: block;
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    width: 0.7em;
    height: 0.7em;
    background: $active;
    border-radius: 50%;
  }
}


.buttonable {
  cursor: pointer;
  color: $active;

  &:active {
    cursor: $active;
  }

  &:hover {
    cursor: $hover;
  }
}
</style>
