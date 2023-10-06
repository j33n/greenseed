import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  public username: string;

  constructor() {
    this.username = 'Guest';
  }

  ngOnInit(): void {}
}
