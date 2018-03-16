import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(
    private e: ElementRef
  ) { }

  ngOnInit() {
    const adminJS = document.createElement('script');
    adminJS.type = 'text/javascript';
    adminJS.src = '../assets/js/admin.js';
    this.e.nativeElement.appendChild(adminJS);
  }

}
