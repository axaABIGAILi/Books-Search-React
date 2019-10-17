/* SEARCH BAR COMPONENT */

import React from 'react';

const Searchbar = props => {
    return(
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
    )
}

export default Searchbar;