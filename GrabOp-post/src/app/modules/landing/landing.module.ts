import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

// Components
import { LandingComponent } from "./components/landing/landing.component";

const routes: Routes = [
    { path: 'guest', component: LandingComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        PostModule
    ],
    declarations: [
        LandingComponent
    ]
})
export class LandingModule { }
