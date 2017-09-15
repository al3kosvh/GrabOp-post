import { Pipe, PipeTransform } from '@angular/core';
import { VOPost } from '../models/vos';

@Pipe({
    name: 'postsFilter',
    pure: false
})
export class PostsFilterPipe implements PipeTransform {

    transform(posts: VOPost[], filterParam?: string): any {
        if (!posts || !filterParam) {
            return posts;
        }

        if (filterParam == "need") {
            return posts.filter(post => {
                if (post.type == "need") return post;
            });
        }

        if (filterParam == "offer") {
            return posts.filter(function (post) {
                if (post.type == "offer") return post;
            });
        }

    }

}
