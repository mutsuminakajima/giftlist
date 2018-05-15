import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsComponent } from "./gifts/gifts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import {Person} from "./person";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path:'dashboard',component: DashboardComponent },
    { path:'gifts', component: GiftsComponent },
    { path:'detail/:id', component: PersonDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {

}
