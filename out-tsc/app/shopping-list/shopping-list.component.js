var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingListService } from "./shopping-list.service";
export var ShoppingListComponent = (function () {
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.items = [];
        this.selectedItem = null;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.items = this.shoppingListService.getItems();
    };
    ShoppingListComponent.prototype.onSelectItem = function (item) {
        this.selectedItem = item;
    };
    ShoppingListComponent.prototype.onCleared = function () {
        this.selectedItem = null;
    };
    ShoppingListComponent = __decorate([
        Component({
            selector: 'rb-shopping-list',
            templateUrl: './shopping-list.component.html'
        }), 
        __metadata('design:paramtypes', [ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
//# sourceMappingURL=C:/Develop/AngularPractice/recipe-book/src/app/shopping-list/shopping-list.component.js.map