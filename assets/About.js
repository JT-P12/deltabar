import React from "react";

const About = () => {
    return (
        <div class="container bg-color-dark-scale-1">
            <div class="row justify-content-center">
                <div class="col-lg-10 order-lg-1 pe-4">
                    <div class="row-md-10 mb-4">
                        <h5 class="text-4 mb-3 text-color-light">ABOUT THE Author</h5>
                        <p class="mb-2 text-4 text-justify text-color-grey"><a class="text-color-secondary" href="https://www.linkedin.com/in/jonathan-trousdale/">Jonathan Trousdale</a> is an engineer, patent attorney and entrepreneur.
                            I have a deep appreciation for professional mathematicians, past and present, and spend most of my leisure time to studying their works.  The great mathematicians are true artists,
                            and in that regard I am an aesthete.</p>
                        <p class="mb-2 text-4 text-justify text-color-grey">My interests lean heavily towards group theory and geometry, which is the general motif of this blog. Several of the mathematicians that have had the greatest impact on me are  
                            (in order of appearance) Felix Klein, Henri Poincar&eacute;, Hermann Weyl, &Eacute;lie Cartan, H.S.M. Coxeter, Roger Penrose and John Baez.</p>
                    </div>
                </div>
                <div class="col-lg-2 order-lg-2">
                    <aside class="sidebar">
                        <h5 class="text-4 mb-3 text-light">Resources</h5>
                        <ul class="list list-icons list-borders list-secondary">
                            <li> <i class="fa fa-caret-right color"></i>  <a class="text-color-secondary text-4" href="translations.html">Translations</a></li>
                            <li> <i class="fa fa-caret-right color"></i>  <a class="text-color-secondary text-4" href="https://github.com/DeltaBar">GitHub</a></li>
                            <li> <i class="fa fa-caret-right color"></i>  <a class="text-color-secondary text-4" href="contact.html">Subscribe to Updates</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default About;