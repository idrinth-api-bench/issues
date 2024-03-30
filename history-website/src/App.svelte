<script lang="ts" context="module">
  import logo from './assets/iab.svg';
  import t from './lib/t.js';
</script>

<main>
  <header>
    <img src={logo} class="logo" alt="Logo" />
  </header>
  <h1>{t('overview.title',)}</h1>

  <div class="card">
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
