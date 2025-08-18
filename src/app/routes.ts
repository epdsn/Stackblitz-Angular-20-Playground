import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ReadonlyAndConsts } from "./readonly-and-conts/readonly-and-conts.component";
import { RxjsExamplesComponent } from "./rxjs-examples/rxjs-examples.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'readonly-and-consts',
        component: ReadonlyAndConsts,
        title: 'Readonly and Conts'
    },
    {
        path: 'rxjs-examples',
        component: RxjsExamplesComponent,
        title: 'Rxjs Examples'
    }
];

export default routeConfig;

