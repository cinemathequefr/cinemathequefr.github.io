<script>
  import CalendarHome from "../components/CalendarHome.svelte";
</script>

<svelte:head>
  <title>[CFv35] La Cinémathèque française</title>
</svelte:head>
<section class="calendar-container">
  <div class="container">
    <CalendarHome />
  </div>
</section>

<style>
  .calendar-container {
    background-color: #eff;
    height: 350px;
  }
</style>
