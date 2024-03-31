import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
title="HIiii";
  ngOnInit() {
    // Wait for 2 seconds before navigating to the categories page
    setTimeout(() => {
      this.title="";
      this.router.navigate(['/categories']);
    }, 2000);
  }
}
