import React from 'react'

function Card(props) {
    return (
        <div className='row'>
            <div className='col-lg-3'>

            </div>
            <div className='col-lg-6' style={{marginTop:'7px'}}>
                <div className="card" style={{padding:'20px'}}>
                    <h5 className="card-title">{props.url.slice(36)}</h5>
                    <h6><a href={props.url}>Link</a></h6>
                    <h6>Total clicks <span className='badge badge-secondary'>{props.clicks}</span></h6>
                </div>
            </div>
            <div className='col-lg-3'>

            </div>
        </div>
    )
}

export default Card
