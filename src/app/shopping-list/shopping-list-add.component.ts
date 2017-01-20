import {Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnChanges(changes) {
    this.isAdd = changes.item.currentValue === null
  }

  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd)
      this.editItem(ingredient);
    else
      this.addItem(ingredient);
  }

  private editItem(ingredient: Ingredient) {
    this.shoppingListService.editItem(this.item, ingredient)
    this.onClear();
  }

  private addItem(ingredient: Ingredient) {
    this.item = new Ingredient(ingredient.name, ingredient.amount);
    this.shoppingListService.addItem(this.item);
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
