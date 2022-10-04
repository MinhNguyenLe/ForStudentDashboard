import reUseFetcher from '@/utils/fetcher';
import { RequestBodyCreatePost } from 'utils/types';

export async function createPost(data: RequestBodyCreatePost) {
    try {
        const posts = await reUseFetcher<RequestBodyCreatePost>({
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
