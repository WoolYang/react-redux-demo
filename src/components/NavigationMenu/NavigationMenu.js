import React from 'react';

import { Link } from 'react-router-dom'

import  './NavigationMenu.less';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';

import {List, ListItem, makeSelectable} from 'material-ui/List';
const SelectableList = makeSelectable(List);

class NavigationMenu extends React.Component {

    render() {
        const drawer = {
            paddingTop: "3%"
        }

        const {headerData, actions} = this.props;

        return (
        <Drawer className="menu-item"
                containerStyle={drawer} 
                docked={false} 
                width={200} 
                open={headerData.open} 
                onRequestChange={actions.openMenu.bind(this, !headerData.open)} 
        >
            <Subheader>目录</Subheader>
            <ListItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/">主页</Link></ListItem>
            <ListItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/article">文章</Link></ListItem>
            <ListItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/project">项目</Link></ListItem>
            <ListItem onClick={actions.openMenu.bind(this, !headerData.open)} ><Link to="/info">关于</Link></ListItem>
        </Drawer>
        )
    }
}

module.exports = NavigationMenu;
