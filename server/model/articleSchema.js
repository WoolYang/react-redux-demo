var mongoose = require('./db.js'),
	Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	_id: {
		type: String
	},
	title: {
		type: String
	},
	secondary: {
		type: String
	},
	avatar: {
		type: String
	},
	content: {
		type: String
	}
});
module.exports = mongoose.model('Article', ArticleSchema);