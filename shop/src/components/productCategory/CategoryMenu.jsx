import React from 'react'

function CategoryMenu({ items }) {
    return (
        <div className="card-body">
            <div className="tab-content">
                <div className="tab-pane fade show active">
                    <div className="two-small-items">
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" >
                                    <div className="row">

                                        {
                                            items.map((item) => {
                                                const { id, title, img } = item
                                                return (
                                                    <div key={id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                                                        <div className="card p-item" >
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={img} alt={title} width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>{title}</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev d-none d-lg-block" type="button"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next d-none d-lg-block" type="button"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu
