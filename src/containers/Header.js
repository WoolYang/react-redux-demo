import React from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';

import './header.less';

class Header extends React.Component {

    render() {

     // const { header, actions  } = this.props;
      //const { domain,  _user_name, toggle , isMain} = header;

        return (
            <div className="navbar">
                <div className="navbar-header">
                      <ul>
                        <li><Link to="/">Header</Link></li>
                        <li><Link to="/article">Article</Link></li>
                        <li><Link to="/info">Info</Link></li>
                      </ul>
                </div>
            {/*    <div className="pull-right pull-right-style" onClick={actions.headerAction.bind(this, !toggle)} >
                    <span className="navbar-text">
                        欢迎，{_user_name}！
                        <i className="glyphicon glyphicon-triangle-bottom" style={{top: "2px"}}></i>
                    </span>
                </div>
                <DropMenu
                  toggle={toggle}
                  isMain={isMain}
                />  */}
            </div>
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
