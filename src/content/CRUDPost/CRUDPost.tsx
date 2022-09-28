import { Grid } from '@mui/material';
import ModalCreatePost from '@/content/CRUDPost/components/ModalCreatePost';
import PostItem from '@/content/CRUDPost/components/PostItem';
import { useEffect, useState } from 'react';
import { getPosts } from './api';

const CRUDPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsFromServer = await getPosts();
      setPosts(postsFromServer.posts);
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <ModalCreatePost />
      </Grid>
      {!posts?.length
        ? 'Loading ...'
        : posts.map((post, index) => (
            <Grid key={`${index}${post.id}`} item xs={12}>
              <PostItem post={post} />
            </Grid>
          ))}
    </>
  );
};

export default CRUDPost;
