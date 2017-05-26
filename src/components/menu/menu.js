import React from 'react';

import './menu.less';

class Menu extends React.Component {

    render() {
        const { menu, actions } = this.props;
        const { hideState } = menu;

        return (
            <div className="sideNav" style={this.props.style}>
                <ul id={this.props.id} className={this.props.className}>

                </ul>
                <div style={{display : hideState ? "none" : "block"}} >
                    <div style={{textAlign:'center'}}>
                        <a href="" target="new">111</a>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <a href="" target="new">333</a>
                    </div>
                </div>
                <div style={{textAlign:'center',fontSize: "20px",marginTop:"10px"}}>
                    <a href="javascript:void(0);">
                        <span className={hideState?"glyphicon glyphicon-circle-arrow-right":"glyphicon glyphicon-circle-arrow-left"}></span>
                    </a>
                </div>
            </div>
        )
    }
}

module.exports = Menu;
