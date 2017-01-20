var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { RecipeService } from "./recipes/recipe.service";
export var HeaderComponent = (function () {
    function HeaderComponent(recipeService) {
        this.recipeService = recipeService;
    }
    HeaderComponent.prototype.onStore = function () {
        this.recipeService.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    HeaderComponent.prototype.onFetch = function () {
        this.recipeService.fetchData();
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'rb-header',
            templateUrl: './header.component.html'
        }), 
        __metadata('design:paramtypes', [RecipeService])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Develop/AngularPractice/recipe-book/src/app/header.component.js.map