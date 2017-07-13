import React from 'react';
import {
	Timeline
} from 'antd';

class Info extends React.Component {

	render() {
		return (
			<div style={{margin: '0 auto', width: '40%'}} >
			  <Timeline>
			    <Timeline.Item color="green">博客创立 2017-06-08</Timeline.Item>
			    <Timeline.Item color="green">技术选型 react + redux + express 2017-06-15</Timeline.Item>
			    <Timeline.Item color="red">
			      <p>UI框架替换 antd-design 2017-07-12</p>
			    </Timeline.Item>
			  </Timeline>
            </div>
		)
	}
}

module.exports = Info;