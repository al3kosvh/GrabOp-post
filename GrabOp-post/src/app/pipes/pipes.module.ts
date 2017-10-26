import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsFilterPipe } from './posts-filter.pipe';
import { PostsFilterAlliancePipe } from './posts-filter-alliance.pipe';
import { ConnectionFilterPipe } from './connection-filter.pipe';
import { ConnectionSearchPipe } from './connection-search.pipe';
import { PanelMessageFilterPipe } from './panel-message-filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PostsFilterPipe,
        PostsFilterAlliancePipe,
        ConnectionFilterPipe,
        ConnectionSearchPipe,
        PanelMessageFilterPipe
    ],
    exports: [
        PostsFilterPipe,
        PostsFilterAlliancePipe,
        ConnectionFilterPipe,
        ConnectionSearchPipe,
        PanelMessageFilterPipe
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
