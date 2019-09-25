import { Component, OnInit } from '@angular/core';

// import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  private isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  disbaleNewHeader() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onBtnToggleMenuClick() { 
    console.log("Retorno!")
    this.isMenuOpen = !this.isMenuOpen;
  
  }
  // dashMode() {
  //   if (screenfull.enabled) {
  //     screenfull.toggle();
  //     this.showHeader = !this.showHeader;
  //   }
  // }
}

