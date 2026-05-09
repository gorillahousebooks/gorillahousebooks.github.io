
// DOG WALKER
class DogWalker extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container pb-4">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 text-center pb-4">
                    <a href="dog-walker.html">
                        <img src="images/dogwalker-lg.webp" alt="Dog Walker by Jack McGuigan" class="img-fluid" /><br />
                    </a>
                    <a href="dog-walker.html">
                        <strong>Dog Walker</strong>
                    </a>
                    <br />
                    <a href="jack-mcguigan.html">
                        <small>Jack McGuigan</small>
                    </a>
                </div>     
                <div class="col-6 col-md-4 col-lg-3 text-center pb-4">
                    <a href="dog-walker-ii-shadow-pack.html">
                        <img src="images/dogwalkerii-lg.webp" alt="Dog Walker II: Shadow Pack by Jack McGuigan" class="img-fluid" /><br />
                    </a>
                    <a href="dog-walker-ii-shadow-pack.html">
                        <strong><span class="text-nowrap">Dog Walker II:</span> <span class="text-nowrap">Shadow Pack</span></strong>
                    </a>
                    <br />
                    <a href="jack-mcguigan.html">
                        <small>Jack McGuigan</small>
                    </a>
                </div>   
                <div class="col-6 col-md-4 col-lg-3 text-center pb-4">
                    <a href="dog-walker-iii-wedding-siege.html">
                        <img src="images/dogwalkeriii-lg.webp" alt="Dog Walker III: Wedding Siege by Jack McGuigan" class="img-fluid" /><br />
                    </a>
                    <a href="dog-walker-iii-wedding-siege.html">
                        <strong><span class="text-nowrap">Dog Walker III:</span> <span class="text-nowrap">Wedding Siege</span></strong>
                    </a>
                    <br />
                    <a href="jack-mcguigan.html">
                        <small>Jack McGuigan</small>
                    </a>
                </div>       
            </div>
        </div>
        `   
    }
}

customElements.define('dog-walker-series',DogWalker);

// FRANK NANO SAGA
class Nano extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container pb-4">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 text-center pb-4">
                    <a href="nanoland.html">
                        <img src="images/nanoland-lg.webp" alt="Nanoland by Jack McGuigan" class="img-fluid" /><br />
                    </a>
                    <a href="nanoland.html">
                        <strong>Nanoland</strong>
                    </a>
                    <br />
                    <a href="jack-mcguigan.html">
                        <small>Jack McGuigan</small>
                    </a>
                </div>      
                <div class="col-6 col-md-4 col-lg-3 text-center pb-4">
                    <a href="nanoman.html">
                        <img src="images/nanoman-lg.webp" alt="Nanoman by Jack McGuigan" class="img-fluid" /><br />
                    </a>
                    <a href="nanoman.html">
                        <strong>Nanoman</strong>
                    </a>
                    <br />
                    <a href="jack-mcguigan.html">
                        <small>Jack McGuigan</small>
                    </a>
                </div>        
            </div>
        </div>
        `   
    }
}

customElements.define('nano-series',Nano);