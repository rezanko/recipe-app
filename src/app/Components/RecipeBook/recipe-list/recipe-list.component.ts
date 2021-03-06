import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../DataModels/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output() selectRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
      new Recipe('Beef Steak', 'Delicious roasted beef, with sweet sauce', 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?cs=srgb&dl=asparagus-barbecue-bbq-675951.jpg'),
      new Recipe('Chicken Cream Soup', 'Awesome chicken soup', 'https://c.pxhere.com/photos/b3/8b/chicken_soup_chicken_soup_food_cuisine_lunch_meal_dinner-1192444.jpg!d'),
      new Recipe('Strawberry Cheesecake', 'Sweet cheesecake with strawberry jam', 'https://stmed.net/sites/default/files/banana-split-wallpapers-28206-9670388.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(selectedRecipe: Recipe ){
      this.selectRecipe.emit(selectedRecipe);
  }

}
