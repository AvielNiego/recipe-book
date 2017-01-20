import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  private recipe: Recipe = null;
  private isNew = true;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.recipeIndex = +params['id'];
          this.isNew = false;
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          this.initEditForm()
        }
        else {
          this.isNew = true;
          this.initNewForm();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initNewForm() {
    this.initForm(new Recipe('', '', '', []));
  }

  private initEditForm() {
    this.initForm(this.recipe);
  }

  private initForm(recipe: Recipe) {
    this.recipeForm = this.formBuilder.group({
      name: [recipe.name, Validators.required],
      imagePath: [recipe.imagePath, Validators.required],
      description: [recipe.description, Validators.required],
      ingredients: new FormArray(recipe.ingredients.map((i) => new FormGroup({
          name: new FormControl(i.name, [Validators.required]),
          amount: new FormControl(i.amount, [Validators.required, Validators.pattern('\\d+')])
        })
      ))
    })
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {0
    this.navigateBack();
  }

  onRemoveItem (index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  onAddItem(name: string, amount: string) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, [Validators.required]),
        amount: new FormControl(amount, [Validators.required, Validators.pattern('\\d+')])
      })
    );
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

}
