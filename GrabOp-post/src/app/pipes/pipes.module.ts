import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsFilterPipe } from './posts-filter.pipe';
import { PostsFilterAlliancePipe } from './posts-filter-alliance.pipe';
import { ConnectionFilterPipe } from './connection-filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PostsFilterPipe,
        PostsFilterAlliancePipe,
        ConnectionFilterPipe
    ],
    exports: [
        PostsFilterPipe,
        PostsFilterAlliancePipe,
        ConnectionFilterPipe
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
