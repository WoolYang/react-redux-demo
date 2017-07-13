import React from 'react';

import {
    Card,
    Tag
} from 'antd';

var icon = require('../assets/images/icon.jpg');

class Catalog extends React.Component {

    render() {

        return (
            <Card className='panel' noHovering='false'>
                <p>文章分类</p>
                <Tag color="pink-inverse">css</Tag>
                <Tag color="red-inverse">react</Tag>
                <Tag color="orange-inverse">vue</Tag>
                <Tag color="green-inverse">jquery</Tag>
                <Tag color="cyan-inverse">typescript</Tag>
                <Tag color="blue-inverse">设计模式</Tag>
                <Tag color="purple-inverse">算法</Tag>
            </Card>
        )
    }
}

module.exports = Catalog;