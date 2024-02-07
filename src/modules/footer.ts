import { createTag, createMultiTags } from "./functions";

function createFooter() {
  const footer = createTag(null, "footer", null, null, null);
  footer.innerHTML = `<ul class="footerSides">
    <li><a href="#">Impressum</a></li>
    <li><a href="#">Sitemap</a></li>
  </ul>
  <ul class="social">
    <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>
    <li><a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a></li>
    <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></i></li>
  </ul>`;
}

export { createFooter };
