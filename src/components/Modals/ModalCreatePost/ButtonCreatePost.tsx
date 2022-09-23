import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    Button,
    ButtonProps
} from '@mui/material';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

function ButtonCreatePost(props: ButtonProps) {
    return (
        <>
            {/*Use Card for flexible when need to content */}
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
                    // title="Hello TienBip"
                    subheader={
                        <Button variant="outlined" {...props}>
                            Hey, write post now?
                        </Button>
                    }
                />
            </Card>
        </>
    );
}

export default ButtonCreatePost;
