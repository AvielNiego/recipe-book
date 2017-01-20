"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var recipe_1 = require("../recipe");
var forms_1 = require("@angular/forms");
var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, recipeService, formBuilder, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.recipe = null;
        this.isNew = true;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.recipeIndex = +params['id'];
                _this.isNew = false;
                _this.recipe = _this.recipeService.getRecipe(_this.recipeIndex);
                _this.initEditForm();
            }
            else {
                _this.isNew = true;
                _this.initNewForm();
            }
        });
    };
    RecipeEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeEditComponent.prototype.initNewForm = function () {
        this.initForm(new recipe_1.Recipe('', '', '', []));
    };
    RecipeEditComponent.prototype.initEditForm = function () {
        this.initForm(this.recipe);
    };
    RecipeEditComponent.prototype.initForm = function (recipe) {
        this.recipeForm = this.formBuilder.group({
            name: [recipe.name, forms_1.Validators.required],
            imagePath: [recipe.imagePath, forms_1.Validators.required],
            description: [recipe.description, forms_1.Validators.required],
            ingredients: new forms_1.FormArray(recipe.ingredients.map(function (i) { return new forms_1.FormGroup({
                name: new forms_1.FormControl(i.name, [forms_1.Validators.required]),
                amount: new forms_1.FormControl(i.amount, [forms_1.Validators.required, forms_1.Validators.pattern('\\d+')])
            }); }))
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        var newRecipe = this.recipeForm.value;
        if (this.isNew) {
            this.recipeService.addRecipe(newRecipe);
        }
        else {
            this.recipeService.editRecipe(this.recipe, newRecipe);
        }
        this.navigateBack();
    };
    RecipeEditComponent.prototype.onCancel = function () {
        0;
        this.navigateBack();
    };
    RecipeEditComponent.prototype.onRemoveItem = function (index) {
        this.recipeForm.controls['ingredients'].removeAt(index);
    };
    RecipeEditComponent.prototype.onAddItem = function (name, amount) {
        this.recipeForm.controls['ingredients'].push(new forms_1.FormGroup({
            name: new forms_1.FormControl(name, [forms_1.Validators.required]),
            amount: new forms_1.FormControl(amount, [forms_1.Validators.required, forms_1.Validators.pattern('\\d+')])
        }));
    };
    RecipeEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'rb-recipe-edit',
            templateUrl: './recipe-edit.component.html',
            styles: []
        })
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;
