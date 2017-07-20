'use strict';

let actions = {

    getArticleList: () => { //获取文章列表
        return (dispatch) => {
            fetch('/api/getArticleList')
                .then(response => response.json())
                .then(json => dispatch(actions.receiveArticleList(json)))
        }
    },

    receiveArticleList: (json) => ({ //接收文章列表
        type: 'RECEIVE_ARTICLE_LIST',
        json
    }),

    getArticleListByTag: (tag) => { //标签获取文章列表
        return (dispatch) => {
            fetch('/api/getArticleListByTag?tag=' + tag)
                .then(response => response.json())
                .then(json => dispatch(actions.receiveArticleList(json)))
        }
    },

    receiveArticleListByTag: (json) => ({ //标签接收文章列表
        type: 'RECEIVE_ARTICLE_LIST_TAG',
        json
    }),

    getArticleDetailById: (id) => { //获取文章内容
        return (dispatch) => {
            fetch('/api/getArticleDetailById?id=' + id)
                .then(response => response.json())
                .then(json => dispatch(actions.receiveArticleDetailById(json)))
        }
    },

    receiveArticleDetailById: (json) => ({ //接收文章内容
        type: 'RECEIVE_ARTICLE_DETAIL',
        json
    })
};

export default actions;