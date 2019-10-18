import React from 'react';

const Results = props => {
    return (
    <div className="container">
      <div className="row">
        <div className="col">
            <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                  <label for="searchInput" className="col-sm-2 col-form-label">Search</label>
                  <div className="col-sm-9">
                    <input id="searchInput" className="form-control" type="search" placeholder="Find a book by title"></input>
                  </div>
                  <div class="col-sm-1">
                    <button id="searchbtn" class="btn bg-light" type="submit" onClick={props.handleBookSearch}><i class="fa fa-search"></i></button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
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
                          <button className="btn bg-light mr-2 bookView">View</button>  
                          <button className="btn bg-light bookSave" type="submit">Save</button>
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