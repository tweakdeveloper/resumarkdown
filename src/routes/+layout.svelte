<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');

  :global(:root) {
    --color-accent-dark: #a8c3b5;
    --color-accent-light: #558b6e;
    --color-danger: #d64933;
    --color-dark: #2e282a;
    --color-light: #fbfbfb;
    --fonts-sans: Rubik, Arial, sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  :global(h1) {
    font-family: var(--fonts-sans);
    margin: 0;
    padding: 0;
  }
</style>
