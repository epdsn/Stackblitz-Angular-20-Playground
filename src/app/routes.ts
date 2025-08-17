import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ReadonlyAndConsts } from "./readonly-and-consts/readonly-and-consts";

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
    }    
];

export default routeConfig;

