import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Login from '@/components/Login';
function Auth() {
  return <Login />;
}

export default Auth;

Auth.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
