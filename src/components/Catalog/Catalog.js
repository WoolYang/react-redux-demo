import React from 'react';

import { Link } from 'react-router-dom';

import  './Catalog.less';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
var icon = require('../../assets/images/icon.jpg');

class Catalog extends React.Component {

    render() {
    	const {articleData} = this.props;
        return (  
        	<List className="detail" >
        	{
        		articleData.result.map(function(item,index){
		        	return (  
                        <Link to={`/detail/${item._id}`} key={index} >
    		        		<ListItem 
                                secondaryText={
                                    <p>{item.secondaryText}</p>
                                }
                                leftAvatar={
                                    <Avatar
                                      icon={<Avatar src={icon} />}
                                      size={30}
                                    />
                                }
                            >
                            {item.title}</ListItem>
                        </Link>
		       		)

		        })
        	}
        	</List>
       	)
    }
}

module.exports = Catalog;
