var Article = require("./articleSchema.js");

/*function insert() {
 
    var article = new Article({
        _id : '5',                
        title: '列表5----数据来自mongodb',                          
        secondary: 'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?',                          
        avatar : 'muidocs-icon-communication-voicemail'                    
    });

    article.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

insert();*/

function getArticleList(callback) {
    return Article.find().exec(callback);
}

function getArticleListByTag(tag, callback) {
    return Article.find({
        tag: tag
    }).exec(callback);
}

function getArticleDetailById(id, callback) {
    return Article.find({
        _id: id
    }).exec(callback);
}

module.exports = {
    getArticleList,
    getArticleDetailById,
    getArticleListByTag
};