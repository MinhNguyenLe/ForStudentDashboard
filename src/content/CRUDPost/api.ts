import reUseFetcher from '@/utils/fetcher';
import { HookFormCreatePost } from './components/ModalCreatePost';

export async function createPost(data: HookFormCreatePost) {
  try {
    const posts = await reUseFetcher<HookFormCreatePost>({
      prefix: '/api/posts/create',
      method: 'POST',
      data
    });

    return posts;
  } catch (e) {
    console.log(e);
  }
}

export async function getPosts() {
  try {
    const posts = await reUseFetcher({
      prefix: '/api/posts/get-all',
      method: 'GET'
    });

    return posts;
  } catch (e) {
    console.log(e);
  }
}
