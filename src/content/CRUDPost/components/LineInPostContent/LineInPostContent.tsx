import RTextFieldWithController from '@/components/Input/RTextFieldWithController';
import ListTypographyWithDot, {
  ListTypographyWithDotProps
} from '@/components/ListTypographyWithDot';
import { Box, Typography } from '@mui/material';

export interface LineInPostContentProps {
  contents?: ListTypographyWithDotProps['contents'];
  inFormCreate?: boolean;
  title: string;
  isMultipleLine?: boolean;
  label: string;
  name?: string;
  onKeyEnter?: () => void;
}

const LineInPostContent = ({
  title,
  inFormCreate = false,
  isMultipleLine = false,
  contents = [],
  label,
  name,
  onKeyEnter,
  ...props
}: LineInPostContentProps) => {
  const renderTextField = () => {
    if (inFormCreate) {
      if (isMultipleLine) {
        return (
          <RTextFieldWithController
            name={name}
            multiline
            size="small"
            label={label}
            fullWidth
          />
        );
      }

      return (
        <RTextFieldWithController
          name={name}
          size="small"
          label={label}
          fullWidth
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              onKeyEnter?.();
            }
          }}
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
