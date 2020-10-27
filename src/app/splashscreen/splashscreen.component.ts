import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss']
})
export class SplashscreenComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => this.router.navigate(['/home']), 2000)
  }
}
