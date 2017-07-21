import React from 'react';

import {
    Card,
    Tag
} from 'antd';

var icon = require('../assets/images/icon.jpg');

class TagPanel extends React.Component {

    render() {

        const colorList = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
        const tagSet = new Set();
        const {
            data,
            name,
            handleClick
        } = this.props;

        data.forEach(item => tagSet.add(item.tag));


        return (
            <Card className='panel' noHovering='false'>
                <p>{name}</p>
                {this.props.show && <Tag color="blue-inverse"  onClick={handleClick.bind(this, 'all')}>全部</Tag>}
                {
                    Array.from(tagSet).map(function(item, index) {
                        return (
                            <Tag color={`${colorList[index]}-inverse`}  onClick={handleClick.bind(this, item)}>{item}</Tag>
                        )

                    })
                }
            </Card>
        )
    }
}

TagPanel.defaultProps = {
    data: [],
    handleClick: function() {},
    name: '文章分类',
    show: true
}

module.exports = TagPanel;

/*<Card className='panel' noHovering='false'>
<p>文章分类</p>
<Tag color="pink-inverse">css</Tag>
<Tag color="red-inverse">react</Tag>
<Tag color="orange-inverse">vue</Tag>
<Tag color="green-inverse">jquery</Tag>
<Tag color="cyan-inverse">typescript</Tag>
<Tag color="blue-inverse">设计模式</Tag>
<Tag color="purple-inverse">算法</Tag>
</Card>*/