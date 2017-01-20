export var ShoppingListService = (function () {
    function ShoppingListService() {
        this.items = [];
    }
    ShoppingListService.prototype.getItems = function () {
        return this.items;
    };
    ShoppingListService.prototype.addItems = function (items) {
        Array.prototype.push.apply(this.items, items);
    };
    ShoppingListService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingListService.prototype.editItem = function (oldItem, newItem) {
        this.items[this.items.indexOf(oldItem)] = newItem;
    };
    ShoppingListService.prototype.deleteItem = function (ingredient) {
        this.items.splice(this.items.indexOf(ingredient), 1);
    };
    return ShoppingListService;
}());
//# sourceMappingURL=C:/Develop/AngularPractice/recipe-book/src/app/shopping-list/shopping-list.service.js.map