import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private e: ElementRef
  ) { }

  ngOnInit() {
    const loginJS = document.createElement('script');
    loginJS.type = 'text/javascript';
    loginJS.src = '../assets/js/sign-in.js';
    this.e.nativeElement.appendChild(loginJS);
  }

}
