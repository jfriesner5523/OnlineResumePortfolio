
// PAGE LINKS


// var indx = "../index.html"
var indx = "index.html"
var onlinePortfolioPage = "HTML/OnlinePortfolioPage.html"

// var onlinePortfolioPage = "../HTML/OnlinePortfolioPage.html"


// JSON Element for the nav.
var TopNav = `<nav class="navbar navbar-expand-lg bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#" style="color:lightgreen">JF</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href=${indx} style="color:lightcoral">Online Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=${onlinePortfolioPage} style="color:lightcoral">Portfolio</a>
      </li>
    </ul>
  </div>
</div>
</nav>`


function loadtopNav  () {
  var htmlWrapper = document.getElementById("nav");
  htmlWrapper.innerHTML= TopNav;
}



























