import React from 'react';

const Saved = data => {
    return (
      <div className="container">
        <div className="row">
        <div className="col">
                <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={data.image} class="card-img" alt={data.title}></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{data.title} by {data.author}</h5>
                          <p className="card-text">{data.description}</p>
                          <button className="btn bg-light">View</button> 
                          <button className="btn bg-light" type="submit">Delete</button>
                        </div>
                      </div>
            </div>
          </div>
        </div>
    </div>
        </div>
    )
}

export default Saved;