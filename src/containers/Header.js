import React from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';

import AppBar from 'material-ui/AppBar';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu.js';

class Header extends React.Component {



    render() {

       const appbar = {
          /*zIndex: 1400*/
        }
        
        const { headerData, actions  } = this.props;

        return (
          <div>
            <AppBar 
              showMenuIconButton={true}
              onLeftIconButtonTouchTap={actions.openMenu.bind(this, !headerData.open) }
              style={appbar}
              title="wool"
              />
            <NavigationMenu {...this.props} />
          </div>
        )
    }
}

const mapStateToProps = state => ({
    headerData: state.headerData
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
//module.exports = Header;
