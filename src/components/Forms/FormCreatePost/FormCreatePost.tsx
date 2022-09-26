import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormCreatePost() {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, minWidth: '25ch' }
      }}
    >
      <Box display="flex" alignItems="center">
        <Box>
          <Typography variant="subtitle2" pr="16px" color="primary" noWrap>
            Location job
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <TextField size="small" label="Outlined" fullWidth />
          <Box display="flex" mt="8px" flexWrap="wrap">
            <Typography mr="4px">• District 2</Typography>
            <Typography mr="4px">• District 3</Typography>
            <Typography mr="4px">• District 4</Typography>
            <Typography mr="4px">• District 2</Typography>
            <Typography mr="4px">• District 3</Typography>
            <Typography mr="4px">• District 4</Typography>
            <Typography mr="4px">• District 2</Typography>
            <Typography mr="4px">• District 3</Typography>
            <Typography mr="4px">• District 4</Typography>
            <Typography mr="4px">• District 2</Typography>
            <Typography mr="4px">• District 3</Typography>
            <Typography mr="4px">• District 4</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
