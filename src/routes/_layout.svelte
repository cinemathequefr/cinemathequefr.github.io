<script>
  import Menu from "../components/Menu.svelte";
  export let segment;
</script>

<Menu {segment} />
<main>
  <slot />
</main>

<style>
</style>
