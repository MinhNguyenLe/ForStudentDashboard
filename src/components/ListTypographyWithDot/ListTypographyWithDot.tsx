import { dotList } from '@/utils/constants';
import Typography from '@mui/material/Typography';

const ListTypographyWithDot = (contents: string[]) => {
  return (
    <>
      {contents.map((content,index) => (
        <Typography key={content + index} mr="4px">{dotList + content}</Typography>
      ))}
    </>
  );
};

export default ListTypographyWithDot;
