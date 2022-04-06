import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: SignupComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}