import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



export const ROUTES: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
