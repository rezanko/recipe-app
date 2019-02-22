import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appName = 'RecipeApp';

  pageShown: string = 'recipes';

  onPageChange(page: string){
    this.pageShown = page;
  }
}
