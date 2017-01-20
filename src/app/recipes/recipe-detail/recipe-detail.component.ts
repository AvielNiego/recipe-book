import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private selectedRecipe: Recipe;
  private recipeIndex: number = 1;
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipeService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => this.onParamsChange(params["id"])
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private onParamsChange(id: number) {
    this.recipeIndex = id;
    this.selectedRecipe = this.recipesService.getRecipe(id);
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
}
