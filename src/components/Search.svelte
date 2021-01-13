<style>
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
    outline: none;
  }

  .search-container {
    display: flex;
    align-self: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    border-radius: 0px;
    background-color: #eee;
    margin: 0;
    /* margin: 0 12px 0 0; */
    width: 300px;
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
</style>

<div class="search-container">
  <input class="search" type="text" placeholder="Chercher sur le site" />
  <button class="search-button" />
</div>
