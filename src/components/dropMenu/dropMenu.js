import React from 'react';

import './dropMenu.less';

class DropMenu extends React.Component {

  render() {

      let { toggle, isMain, batchPrintState } = this.props;

      return (
        <div className="dropdown-list" style={{display : toggle ? "block" : "none"}}>
            <ul className="drop-menu">
                <li className="text-left" style={{display : isMain ? "block" : "none"}}>
                    <span className="mgr6"></span>
                    <a href="javascript:;"> 333</a>
                </li>
                <li className="divider"></li>
                <li className="text-left" style={{display : isMain ? "block" : "none"}}>
                    <span className="mgr6"></span>
                      <a href="javascript:;"> 222</a>
                </li>
                <li className="text-left" style={{display : batchPrintState ? "block" : "none"}}>
                    <span className="mgr6"></span>
                    <a href="javascript:;"> 111</a>
                </li>
                <li className="divider"></li>
                <li className="text-left">
                    <span className="mgr6"></span>
                    <a href="javascript:;"> 退出</a>
                </li>
            </ul>
        </div>
      )
  }
}

module.exports = DropMenu;
