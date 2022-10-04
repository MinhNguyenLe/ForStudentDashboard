import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/Users/settings/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import CRUDPost from '@/content/CRUDPost';

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
                    <CRUDPost />
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
