import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {SimpleComponent} from "./simple.component";
import {SampleComponent} from "./sample.component";

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <h1>Angular 2 Kitchensink (Beta)</h1>
  <a [routerLink]="['SimpleComponent']">Simple</a>&nbsp;|&nbsp;
  <a [routerLink]="['SampleComponent']">Sample</a>
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path:'/simple-component', name:'SimpleComponent', component: SimpleComponent, useAsDefault: true},
  {path:'/sample-component', name:'SampleComponent', component: SampleComponent},
])
export class AppComponent {

}
