import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "25%",
    left: "25%",
    width: "50%",
    height: "50%",
    right: "auto",
    bottom: "auto",
    margin: "0 auto",
    padding: 0
  }
};

function BranchHostelMap(props) {
  return (
    <Modal
      isOpen={props.toggleModal}
      contentLabel="Assign Hostel"
      style={customStyles}
    >
      <div class="card border-dark" style={{ width: "100%", height: "100%" }}>
        <div class="card-header bg-dark text-white">Assign Hostel</div>
        <div class="card-body">
          <form className="mt-4">
            <div class="form-group">
              <label for="pickhostel">Example select</label>
              <select class="form-control" id="pickhostel">
                {props.hostels.map(hostel => {
                  return <option>{hostel.id}</option>;
                })}
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-retweet mr-2"></i> Assign
              </button>
            </div>
          </form>
        </div>
        <button className="btn btn-outline-dark m-3" onClick={props.closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
}

const mapStateToProps = state => ({
  hostels: state.hostel
});

export default connect(mapStateToProps)(BranchHostelMap);
