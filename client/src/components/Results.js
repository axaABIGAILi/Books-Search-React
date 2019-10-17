import React from 'react';

const Results = props => {
    return (
    <div className="container">
      <div className="row">
        <div className="col">
                <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={props.image} class="card-img" alt={props.title}></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{props.title} by {props.author}</h5>
                          <p className="card-text">{props.description}</p>
                          <button className="btn bg-light">View</button> 
                          <button className="btn bg-light" type="submit">Save</button>
                        </div>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Results;