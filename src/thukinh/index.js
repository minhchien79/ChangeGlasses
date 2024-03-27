import React, { Component } from "react";
import data from "./dataGlasses.json";
import Header from "./header";

export default class ChangeGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGlasses: data,
      selectedGlasses: null,
    };
  }

  renderListGlasses() {
    return this.state.listGlasses.map((item) => {
      return (
        <div className="col-md-2" key={item.id}>
          <button
            onClick={() => {
              this.handlChangeGlasses(item);
            }}
          >
            <img className="img-fluid" src={item.url} alt="" />
          </button>
        </div>
      );
    });
  }

  handlChangeGlasses(selectedGlasses) {
    this.setState({
      selectedGlasses: selectedGlasses,
    });
  }

  render() {
    const { selectedGlasses } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <div className="card" style={{ position: 'relative', width: "18rem" }}>
            <img
              src="./img/model.jpg"
              className="card-img-top img-fluid"
              alt="..."
            />
            {selectedGlasses && ( 
              <img className="glasses" src={selectedGlasses.url} alt="" />
            )}
            <div className="card-body">
              <h5 className="card-title">
                {this.state.selectedGlasses
                  ? this.state.selectedGlasses.name
                  : ""}
              </h5>
              <p className="card-text">
                {this.state.selectedGlasses
                  ? this.state.selectedGlasses.desc
                  : ""}
              </p>
            </div>
          </div>
          <div className="row pt-3">{this.renderListGlasses()}</div>
        </div>
      </>
    );
  }
}
