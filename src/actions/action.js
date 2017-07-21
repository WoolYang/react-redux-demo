'use strict';

/*let actions = {

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
    }),

    getArticleTag: () => { //获取文章标签
        return (dispatch) => {
            fetch('/api/getArticleTag')
                .then(response => response.json())
                .then(json => dispatch(actions.receiveArticleTag(json)))
        }
    },

    receiveArticleTag: (json) => ({ //接收文章标签
        type: 'RECEIVE_ARTICLE_TAG',
        json
    })

};

export default actions;*/

export const getArticleList = () => { //获取文章列表
    return (dispatch) => {
        fetch('/api/getArticleList')
            .then(response => response.json())
            .then(json => dispatch(receiveArticleList(json)))
    }
}

export const receiveArticleList = (json) => ({ //接收文章列表
    type: 'RECEIVE_ARTICLE_LIST',
    json
})

export const getArticleListByTag = (tag) => { //标签获取文章列表
    return (dispatch) => {
        fetch('/api/getArticleListByTag?tag=' + tag)
            .then(response => response.json())
            .then(json => dispatch(receiveArticleList(json)))
    }
}

export const receiveArticleListByTag = (json) => ({ //标签接收文章列表
    type: 'RECEIVE_ARTICLE_LIST_TAG',
    json
})

export const getArticleDetailById = (id) => { //获取文章内容
    return (dispatch) => {
        fetch('/api/getArticleDetailById?id=' + id)
            .then(response => response.json())
            .then(json => dispatch(receiveArticleDetailById(json)))
    }
}

export const receiveArticleDetailById = (json) => ({ //接收文章内容
    type: 'RECEIVE_ARTICLE_DETAIL',
    json
})

export const getArticleTag = () => { //获取文章标签
    return (dispatch) => {
        fetch('/api/getArticleTag')
            .then(response => response.json())
            .then(json => dispatch(receiveArticleTag(json)))
    }
}

export const receiveArticleTag = (json) => ({ //接收文章标签
    type: 'RECEIVE_ARTICLE_TAG',
    json
})