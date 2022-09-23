import {
    Box,
    CardMedia,
    Typography,
    Card,
    CardHeader,
    Divider,
    Avatar,
    IconButton,
    Button,
    CardActions,
    Link
} from '@mui/material';
import { styled } from '@mui/material/styles';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import Text from '@/components/Text';

const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);

function PostItem() {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar src="/static/images/avatars/5.jpg" />}
                action={
                    <IconButton color="primary">
                        <MoreHorizTwoToneIcon fontSize="medium" />
                    </IconButton>
                }
                titleTypographyProps={{ variant: 'h4' }}
                subheaderTypographyProps={{ variant: 'subtitle2' }}
                title="Username is ..."
                subheader={
                    <>
                        Enterprise name,{' '}
                        <Link
                            href="@/content/Management/Users/settings/PostItem#"
                            underline="hover"
                        >
                            #Job_title
                        </Link>
                        ,{' '}
                        <Link
                            href="@/content/Management/Users/settings/PostItem#"
                            underline="hover"
                        >
                            #Job_name
                        </Link>
                        , Address is ...
                    </>
                }
            />
            <Box px={3} pb={2}>
                <Typography variant="h4" fontWeight="normal">
                    Description ...
                </Typography>
            </Box>
            <CardMedia
                sx={{ minHeight: 280 }}
                image="/static/images/placeholders/covers/6.jpg"
                title="Card Cover"
            />
            <Box p={3}>
                <Typography variant="h2" sx={{ pb: 1 }}>
                    Job's name
                </Typography>
                <Typography variant="subtitle2">
                    <Link
                        href="@/content/Management/Users/settings/PostItem#"
                        underline="hover"
                    >
                        Location job
                    </Link>{' '}
                    • District 2 • District 3 • District 4
                </Typography>
                <Typography variant="subtitle2">
                    <Link
                        href="@/content/Management/Users/settings/PostItem#"
                        underline="hover"
                    >
                        Address
                    </Link>{' '}
                    • 11/8 Ton Duc Thang Street • 11/8 Ton Duc Thang Street •
                    11/8 Ton Duc Thang Street • 11/8 Ton Duc Thang Street
                </Typography>
                <Typography variant="subtitle2">
                    <Link
                        href="@/content/Management/Users/settings/PostItem#"
                        underline="hover"
                    >
                        Shift
                    </Link>{' '}
                    • From 12:00 to 18:00 • From 12:00 to 18:00 • From 12:00 to
                    18:00
                </Typography>
                <Typography variant="subtitle2">
                    <Link
                        href="@/content/Management/Users/settings/PostItem#"
                        underline="hover"
                    >
                        Contact me
                    </Link>{' '}
                    • Zalo: 0919 188 756 • Phone: 0919 188 756 • Facebook:
                    http://localhost:3005/feature-v1/crud-posts
                </Typography>
                <Typography variant="subtitle2">
                    <Link
                        href="@/content/Management/Users/settings/PostItem#"
                        underline="hover"
                    >
                        Count
                    </Link>{' '}
                    • 5 members
                </Typography>
            </Box>
            <Divider />
            <CardActionsWrapper
                sx={{
                    display: { xs: 'block', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <Button
                        startIcon={<CommentTwoToneIcon />}
                        variant="outlined"
                    >
                        Comment
                    </Button>
                </Box>
                <Box sx={{ mt: { xs: 2, md: 0 } }}>
                    <Typography variant="subtitle2" component="span">
                        <Text color="black">
                            <b>Opening</b>
                        </Text>{' '}
                        •{' '}
                        <Text color="black">
                            <b>63</b>
                        </Text>{' '}
                        comments
                    </Typography>
                </Box>
            </CardActionsWrapper>
        </Card>
    );
}

export default PostItem;
