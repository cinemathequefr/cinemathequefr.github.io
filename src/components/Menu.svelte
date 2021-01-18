<script>
  import Logo from "./Logo.svelte";
  import Search from "./Search.svelte";
  export let segment;
</script>

<header class="light">
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
    background-color: #fff;
    color: #000;
  }
  .container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
    padding: 16px 0 0 0;
    border-bottom: solid 1px #eee;
  }

  a:hover,
  a:active {
    color: inherit;
  }

  ul.menu2 {
    display: flex;
    align-self: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: stretch;
    padding-bottom: 2px;
    border-bottom: solid 1px #eee;
    transform: translateY(9px);
  }

  ul.menu2 li {
    align-self: auto;
  }

  ul.menu2 li a {
    display: inline-block;
    font-family: "Source Sans Pro";
    font-weight: 300;
    font-size: 1rem;
    color: #666;
    padding: 4px 2px 2px 2px;
    margin: 0 4px;
    border-bottom: solid 3px transparent;
    transition: 0.2s;
  }
  ul.menu2 li a[aria-current="page"] {
    border-bottom-color: #2e9994;
  }
  ul.menu2 li:first-child a {
    margin-left: 0;
  }
  ul.menu2 li:last-child a {
    margin-right: 0px;
  }

  ul.menu1 {
    display: flex;
    width: 100%;
    align-self: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    /* justify-content: space-between; */
  }

  ul.menu1 li {
    align-self: auto;
  }

  ul.menu1 li a {
    display: block;
    font-family: QuicksandCF;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.125rem;
    padding: 12px 4px 2px 4px;
    margin: 0 4px;
    border-bottom: solid 5px transparent;
    margin-bottom: 2px;
    transition: 0.2s;
    text-align: center;
  }
  ul.menu1 li a[aria-current="page"] {
    border-bottom-color: #2e9994;
  }

  :global(svg.logo) {
    display: inline-block;
    margin-left: 4px;
    height: 100%;
    fill: #000;
    transition: 0.2s;
  }
  a.logo-container {
    position: absolute;
    display: inline-block;
    height: 60px;
    top: 36px;
  }
</style>
