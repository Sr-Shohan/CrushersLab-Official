import React from 'react'

function Count() {
    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row counters">
                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start={0} data-purecounter-end={4} data-purecounter-duration={1} className="purecounter" />
                        <p>Clients</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start={0} data-purecounter-end={5} data-purecounter-duration={1} className="purecounter" />
                        <p>Projects</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                        <p>Hours Of Support</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start={0} data-purecounter-end={10} data-purecounter-duration={1} className="purecounter" />
                        <p>Hard Workers</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Count
