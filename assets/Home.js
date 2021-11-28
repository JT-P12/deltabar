import React from "react";
import Head from "./Head";
import About from "./About";
import Sum1 from "./Posts/Post1/Sum1";

const Home = () => {
    return (
        <div class="home">
            <section class="page-header page-header-modern bg-color-dark-scale-1 page-header-md">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 align-self-center p-static order-2 text-center" >
                            <Head />
                            <span class="sub-title text-color-light text-justify text-5"> Facts would be barren if there were not minds capable of choosing between them, discerning
                                those which have something hidden inside them, and recognizing what is hidden - minds that, within the bare fact, can feel the 
                                soul of the fact.
                            </span>
                            <span class="sub-title font-weight-bold text-color-secondary text-align-right text-5">
                                <a href="https://archive.org/details/scienceetmthod00poin/page/22/mode/1up" class = "text-color-secondary" >
                                    -Henri Poincar&eacute;
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container py-4">
                <div class="row justify-content-center">
                    <div class="col-lg-12 order-lg-1">
                        <div class="blog-posts">
                            <div class="row">
                                <Sum1 />
                                <div class="col-sm-6">
                                    <article class="post post-medium border-0 pb-0 ps-3 pe-3">
                                        <div class="post-image">
                                            <a className="text-color-tertiary" href="eigenplanes-of-SU2.html">
                                                <img src="img/favicon.png" class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                                            </a>
                                        </div>
                                        <div class="post-content">
                                            <h2 class="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a className="text-color-tertiary" href="constructing-the-600-cell-as-a-spherical-tessellation.html">Constructing the 600-Cell as a Spherical Tessellation</a></h2>
                                            <p class="text-justify text-color-grey">
                                                The 600-cell and its dual, the 120-cell, have the highest order symmetry of any regular convex polytope in four dimensional space.
                                                Similar to the treatment of the 24-cell, we consider the 600-cell as a tessellation of the 3-sphere in search of an intuitive appreciation for its structure. 
                                                This approach gives a natural view of the connection between the 24-cell and the exceptional Lie group <b>E<sub>8</sub></b>.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <article class="post post-medium border-0 pb-0 ps-3 pe-3">
                                        <div class="post-image">
                                            <a href="eigenplanes-of-SU2.html">
                                                <img src="img/" class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                                            </a>
                                        </div>
                                        <div class="post-content">
                                            <h2 class="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a className="text-color-tertiary" href="eigenplanes-of-SU2.html">Eigenplanes of <b>SU(2)</b></a></h2>
                                            <p class="text-justify text-color-grey">
                                                The Lie group <b>SU(2)</b>, which is isomorphic to unit quaternions, is both ubiquitous and subtle.  It underlies concepts as humble as
                                                Cartesian 3-space, and as profound as quantum spin.  In this post we look at a natural decomposition of the elements of <b>SU(2)</b> into
                                                invariant bivectors and pairs of conjugate eigenvalues.  These invariant bivectors have a direct connection to binary polyhedral groups that is both
                                                surprising and quite useful.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <About />
        </div>
    );
};

export default Home;