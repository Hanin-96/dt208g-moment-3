import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculateComponent } from './calculate/calculate.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'calculate', component: CalculateComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '404', component: NotfoundComponent},
    {path: '**', component: NotfoundComponent}
];
