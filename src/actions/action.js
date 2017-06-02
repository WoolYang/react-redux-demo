'use strict';

let actions = {

    openMenu: (text) => ({   //打开关闭菜单
        type: 'OPEN_MENU',
        text
    }),

    getArticleList: (dispatch) => {  //获取文章列表
        return (dispatch) => {
        	fetch('/data/test.json')
		    .then(response => response.json())
		    .then(json => dispatch(actions.receiveArticleList(json)))
        }
    },

    receiveArticleList: (json) => ({  //接收文章列表
    	 type: 'RECEIVE_ARTICLE_LIST',
    	 json
    })


};

export default actions;