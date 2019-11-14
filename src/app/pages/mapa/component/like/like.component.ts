import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  like: boolean;
  currentRate = 4.14;

  constructor() { }

  ngOnInit() {
  }

}
