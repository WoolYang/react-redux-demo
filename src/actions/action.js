'use strict';

let actions = {

    openMenu: (text) => ({   //打开关闭菜单
        type: 'OPEN_MENU',
        text
    }),

    getArticleList: () => {
        return function(dispatch,getState){
        	fetch('/data/test.json')
		    .then(response => response.json())
		    .then(json => dispatch(receiveArticleList(json)))
        }
    },

    receiveArticleList: (json) => {
    	 type: 'RECEIVE_ARTICLE_LIST',
    	 json
    }


};

export default actions;