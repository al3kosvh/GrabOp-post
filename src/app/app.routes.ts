/**
 * Created by Vlad on 5/14/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
//import {LoginNewComponent} from "app/app-login/login-new/login-new.component";
//import {PostEditComponent} from './post-edit/post-edit.component';

const fallBackRoute: Route = {path: '**', redirectTo: '/guest'};

const routes: Routes = [
  {path: '', redirectTo: '/guest', pathMatch: 'full'},
  {path: 'guest', component: LandingComponent},
  {path: 'guest/:login', component: LandingComponent},
  {path: 'join-us', loadChildren: 'app/app-login/login.module#LoginModule'},
  // {path:'join-us', loadChildren: 'app/app-login/login.module#LoginModule', outlet: 'slideRight'},
//  {path: 'user-edit', loadChildren: 'app/user-edit/user-edit.module#UserEditModule'},
  // {path: 'home',  loadChildren: 'app/home/home.module#HomeModule'},
 // {path:'join-us',component:LoginNewComponent},
 // {path: 'settings',  loadChildren: 'app/settings/settings.module#SettingsModule'},
 //  {path: 'connections',  loadChildren: 'app/connection/connection.module#ConnectionModule'},
 //  {path: 'search-advanced', loadChildren: 'app/search-advanced/search-advanced.module#SearchAdvancedModule'},
 //  {path: 'search-posts', loadChildren: 'app/search-posts/search-post.module#SearchPostModule'},
 // {path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'},

 // {path: 'post-edit', component: PostEditComponent, outlet: 'slideRight'},
  //{path: 'post-edit/:id', component: PostEditComponent, outlet: 'slideRight'},
 // {path: 'post-edit/:id/:type', component: PostEditComponent, outlet: 'slideRight'},

  // {path: 'post-edit', component: PostEditComponent, outlet: 'slideRight', data:{animation:{value:'post-edit'}}},
  // {path: 'post-edit', loadChildren: 'app/post-edit/post-edit.module#PostEditModule'},
  // {path: 'post-edit', loadChildren: 'app/post-edit/post-edit.module#PostEditModule', outlet: 'slideRight'},
  {path: 'posts', loadChildren: 'app/posts/posts.module#PostsModule'},
 // {path: 'opportunity', loadChildren: 'app/opportunity/opportunity.module#OpportunityModule'},
 fallBackRoute
];

// const slideRightRoutes: Routes = [
//   // {path:'join-us', component: LoginNewComponent, outlet: 'slideRight'},
//   // {path:'post-edit', component: PostEditComponent, outlet: 'slideRight'},
//   {path:'join-us', loadChildren: 'app/app-login/login.module#LoginModule', outlet: 'slideRight'},
//   {path:'post-edit', loadChildren: 'app/post-edit/post-edit.module#PostEditModule', outlet: 'slideRight'}
// ];

// const slideRightRoutes: Routes = [
//   {path:'join-us', loadChildren: 'app/app-login/login.module#LoginModule', outlet:'slideRight' ,
//     data: {
//       animation: {
//         value: 'in',
//       }
//     }
//   },
//   {path:'post-edit', loadChildren: 'app/post-edit/post-edit.module#PostEditModule', outlet:'slideRight'}
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(slideRightRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
