import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';


class Article extends React.Component {

    render() {
          const { menu, actions } = this.props;

        return (
            <div style={{textAlign:'center'}}>
                <span>项目页</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
//module.exports = Article;
