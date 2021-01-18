<script>
  import { selected } from "../stores.js";

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
</script>

<nav>
  <ul>
    {#each days as day, i}
      <li class:selected={i === 0}>{day}</li>
      <!-- <li class:selected={i === $selected}>{day}</li> -->
    {/each}
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
