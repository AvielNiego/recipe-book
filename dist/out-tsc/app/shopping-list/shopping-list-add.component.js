var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";
export var ShoppingListAddComponent = (function () {
    function ShoppingListAddComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.cleared = new EventEmitter();
        this.isAdd = true;
    }
    ShoppingListAddComponent.prototype.ngOnChanges = function (changes) {
        this.isAdd = changes.item.currentValue === null;
    };
    ShoppingListAddComponent.prototype.onSubmit = function (ingredient) {
        if (!this.isAdd)
            this.editItem(ingredient);
        else
            this.addItem(ingredient);
    };
    ShoppingListAddComponent.prototype.editItem = function (ingredient) {
        this.shoppingListService.editItem(this.item, ingredient);
        this.onClear();
    };
    ShoppingListAddComponent.prototype.addItem = function (ingredient) {
        this.item = new Ingredient(ingredient.name, ingredient.amount);
        this.shoppingListService.addItem(this.item);
    };
    ShoppingListAddComponent.prototype.onDelete = function () {
        this.shoppingListService.deleteItem(this.item);
        this.onClear();
    };
    ShoppingListAddComponent.prototype.onClear = function () {
        this.isAdd = true;
        this.cleared.emit(null);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Ingredient)
    ], ShoppingListAddComponent.prototype, "item", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ShoppingListAddComponent.prototype, "cleared", void 0);
    ShoppingListAddComponent = __decorate([
        Component({
            selector: 'rb-shopping-list-add',
            templateUrl: './shopping-list-add.component.html'
        }), 
        __metadata('design:paramtypes', [ShoppingListService])
    ], ShoppingListAddComponent);
    return ShoppingListAddComponent;
}());
//# sourceMappingURL=C:/Develop/AngularPractice/recipe-book/src/app/shopping-list/shopping-list-add.component.js.map