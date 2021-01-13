<script>
  import Menu from "../components/Menu1.svelte";
  export let segment;
</script>

<style>
  main {
    width: 100%;
    max-width: 1380px;
    margin: auto;
  }
</style>

<Menu {segment} />
<main>
  <slot />
</main>
