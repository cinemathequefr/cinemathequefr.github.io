<script>
  import Logo from "./Logo.svelte";
  import Search from "./Search.svelte";
  export let segment;
</script>

<header>
  <div class="container">
    <a class="logo-container" href="."><Logo /></a>

    <Search />
    <ul class="menu2">
      <li
        ><a
          aria-current={segment === "nos-collections" ? "page" : undefined}
          href="nos-collections">Nos collections</a
        ></li
      >
      <li
        ><a
          aria-current={segment === "groupes" ? "page" : undefined}
          href="groupes">Groupes</a
        ></li
      >
      <li
        ><a
          aria-current={segment === "actions-en-milieu-scolaire"
            ? "page"
            : undefined}
          href="actions-en-milieu-scolaire">Actions en milieu scolaire</a
        ></li
      >
      <li
        ><a
          aria-current={segment === "presse" ? "page" : undefined}
          href="presse">Presse</a
        ></li
      >
      <li
        ><a
          aria-current={segment === "evenements-prives" ? "page" : undefined}
          href="evenements-prives">Événements privés</a
        ></li
      >
      <li
        ><a
          aria-current={segment === "mecenat" ? "page" : undefined}
          href="mecenat">Mécénat</a
        ></li
      >
    </ul>

    <ul class="menu1">
      <li>
        <a
          aria-current={segment === "cinema" ? "page" : undefined}
          href="cinema">Cinéma</a
        >
      </li>
      <li>
        <a
          aria-current={segment === "exposition" ? "page" : undefined}
          href="exposition">Exposition</a
        >
      </li>
      <li>
        <a aria-current={segment === "musee" ? "page" : undefined} href="musee"
          >Musée</a
        >
      </li>
      <li>
        <a
          aria-current={segment === "bibliotheque" ? "page" : undefined}
          href="bibliotheque">Bibliothèque</a
        >
      </li>
      <li>
        <a
          aria-current={segment === "magazine" ? "page" : undefined}
          href="magazine">Magazine</a
        >
      </li>
      <li>
        <a
          aria-current={segment === "jeune-public" ? "page" : undefined}
          href="jeune-public">Jeune public</a
        >
      </li>
      <li>
        <a
          aria-current={segment === "infos-pratiques" ? "page" : undefined}
          href="infos-pratiques">Infos pratiques</a
        >
      </li>
      <li>
        <a
          aria-current={segment === "calendrier" ? "page" : undefined}
          href="calendrier">Calendrier</a
        >
      </li>
    </ul>
  </div>
</header>

<style>
  header {
    background-color: #000;
    color: #eee;
  }
  .container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
    padding: 16px 0 0 0;
  }

  ul.menu2 {
    display: flex;
    align-self: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: stretch;
    padding-bottom: 8px;
    border-bottom: solid 1px #a3fffa44;
    transform: translateY(9px);

    /* margin-right: 12px; */
  }

  ul.menu2 li {
    align-self: auto;
    /* outline: solid 1px green; */
  }

  ul.menu2 li a {
    display: inline-block;
    font-family: "Source Sans Pro";
    font-weight: 300;
    font-size: 1rem;
    padding: 4px 8px;
    transition: 0.2s;
  }
  ul.menu2 li a[aria-current="page"] {
    color: #a3fffa;
  }
  ul.menu2 li:first-child a {
    padding-left: 0;
  }
  ul.menu2 li:last-child a {
    padding-right: 0px;
  }

  /*
  ul.menu2 li a:hover,
  ul.menu2 li a:active {
    color: red;
  }
  */

  ul.menu1 {
    display: flex;
    width: 100%;
    align-self: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  ul.menu1 li {
    align-self: auto;
    flex: 1 1 auto; /* outline: solid 1px green; */
  }

  ul.menu1 li a {
    display: block;
    font-family: QuicksandCF;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.125rem;
    padding: 12px 4px;
    transition: 0.2s;
    text-align: center;
  }
  ul.menu1 li a[aria-current="page"] {
    background-color: #a3fffa44;
    color: #a3fffa;
  }
  /* 
  ul.menu1 li:first-child a {
    padding-left: 0;
  }
  ul.menu1 li:last-child a {
    padding-right: 0px;
  } */

  /*
  ul.menu1 li a:hover,
  ul.menu1 li a:active {
    color: red;
  }
*/

  :global(svg.logo) {
    display: inline-block;
    height: 100%;
    fill: #fff;
    transition: 0.2s;
  }
  /* 
  :global(svg.logo:hover) {
    fill: #a3fffa;
  }
  */

  a.logo-container {
    position: absolute;
    display: inline-block;
    height: 60px;
    top: 36px;
    /* outline: solid 1px green; */
  }

  /*
  :global(.search-container),
  ul.menu1,
  ul.menu2 {
    outline: solid 1px red !important;
  }
  */
</style>
