const template = document.createElement('template');
template.innerHTML = `
  <footer>
      <section class="socialMenu">
        <h4>Y'all can follow me on:</h4>
        <a class="socialButton" href="https://github.com/ismaeltovar" target="_blank">
          <img src="/images/tabler-icon-brand-github.svg" alt="Github Icon">
        </a>
        <a class="socialButton" href="#">
          <img src="/images/tabler-icon-brand-medium.svg" alt="Medium Icon">
        </a>
        <a class="socialButton" href="#" target="_blank">
          <img src="/images/tabler-icon-messages.svg" alt="Quora Icon">
        </a>
        <a class="socialButton" href="#" target="_blank">
          <img src="/images/tabler-icon-brand-instagram.svg" alt="Instagram Icon">
        </a>
      </section>
    </footer>
`
document.body.appendChild(template.content);
