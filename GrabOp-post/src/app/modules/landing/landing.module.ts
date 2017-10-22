import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';
import { AccountModule } from '../account/account.module';
import { SearchModule } from '../search/search.module';

//App Components
//import { SignUpConfirmLauncherComponent } from '../account/components/signup/confirm/launcher/signup-confirm-launcher.component';
import { SignUpConfirmComponent } from '../account/components/signup/confirm/signup-confirm.component';

//Module Components
import { LandingComponent } from "./components/landing/landing.component";

const routes: Routes = [
    {
        path: 'guest', component: LandingComponent, children: [
            { path: 'verify-email', component: SignUpConfirmComponent }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild(routes),
        SharedModule,
        PostModule,
        AccountModule,
        SearchModule
    ],
    declarations: [
        LandingComponent
    ]
})
export class LandingModule { }
