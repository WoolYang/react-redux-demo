import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions/action';

import  './ArticleDetail.less';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

class ArticleDetail extends React.Component {

    componentDidMount() {
        this.props.actions.getArticleDetail();
    }

    render() {
    	const {articleData} = this.props;
        return (  
            <div className="" >
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
//module.exports = ArticleDetail;
