import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }
  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }

}

// Cách 2:

// import { Component } from '@angular/core';
// import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
// import { Title } from '@angular/platform-browser';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute) {
//     router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         const title = this.getTitle(router.routerState, router.routerState.root).join('-');
//         console.log('title ', title);
//         titleService.setTitle(title);
//       }
//     });

//   }

//   getTitle(state, parent) {
//     const data = [];
//     if (parent && parent.snapshot.data && parent.snapshot.data.title) {
//       data.push(parent.snapshot.data.title);
//     }
//     if (state && parent) {
//       data.push(... this.getTitle(state, state.firstChild(parent)));
//     }
//     return data;
//   }
// }
