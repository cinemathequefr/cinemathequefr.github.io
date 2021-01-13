<script>
  import Logo from "./Logo.svelte";
  export let segment;
</script>

<style>
  .header {
    position: relative;
    color: #fff;
    background: #1e2345;
    background: linear-gradient(90deg, #161a33 0%, #414d8c 100%);
  }

  .header > .container {
    position: relative;
    height: 180px;
    /* height: 210px; */
  }

  input[type="text"] {
    font-family: "Source Sans Pro";
    background-color: transparent;
    border-radius: 0px;
    border: none;
    margin: 0;
    padding: 12px 12px;
    color: #111;
    font-weight: 400;
    font-size: 16px;
  }

  .search-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;

    position: absolute;
    border-radius: 0px;
    background-color: #eee;
    padding: 0;
    top: 83px;
    right: 0;
    width: 375px;
    /* width: 476px; */
    transition: 0.2s;
  }

  .search-container:focus-within {
    background-color: #fff;
  }

  .search {
    order: 0;
    flex: 1 1 auto;
    align-self: flex-start;
    border: none;
  }

  .search-button {
    order: 1;
    flex: 0 1 auto;
    align-self: flex-start;
    vertical-align: middle;
    height: 44px;
    width: 44px;
    padding: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><path fill='%23999' d='M29.54 23.89c0-1.56-0.56-2.89-1.66-3.99s-2.44-1.66-3.99-1.66 -2.89 0.55-3.99 1.66 -1.66 2.44-1.66 4 0.55 2.89 1.66 3.99c1.11 1.11 2.44 1.66 4 1.66s2.89-0.56 3.99-1.66C28.98 26.77 29.54 25.44 29.54 23.89zM36 34.39c0 0.44-0.16 0.82-0.48 1.14C35.2 35.84 34.82 36 34.39 36c-0.45 0-0.83-0.16-1.13-0.48l-4.33-4.31c-1.51 1.04-3.18 1.56-5.03 1.56 -1.2 0-2.35-0.23-3.45-0.7 -1.1-0.47-2.04-1.1-2.84-1.89 -0.79-0.79-1.43-1.74-1.89-2.84C15.23 26.24 15 25.09 15 23.89s0.23-2.35 0.7-3.45c0.47-1.1 1.1-2.04 1.89-2.84 0.8-0.79 1.74-1.43 2.84-1.89C21.53 15.23 22.68 15 23.89 15s2.35 0.23 3.45 0.7c1.1 0.47 2.05 1.1 2.84 1.89 0.8 0.8 1.43 1.74 1.89 2.84 0.47 1.1 0.7 2.25 0.7 3.45 0 1.85-0.52 3.53-1.56 5.04l4.33 4.33C35.84 33.56 36 33.94 36 34.39z'/></svg>");
    cursor: pointer;
  }

  ul.menu1 {
    white-space: nowrap;
    position: absolute;
    bottom: 0px;
    right: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul.menu1 > li {
    display: inline-block;
  }
  ul.menu1 > li > a {
    display: block;
    color: #fff;
    background-color: #666;
    /* background-color: #7a5b42; */
    margin: 0 0 0 -1px;
    padding: 8px 8px;
    font-family: Quicksandcf;
    font-weight: 600;
    font-size: 0.875rem;
    /* font-weight: 700; */
    /* font-size: 1rem; */
    text-transform: uppercase;
    transition: 0.2s;
  }

  ul.menu1 > li > a:hover,
  ul.menu1 > li > a:active {
    background-color: #777;
    /* background-color: rgb(142, 111, 86); */
  }

  ul.menu1 > li > a[aria-current="page"] {
    background-color: red;
  }

  ul.menu2 {
    white-space: nowrap;
    position: absolute;
    top: 4px;
    right: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul.menu2 > li {
    display: inline-block;
  }
  ul.menu2 > li > a {
    display: block;
    margin: 0 4px;
    padding: 0 0 0 0;
    border-bottom: solid 2px transparent;
    font-size: 0.938rem;
    transition: 0.1s;
    color: #9ca1bd;
  }

  ul.menu2 > li > a:hover,
  ul.menu2 > li > a:active {
    border-bottom-color: #9ca1bd;
    /* border-bottom-color: rgba(255, 255, 255, 0.5); */
  }

  .lang {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 400;
    border: none;
    padding-bottom: 0px;
    border-bottom: solid 2px #fff;
    text-align: center;
    color: #fff;
  }
</style>

<div class="header">
  <div class="container">
    <Logo />

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
</div>
