import React from 'react';

import  './Catalog.less';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
//import {List, ListItem, makeSelectable} from 'material-ui/List';

//const SelectableList = makeSelectable(List);

class Catalog extends React.Component {

    render() {
    	const {articleData} = this.props;

        return (  
        	<ul>
        	{
        		articleData.result.map(function(item,index){
		        	return (  
		        		<li key={index} >{item._id}</li>
		       		)

		        })
        	}
        	</ul>
       	)
    }
}

module.exports = Catalog;
