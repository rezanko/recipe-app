import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() appName: string;
  @Output() showPage = new EventEmitter<string>();

  currentPage = 'recipes';

  constructor() { }

  ngOnInit() {
    console.log(this.appName);
  }

  onShowPage(page: string){
    this.showPage.emit(page);
  }

}
