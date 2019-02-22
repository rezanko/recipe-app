import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../../DataModels/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('ingNameInput') ingNameInput: ElementRef;
  @ViewChild('ingAmountInput') ingAmountInput: ElementRef;

  @Output() onAddIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    if(this.ingNameInput.nativeElement.value && this.ingAmountInput.nativeElement.value){
      this.onAddIngredient.emit(new Ingredient(this.ingNameInput.nativeElement.value, this.ingAmountInput.nativeElement.value));
    }
  }

}
