import React from 'react';

import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import actions from '../actions/action';

import '../assets/styles/articleDetail.less';

class ArticleDetail extends React.Component {

    componentDidMount() {
        let searchKey = this.props.location.query._id;
        this.props.actions.getArticleDetailById(searchKey);
    }

    render() {
        const {
            articleData
        } = this.props;
        return (
            <div className="ctn-warpper" >
            {
                articleData.result.map(function(item,index){
                    return ( 
                        <div key={index} dangerouslySetInnerHTML={{__html:item.content}} /> 
                    )

                })
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);