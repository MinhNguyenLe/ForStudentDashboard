import { Grid, Box, Button, TextField, styled } from '@mui/material';
import Link from 'next/link';
import { Text } from 'src/components';
import React from 'react';
import { Stack } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-formControl': {
    borderRadius: '5px'
  }
});
const Login = () => {
  return (
    <Grid container height="100vh" width="100vw">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className="login__paper" minWidth="400px" height="500px">
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            bgcolor="#ddd"
            height="100%"
            p={4}
          >
            <Stack sx={{ width: '100%' }}>
              <h1 style={{ textAlign: 'center' }}>Welcome Back!</h1>

              <CustomTextField
                variant="outlined"
                label="Email address"
                name="email"
                required
                margin="normal"
                //   helperText={errors.email?.message}
                //   inputRef={register({
                //     required: getMess('M01', 'Email address'),
                //     pattern: {
                //       value: patternEmail,
                //       message: getMess('M05')
                //     }
                //   })}
              />
              <CustomTextField
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                margin="dense"
                required
                //   helperText={errors.password?.message}
                //   inputRef={register({
                //     required: getMess('M01', 'Password')
                //   })}
                //   notRightLabel
              />
              <Box right={0} textAlign="end">
                <Link className="forgot-password-link" href="/forgotpassword">
                  <Text color="info">Forgot password?</Text>
                </Link>
              </Box>
            </Stack>

            <Stack
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                // type="submit"
                classes="button-login"
                disableElevation
                sx={{
                  borderRadius: '5px',
                  mb: '10px'
                }}
              >
                <Text>Continued</Text>
              </Button>
              <Box className="register-link">
                Don&apos;t have an account?&nbsp;
                <Link href="/signup">
                  <Text color="info">Sign up</Text>
                </Link>
              </Box>
            </Stack>
          </Grid>
          {/* <p className="error-text">{apiError}</p>, */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
