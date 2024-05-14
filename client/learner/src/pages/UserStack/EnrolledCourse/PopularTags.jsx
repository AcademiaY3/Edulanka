import React from 'react'

export default function PopularTags() {
    return (
        <div className="col-md-6 col-lg-12">
            {/* Tags START */}
            <div className="card card-body shadow-sm p-4">
                <h4 className="mb-3">Popular Tags</h4>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">blog</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">business</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">theme</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">data science</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">web development</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">tips</a> </li>
                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
                </ul>
            </div>
            {/* Tags END */}
        </div>
    )
}
