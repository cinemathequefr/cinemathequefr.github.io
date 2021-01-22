<script>
  import { selected } from "../stores.js";
  let days = ["Vendredi", "Samedi", "Dimanche"];
</script>

<nav>
  <ul>
    {#if process.browser}
      {#each days as day, i}
        <li
          data-id={i}
          on:click={(e) => {
            selected.set(e.target.dataset.id);
          }}
          class:selected={i == $selected}>{day}</li
        >
      {/each}
    {/if}
  </ul>
</nav>

<style>
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 12px 0;
    justify-content: flex-start;
  }

  li {
    flex: 0 0 auto;
    padding: 4px 0;
    margin: 4px 8px;
    border-bottom: solid 3px transparent;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    color: #2e9994;
    font-size: 1.125rem;
  }

  li:first-child {
    margin-left: 0;
  }

  li.selected {
    border-bottom-color: #2e9994;
  }
</style>
