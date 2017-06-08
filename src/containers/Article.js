import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  //绑定dispatch和action
import actions from '../actions/action';

import Catalog from '../components/Catalog/Catalog.js';
import SearchBar from '../components/SearchBar/SearchBar.js';

import  '../assets/styles/Article.less';


class Article extends React.Component {

    componentDidMount() {
        this.props.actions.getArticleList();
    }

    render() {
        const {articleData} = this.props;

        return (
            <div className="warpper" >
                <div>
                    <SearchBar/>
                </div>
                <div>
                    <Catalog articleData={articleData}></Catalog>
                </div>
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
