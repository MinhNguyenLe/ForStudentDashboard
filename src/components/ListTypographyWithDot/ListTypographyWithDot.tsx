import { dotList } from '@/utils/constants';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface ListTypographyWithDotProps extends TypographyProps {
    contents: string[];
}

const ListTypographyWithDot = ({
    contents,
    ...props
}: ListTypographyWithDotProps) => {
    return (
        <>
            {contents.map((content, index) => (
                <Typography
                    key={content + index}
                    mr="4px"
                    variant="subtitle2"
                    {...props}
                >
                    {dotList + content}
                </Typography>
            ))}
        </>
    );
};

export default ListTypographyWithDot;
