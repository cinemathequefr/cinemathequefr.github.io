<script>
  import Logo from "./Logo1.svelte";
  import Search from "./Search.svelte";
  export let segment;
</script>

<style>
  header {
    background-color: #ddd;
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
    /* margin-right: 12px; */
  }

  ul.menu2 li {
    align-self: auto;
    /* outline: solid 1px green; */
  }

  ul.menu2 li a {
    display: inline-block;
    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 1rem;
    padding: 4px 8px;
  }

  ul.menu2 li:first-child a {
    padding-left: 0;
  }
  ul.menu2 li:last-child a {
    padding-right: 0px;
  }

  ul.menu2 li a:hover,
  ul.menu2 li a:active {
    color: red;
  }

  ul.menu1 {
    display: flex;
    width: 100%;
    align-self: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul.menu1 li {
    align-self: auto;
    outline: solid 1px green;
  }

  ul.menu1 li a {
    display: inline-block;
    font-family: QuicksandCF;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.125rem;
    padding: 12px;
  }

  ul.menu1 li a:hover,
  ul.menu1 li a:active {
    color: red;
  }

  :global(svg.logo) {
    display: inline-block;
    height: 100%;
  }

  a.logo-container {
    position: absolute;
    display: inline-block;
    height: 60px;
    top: 36px;
    outline: solid 1px green;
  }

  :global(.search-container),
  ul.menu1,
  ul.menu2 {
    outline: solid 1px red !important;
  }
</style>

<header>
  <div class="container">
    <a class="logo-container" href="."><Logo /></a>

    <Search />
    <ul class="menu2">
      <li><a href=".">Nos collections</a></li>
      <li><a href=".">Groupes</a></li>
      <li><a href=".">Actions en milieu scolaire</a></li>
      <li><a href=".">Presse</a></li>
      <li><a href=".">Événements privés</a></li>
      <li><a href=".">Mécénat</a></li>
    </ul>

    <ul class="menu1">
      <li>
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">Cinéma</a>
      </li>
      <li>
        <a
          aria-current={segment === 'exposition' ? 'page' : undefined}
          href="exposition">Exposition</a>
      </li>
      <li>
        <a
          aria-current={segment === 'musee' ? 'page' : undefined}
          href="musee">Musée</a>
      </li>
      <li>
        <a
          aria-current={segment === 'bibliotheque' ? 'page' : undefined}
          href="bibliotheque">Bibliothèque</a>
      </li>
      <li>
        <a
          aria-current={segment === 'magazine' ? 'page' : undefined}
          href="magazine">Magazine</a>
      </li>
      <li>
        <a
          aria-current={segment === 'jeune-public' ? 'page' : undefined}
          href="jeune-public">Jeune public</a>
      </li>
      <li>
        <a
          aria-current={segment === 'infos-pratiques' ? 'page' : undefined}
          href="infos-pratiques">Infos pratiques</a>
      </li>
      <li>
        <a
          aria-current={segment === 'calendrier' ? 'page' : undefined}
          href="calendrier">Calendrier</a>
      </li>
    </ul>
    <!--
    <ul class="menu2">
      <li>
        <a
          aria-current={segment === 'collections' ? 'page' : undefined}
          href="collections">Nos collections</a>
      </li>
      <li>
        <a
          aria-current={segment === 'groupes-et-collectivites' ? 'page' : undefined}
          href="groupes-et-collectivites">Groupes et collectivités</a>
      </li>
      <li>
        <a
          aria-current={segment === 'actions-milieu-scolaire' ? 'page' : undefined}
          href="actions-milieu-scolaire">Actions en milieu scolaire</a>
      </li>
      <li>
        <a
          aria-current={segment === 'presse' ? 'page' : undefined}
          href="presse">Presse</a>
      </li>
      <li>
        <a
          aria-current={segment === 'evenements-prives' ? 'page' : undefined}
          href="evenements-prives">Événements privés</a>
      </li>
      <li>
        <select class="lang">
          <option value="fr" selected>Fr</option>
          <option value="en">En</option>
        </select>
      </li>
    </ul>
    <div class="search-container">
      <input class="search" type="text" placeholder="Chercher sur le site" />
      <button class="search-button" />
    </div>
  </div>
-->
  </div>
</header>
