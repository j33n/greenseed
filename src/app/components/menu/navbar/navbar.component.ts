import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menuItems: string[];

  constructor() {
    this.menuItems = ['Plant Library', 'Growth Simulator', 'Growth Timeline'];
  }

  ngOnInit(): void {}
}
