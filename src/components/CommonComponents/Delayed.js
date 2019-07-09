import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimmer, Loader
  } from 'semantic-ui-react'

class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? 
        <Dimmer active inverted>
            <Loader inverted content='Loading' />
        </Dimmer>
        
        : this.props.children;
    }
}

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired
};

export default Delayed;