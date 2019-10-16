import React, { Component } from "react";
//connect is used to connect this component to redux
import { connect } from "react-redux";
//we import getList from redux so we can use the function
import { getList } from "../ducks/listReducer";

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }

  //we are running a redux function here that we added to props
  //using the CONNECT function at the bottom of this component
  componentDidMount = () => {
    this.props.getList();
  };

  //for this example the render does not really matter
  render() {
    console.log(this.props);
    return <div>LANDING WORKS SO WELL HOME SLICE</div>;
  }
}
//this function grabs state from our redux
//it then puts that state onto PROPS
//we can then use props to access redux state
function mapStateToProps(state) {
  return {
    listReducer: state.listReducer
  };
}
//this connect takes in 2 arguments
//it takes the mapStateToProps function
export default connect(
  mapStateToProps,
  { getList }
)(Landing);
