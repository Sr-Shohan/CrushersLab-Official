import React from 'react'

function Main() {
    return (
        <main id="main">
            {/* ======= Featured Services Section ======= */}
            <section id="featured-services" className="featured-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box text-center ">
                                <div className="icon text-center "><i class="bi bi-laptop"></i></div>
                                <h4 className="title"><a href> Have an Idea ?</a></h4>
                                <p className="description">If You have an Idea you can feel free to share with us .Our Team Ready to Implement Your idea </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">

                            <div className="icon-box text-center  ">
                                <div className="icon text-center "><i class="bi bi-card-checklist"></i></div>
                                <h4 className="title"><a href>Need Your Digital Support ?</a></h4>
                                <p className="description">If You need Any Kind Of Digital Support  you can feel free to share with us .Our Team Ready to Help You</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div className="icon-box  text-center ">
                                <div className="icon text-center "><i class="bi bi-clipboard-data"></i></div>
                                <h4 className="title"><a href> Lets Talk How can i Help You </a></h4>
                                <p className="description">If you want to grow your business with us . Lets We can talk About that .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Main;
