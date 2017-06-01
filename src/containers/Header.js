import React from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';

import AppBar from 'material-ui/AppBar';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu.js';

class Header extends React.Component {
 
    render() {

        const { headerData, actions  } = this.props;

        return (
          <div>
            <AppBar onLeftIconButtonTouchTap={actions.openMenu.bind(this, !headerData.open) } />
            <NavigationMenu {...this.props} />
          </div>
/*            <div className="">
                <ul>
                  <li><Link to="/blog/article">Article</Link></li>
                  <li><Link to="/blog/info">Info</Link></li>
                  <li><Link to="/blog/project">Project</Link></li>
                </ul>
            </div>*/
            /*    <div className="pull-right pull-right-style" onClick={actions.headerAction.bind(this, !toggle)} >
                    <span className="navbar-text">
                        欢迎，{_user_name}！
                        <i className="glyphicon glyphicon-triangle-bottom" style={{top: "2px"}}></i>
                    </span>
                </div>
                <DropMenu
                  toggle={toggle}
                  isMain={isMain}
                />  */
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
