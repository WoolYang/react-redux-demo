import React from 'react';

import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux'; //绑定dispatch和action
import actions from '../actions/action';

import {
    Row,
    Col,
    Card,
    AutoComplete
} from 'antd';
import Catalog from '../components/Catalog.js';
import TagPanel from '../components/TagPanel.js';

import '../assets/styles/article.less';


class Article extends React.Component {

    componentDidMount() {
        this.props.actions.getArticleList();
    }

    render() {
        const {
            articleData
        } = this.props;

        const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

        return (
            <Row gutter={16}>
                <Col xs={24} md={18} >
                    <Catalog articleData={articleData}></Catalog>
                </Col>
                <Col xs={0} md={6} >
                    <Card className='panel' noHovering='false' >
                        <p>文章搜索</p>
                        <AutoComplete
                          style={{ width: '100%' }}
                          dataSource={dataSource}
                          placeholder="try to type `b`"
                          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Card>
                    <TagPanel></TagPanel>
                    <Card className='panel' noHovering='false' >
                        <p>文章归档</p>
                        <p>2017-10-10</p>
                        <p>2017-10-10</p>
                        <p>2017-10-10</p>
                        <p>2017-10-10</p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    articleData: state.articleData
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);