import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../../DataModels/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
      new Ingredient('Flour', 2),
      new Ingredient('Cheese', 5),
      new Ingredient('Strawberry', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

  addToShopList(ing: Ingredient){
      this.ingredients.push(ing);
  }

}
