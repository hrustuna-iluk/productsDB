var goodsCollection = new GoodsCollection();
var categoryCollection = new CategoryCollection();
new GoodsView({
    collection: goodsCollection,
    categoryCollection: categoryCollection
}).render()

new CategoriesView({
    collection: categoryCollection
})