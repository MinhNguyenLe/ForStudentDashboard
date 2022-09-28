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
import {
  PostAndHashtag,
  Posts,
  SalaryInformation,
  TimeWorking,
  WorkLocation
} from '@prisma/client';
import LineInPostContent from '../LineInPostContent';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);

export type PostFromResponse = Posts & {
  time_working: TimeWorking[];
  salary_information: SalaryInformation[];
  work_locations: WorkLocation[];
  postAndHashtag: PostAndHashtag[];
};

export interface PostItemProps {
  post: PostFromResponse;
}

function PostItem({ post }: PostItemProps) {
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
      <CardMedia
        sx={{ minHeight: 280 }}
        image="/static/images/placeholders/covers/6.jpg"
        title="Card Cover"
      />
      <Box p={3}>
        <Typography variant="h2" sx={{ pb: 1 }}>
          {post.job_name}
        </Typography>
        <LineInPostContent
          title="Time working"
          contents={(() => post.time_working.map((item) => item.content))()}
        />
        <LineInPostContent
          title="Work locations"
          contents={(() => post.work_locations.map((item) => item.content))()}
        />
        <LineInPostContent
          title="Salary information"
          contents={(() =>
            post.salary_information.map((item) => item.content))()}
        />
        <LineInPostContent title="Count of member" contents={[post.quantity]} />
        <LineInPostContent title="Contact me" contents={[]} />
        <LineInPostContent title="Job's requirement" contents={[]} />
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
          <Button startIcon={<CommentTwoToneIcon />} variant="outlined">
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
