import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsFilterPipe} from './posts-filter.pipe';
import { PostsFilterAlliancePipe } from './posts-filter-alliance.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostsFilterPipe,
    PostsFilterAlliancePipe
  ],
  exports: [
    PostsFilterPipe,
    PostsFilterAlliancePipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: []
    };
  }
}
