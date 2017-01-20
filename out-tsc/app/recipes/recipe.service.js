var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../shared/ingredient";
import { Headers, Http } from "@angular/http";
import 'rxjs/Rx';
export var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesChanged = new EventEmitter();
        this.recipes = [
            new Recipe('Schnitzel', 'Very tasty', 'http://universalpoultry.com.au/wp-content/uploads/2014/07/universalpoultry-chicken-thigh-schnitzel-s.jpg', [
                new Ingredient('French Fries', 2),
                new Ingredient('Chicken Brest', 1)
            ]),
            new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.recipes[id];
    };
    RecipeService.prototype.deleteRecipe = function (recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    };
    RecipeService.prototype.addRecipe = function (newRecipe) {
        this.recipes.push(newRecipe);
    };
    RecipeService.prototype.editRecipe = function (oldRecipe, newRecipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    };
    RecipeService.prototype.storeData = function () {
        var body = JSON.stringify(this.recipes);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://recipebook-e9540.firebaseio.com/recipes.json', body, { headers: headers });
    };
    RecipeService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('https://recipebook-e9540.firebaseio.com/recipes.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.recipes = data;
            _this.recipesChanged.emit(_this.recipes);
        });
    };
    RecipeService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], RecipeService);
    return RecipeService;
}());
//# sourceMappingURL=C:/Develop/AngularPractice/recipe-book/src/app/recipes/recipe.service.js.map