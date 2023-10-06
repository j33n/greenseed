import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.scss'],
})
export class NotificationBadgeComponent implements OnInit {
  public unreadNotifications: number;

  constructor() {
    this.unreadNotifications = 5;
  }

  ngOnInit(): void {
    
  }
}
