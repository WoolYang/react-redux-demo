import React from 'react';

import { Link } from 'react-router-dom'

import  './NavigationMenu.less';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
//import {List, ListItem, makeSelectable} from 'material-ui/List';

//const SelectableList = makeSelectable(List);

class NavigationMenu extends React.Component {

    render() {
        const {headerData, actions} = this.props;

        return (
        <Drawer className="menu-item" docked={false} 
                width={200} 
                open={headerData.open} 
                onRequestChange={actions.openMenu.bind(this, !headerData.open)} 
        >
            <Subheader>目录</Subheader>
            <MenuItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/">主页</Link></MenuItem>
            <MenuItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/blog/article">文章</Link></MenuItem>
            <MenuItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/blog/project">项目</Link></MenuItem>
            <MenuItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/blog/info">关于</Link></MenuItem>
        </Drawer>
        )
    }
}

module.exports = NavigationMenu;
