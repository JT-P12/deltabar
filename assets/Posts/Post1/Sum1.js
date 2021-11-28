import React from "react";

function Sum1() {
    return (
        <div class="sum1 col-sm-6">
            <article class="post post-medium border-0 pb-0 ps-3 pe-3 ">
                <div class="post-image">
                    <a href="post1">
                        <img src="../static/img/post1.png" class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                    </a>
                </div>
                <div class="post-content">
                    <h2 class="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                        <a className="text-color-tertiary" href="post1">
                            Constructing the 24-Cell as a Spherical Tessellation
                        </a>
                    </h2>
                    <p class="text-justify text-color-grey">
                        The 24-cell holds a unique place in the universe of geometric figures as the only regular convex polytope with 
                        no analogue in higher or lower dimensions.  In this post we consider the 24-cell as a tessellation of
                        the 3-sphere. This gives an elegant and tangible approach to visualizing properties such as its vertex-cell duality
                        and its intimate connection to the exceptional Lie group <b>F<sub>4</sub></b>.
                    </p>
                </div>
            </article>
        </div>
    );
}
export default Sum1