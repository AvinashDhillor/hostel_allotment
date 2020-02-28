import React from "react";

export default function HostelRoomsData(props) {
  return (
    <div>
      <form onSubmit={props.handlerooms} className="row m-3">
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="range"
            name="rooms"
            placeholder="Eg. 210-220, 240-250"
          />
        </div>
        <div className="col-sm-5">
          <label className="sr-only" htmlFor="occupancy">
            Size
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Size</div>
            </div>
            <input
              type="number"
              className="form-control"
              id="occupancy"
              placeholder="0"
              name="occupancy"
            />
          </div>
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-outline-info">
            <i className="fas fa-plus text-info"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
