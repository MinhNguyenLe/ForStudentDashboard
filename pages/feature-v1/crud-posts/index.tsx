import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/Users/settings/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import ModalCreatePost from '@/components/Modals/ModalCreatePost';
import PostItem from '@/content/PostItem';

function ManagementUserSettings() {
  return (
    <>
      <Head>
        <title>Header is ... - Applications</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <ModalCreatePost />
          </Grid>
          <Grid item xs={12}>
            <PostItem />
          </Grid>
          <Grid item xs={12}>
            <PostItem />
          </Grid>
          <Grid item xs={12}>
            <PostItem />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ManagementUserSettings.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserSettings;
