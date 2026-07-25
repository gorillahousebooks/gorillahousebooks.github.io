
// NAVIGATION
class MultiNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div class="container">	
            <!-- Brand/logo -->
            <a class="navbar-brand" href="index.html"><img src="https://gorillahousebooks.com/images/GorillaTopBar2.svg" alt="Gorilla House" /></a>
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Links -->
            <div id="navbarNavDropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="index.html#about">About</a>
                    </li>
                    <!-- Dropdown -->
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Books
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="nanoland.html">Nanoland</a>
                        <a class="dropdown-item" href="nanoman.html">Nanoman <span class="text-danger small">New!</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="dog-walker.html">Dog Walker</a>
                        <a class="dropdown-item" href="dog-walker-ii-shadow-pack.html">Dog Walker II: Shadow Pack</a>
                        <a class="dropdown-item" href="dog-walker-iii-wedding-siege.html">Dog Walker III: Wedding Siege</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="agents-of-paradox.html">Agents of Paradox</a>
                    </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="jack-mcguigan.html">Jack McGuigan</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="events.html">Events</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://gorilla-house.beehiiv.com/?modal=signup" target="_blank" rel="noreferrer">Newsletter</a>
                    </li>
                </ul>
            </div>
            </div>
            </nav>        
        `   
    }
}

// FOOTER
class MultiFooter extends HTMLElement {
    connectedCallback() {
        // 1. Set the HTML structure first
        this.innerHTML = `
        <footer class="container-fluid border-top mt-4">
            <div class="container">
                <div class="row">
                    <div class="ghinfo col-12 col-lg-4 text-left pr-2 pr-md-4">
                        <audio id="audio" src="media/x-menyell.mp3"></audio>
                        <img id="logo-vo" src="images/LogoFooter.webp" style="cursor: pointer; padding: 0;" value="PLAY" onclick="play()" alt="Gorilla House logo" class="col-6" /><br /><br />
                        <p><strong>GORILLA HOUSE</strong> is an independent publisher located in Chicago, Illinois. We publish both novels and comic books. Retail and press inquiries may be directed to:</p>
                        <strong>Gorilla House</strong><br />
                        <a href="https://gorillahousebooks.com/">GorillaHouseBooks.com</a><br />
                        <a href="mailto:jack@gorillahousebooks.com">jack@gorillahousebooks.com</a>
                    </div>
                    <div class="col-12 col-lg-4 px-2 text-center">
                        <div id="mc_embed_shell" class="p-4 border rounded shadow-sm text-center bg-white text-center">
                            <span class="display-6" style="font-size:1.5rem;font-weight:700">The Primate Post</span>
                            <p class="text-center text-secondary">News and Updates</p>
                            <div id="beehiiv-form-container" class="w-100 text-center">
                            </div>
                        </div>
                        <div class="footer-copyright text-center py-3">&copy; <span class="year"></span> Gorilla House. All rights reserved.</div>
                    </div>

                    <div class="col-12 col-lg-4 pl-2 pl-md-4">
                        <div class="row jack-gallery">
                            <div class="col-3"><img src="images/Jack04.jpg" class="img-thumbnail img-fluid" alt="Jack, 2016" /></div>
                            <div class="col-3"><img src="images/Jack01.jpg" class="img-thumbnail img-fluid" alt="Jack and Murray, 2019" /></div>
                            <div class="col-3"><img src="images/Jack02.jpg" class="img-thumbnail img-fluid" alt="Jack and Remy, 2016" /></div>
                            <div class="col-3"><img src="images/Jack03.jpg" class="img-thumbnail img-fluid" alt="Comic Jack, 2016" /></div>
                        </div>
                    <p style="text-align:justify"><strong>JACK McGUIGAN</strong> is the author of the <em>Dog Walker</em> novels, the Frank Nano Saga (<em>Nanoland, Nanoman</em>), and <em>Agents of Paradox</em>, a comic book. In his youth, he made movies under the pseudonym "John McGuigan" that can be found on <a href="https://www.youtube.com/user/fireassault" rel="noopener">the internet</a>. He lives in Chicago with his family.</p>
                    <p class="icons text-left text-lg-right">
                    <a name="footeremail" href="mailto:jack@gorillahousebooks.com"><i class="fas fa-envelope"></i></a>&nbsp;
                    <a name="footernewsletter" href="https://gorilla-house.beehiiv.com/?modal=signup" target="_blank" rel="noopener"><i class="fa-solid fa-newspaper"></i></a>&nbsp;
                    <a name="footeramazon" href="https://amzn.to/1SRspAc" target="_blank" rel="noopener"><i class="fab fa-amazon"></i></a>&nbsp;
                    <a name="footerletterboxd" href="https://letterboxd.com/dogwalker/" target="_blank" rel="noopener"><i class="fa-brands fa-square-letterboxd"></i></a>&nbsp;
                    <a name="footerinstagram" href="https://instagram.com/jackmcgbooks" target="_blank" rel="noopener"><i class="fa-brands fa-square-instagram"></i></a>&nbsp;
                    <a name="footerbluesky" href="https://bsky.app/profile/gorillahousebooks.com" target="_blank" rel="noopener"><i class="fa-brands fa-square-bluesky"></i></a>&nbsp;
                    <a name="footergoodreads" href="https://goodreads.com/jackmcgrak" target="_blank" rel="noopener"><i class="fa-brands fa-goodreads"></i></a>
                    </p>
                    </div>
                </div>
            </div>
        </footer>
        `;

        // 2. Manually create and append the script to trigger execution
        const script = document.createElement('script');
        script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
        script.setAttribute('data-beehiiv-form', '33aef271-9c73-4bb9-b6d8-5c88e00a77ea');
        script.async = true;

        // Append the script to the form container div
        const container = this.querySelector('#beehiiv-form-container');
        if (container) {
            container.appendChild(script);
        }

        // Handle the dynamic year update as well
        const yearSpan = this.querySelector('.year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
}

function play(){var audio = document.getElementById("audio");audio.play();}

customElements.define('multi-nav',MultiNav);
customElements.define('multi-footer',MultiFooter);
		