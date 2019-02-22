import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ShoppingListComponent } from './Components/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './Components/RecipeBook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/RecipeBook/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './Components/RecipeBook/recipe-item/recipe-item.component';
import { RecipesComponent } from './Components/RecipeBook/recipes/recipes.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
