const Sequelize = require("sequelize");
const connection = require("../data_base/data_base")
const Category = require("../categories/Category")

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); //uma categoria tem muitos artigos // relacionamento 1 para muitos
Article.belongsTo(Category);// um artigo pertence a uma categoria//relação 1 para 1

module.exports = Article;