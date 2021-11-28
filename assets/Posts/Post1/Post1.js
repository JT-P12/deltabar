import React from "react";
import Head from "../../Head";
import {MathJax, MathJaxContext} from "better-react-mathjax"

function Post1() {
    const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
        packages: { "[+]": ["html"] },
        inlineMath: [["$", "$"]],
        displayMath: [["$$", "$$"]]
        }
    };

    return (
        <div class="post1">
            <section class="page-header page-header-modern bg-color-dark-scale-1 page-header-md">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 align-self-center p-static order-2 text-center" >
                            <Head />
                            <span class="sub-title text-color-light text-justify text-5"> Perhaps someone devoting their life to it could bring themselves
                                to picture the fourth dimension.
                            </span>
                            <span class="sub-title font-weight-bold text-color-secondary text-align-right text-5">
                                <a href="https://www.biodiversitylibrary.org/page/10778548#page/784/mode/1up" class = "text-color-secondary" >
                                    -Henri Poincar&eacute;
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container py-4">
                <div class="row">
                    <div class="col">
                        <div class="blog-posts single-post">
                            <MathJaxContext config={config}>
                                <article class="post post-large blog-single-post border-0 m-0 p-0">
                                    <div class="post-content ms-0 text-color-grey">
                                        <h2 class="font-weight-semi-bold text-color-tertiary">Constructing the 24-Cell as a Spherical Tessellation</h2>
                                        <div class="post-meta">
                                            <span class="text-color-tertiary"> Jonathan Trousdale </span>
                                            <span class="text-color-tertiary"> December 1, 2021 </span>
                                        </div>
                                        <p class="text-color-grey">
                                            In three dimensions there are five regular convex polyhedra: tetrahedron, octahedron, cube, icosahedron, dodecahedron, known from antiquity as the five Platonic solids. 
                                            Each Platonic solid has an analogous regular convex polytope in four dimensions: 5-cell, 16-cell, 8-cell, 600-cell, 120-cell, respectively.  But the fourth dimensions holds
                                            one more regular polytope with no analog in any other dimension, the 24-cell.  In any dimension greater than four there are only three regular convex polyhedra, the 
                                            analogs of the tetrahedron, octahedron and cube.
                                            After reading H.S.M. Coxeter's <i>Regular Polytopes</i> years ago, striving to hold a mental picture of the 24-cell
                                            in my mind became a regular exercise.
                                        </p>
                                        <p class="text-color-grey">
                                            Let's start with some basic facts about the 24-cell. It has 24 octahedral cells, 96 triangular faces, 96 edges, and 24 vertices. As suggested by this configuration, the 24-cell is self-dual,
                                            which establishes a projective relationship between vertices and cells, as well as edges and faces. Taken together, the vertices and cells of the 24-cell describe the 48 root vectors of the exceptional 
                                            Lie group <b>F<sub>4</sub></b>.  If the vertices of the 24-cell are taken to lie on the unit 3-sphere, <MathJax inline>{"$S^3$"}</MathJax>, they can be represented as the elements of 
                                            the <a className="text-color-tertiary" href="https://people.maths.bris.ac.uk/~matyd/GroupNames/1/SL(2,3).html">Binary Tetrahedral Group</a>.  Projecting the remaining elements of the 24-cell 
                                            onto <MathJax inline>{"$S^3$"}</MathJax> gives a regular tessellation of <MathJax inline>{"$S^3$"}</MathJax>,
                                            and the vertices together with the cells (or dual vertices if you prefer) can be represented by the <a className="text-color-tertiary" href="https://people.maths.bris.ac.uk/~matyd/GroupNames/1/CSU(2,3).html">Binary Octahedral Group</a>.
                                        </p>
                                        <p class="text-color-grey">
                                            New paragraph
                                        </p>
                                    </div>
                                </article>
                            </MathJaxContext>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post1