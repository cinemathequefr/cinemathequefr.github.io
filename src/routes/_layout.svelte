<script>
  import Menu from "../components/Menu.svelte";
  export let segment;
</script>

<Menu {segment} />
<main>
  <slot />
</main>

<!--
<div class="extra">
  <a href="charte">Charte visuelle</a>
</div>
-->
<style>
</style>
