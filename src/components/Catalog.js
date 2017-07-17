import React from 'react';

import {
    Link
} from 'react-router-dom';

import {
    Card
} from 'antd';

var icon = require('../assets/images/icon.jpg');

class Catalog extends React.Component {

    render() {
        const {
            articleData
        } = this.props;
        return (
            <div>
        	{
                articleData.result.map(function(item, index) {
                    return (
                        <Link to = {{pathname:`/detail/${item._id}`, query:{_id:item._id}}} key={index}>
                          <Card title={item.title} style={{ width: '100%',marginBottom: '20px'}}>
                            <p>{item.secondary}</p>
                          </Card>
                        </Link>
                    )

                })
        	}
        	</div>
        )
    }
}

module.exports = Catalog;