import React, { Fragment } from "react";

import Display from "../display/Display";
import Controls from "../controls/Controls";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  // state = {
  //   locked: false,
  //   closed: false,
  // };

  render() {
    //const { closed, locked } = this.state;

    return (
      <Fragment>
        <Display locked={this.props.locked} closed={this.props.closed} />
        <Controls
          locked={this.props.locked}
          closed={this.props.closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </Fragment>
    );
  }

  toggleLocked = () => {
    //this.setState(prev => ({ locked: !prev.locked }));
    this.props.dispatch({ type: "TOGGLE_LOCKED" });
  };

  toggleClosed = () => {
    //this.setState(prev => ({ closed: !prev.closed }));
    this.props.dispatch({ type: "TOGGLE_CLOSED" });
  };
}

//export default Dashboard;

export default connect(state => ({
  locked: state.locked,
  closed: state.closed
}))(Dashboard);
