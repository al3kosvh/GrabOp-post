import { PostsFilterPipe } from './posts-filter.pipe';

describe('PostsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PostsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
