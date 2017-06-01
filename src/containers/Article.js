import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';
import Catalog from '../components/Catalog/Catalog.js';


class Article extends React.Component {

    

    componentWillMount() {
        const { actions } = this.props;
        actions.getArticleList();
    }

    render() {
         console.log(this.props)

        return (
            <div style={{textAlign:'center'}}>
                <span>文章页</span>
                <Catalog></Catalog>
            </div>
/*            <div className="sideNav" style={this.props.style}>
                <ul id={this.props.id} className={this.props.className}>

                </ul>
                <div style={{display : hideState ? "none" : "block"}} >
                    <div style={{textAlign:'center'}}>
                        <a href="" target="new">111</a>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <a href="" target="new">333</a>
                    </div>
                </div>
                <div style={{textAlign:'center',fontSize: "20px",marginTop:"10px"}}>
                    <a href="javascript:void(0);">
                        <span className={hideState?"glyphicon glyphicon-circle-arrow-right":"glyphicon glyphicon-circle-arrow-left"}></span>
                    </a>
                </div>
            </div>*/
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
