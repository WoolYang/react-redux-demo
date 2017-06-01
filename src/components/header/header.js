import React from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';

import AppBar from 'material-ui/AppBar';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';

class Header extends React.Component {

    render() {

     // const { header, actions  } = this.props;
      //const { domain,  _user_name, toggle , isMain} = header;

        return (
          <div>
            <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <NavigationMenu />
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
    header: state.menu
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
//module.exports = Header;
