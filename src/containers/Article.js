import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  //绑定dispatch和action
import actions from '../actions/action';
import Catalog from '../components/Catalog/Catalog.js';


class Article extends React.Component {

    

    componentDidMount() {
        this.props.actions.getArticleList();
    }

    render() {
        const {articleData} = this.props;

        return (
            <div style={{textAlign:'center'}}>
                <span>文章页</span>
                <Catalog articleData={articleData}></Catalog>
            </div>
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
//module.exports = Article;
