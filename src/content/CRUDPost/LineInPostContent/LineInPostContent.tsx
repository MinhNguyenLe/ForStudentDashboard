import ListTypographyWithDot, {
  ListTypographyWithDotProps
} from '@/components/ListTypographyWithDot';
import { Box, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { HookFormCreatePost, TestName } from '../ModalCreatePost';

export interface LineInPostContentProps {
  contents?: ListTypographyWithDotProps['contents'];
  inFormCreate?: boolean;
  title: string;
  isMultipleLine?: boolean;
  label: string;
  name?: TestName;
}

const LineInPostContent = ({
  title,
  inFormCreate = false,
  isMultipleLine = false,
  contents = [],
  label,
  name,
  ...props
}: LineInPostContentProps) => {
  const { setValue } = useFormContext<HookFormCreatePost>();

  const renderTextField = () => {
    if (inFormCreate) {
      if (isMultipleLine) {
        return (
          <TextField
            name={name}
            multiline
            size="small"
            label={label}
            fullWidth
            onChange={(e) => setValue(name, e.target.value)}
          />
        );
      }

      return (
        <TextField
          name={name}
          size="small"
          label={label}
          fullWidth
          onChange={(e) => setValue(name, e.target.value)}
        />
      );
    }

    return null;
  };

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Typography variant="subtitle2" pr="16px" color="primary" noWrap>
          {title}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" width="100%">
        {renderTextField()}
        {isMultipleLine ? null : (
          <Box display="flex" mt="8px" flexWrap="wrap">
            <ListTypographyWithDot contents={contents} {...props} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LineInPostContent;
