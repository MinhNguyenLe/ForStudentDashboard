import * as React from 'react';
import FormCreatePost from '@/components/Forms/FormCreatePost';
import ButtonCreatePost from './ButtonCreatePost';
import reUseFetcher from '@/utils/fetcher';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import HookFormProvider from '@/components/ComponentBase/HookFormProvider';

import UseDialog from '@/hooks/useDialog';

import {
  Posts,
  StatusPost,
  TimeWorking,
  SalaryInformation,
  WorkLocation,
  User,
  Hashtag
  // Contact
} from '@prisma/client';
import SDialog from '@/components/ComponentBase/SDialog';

interface HookFormCreatePost {
  description: Posts['description'];
  jobName: Posts['job_name'];
  jobRequirement?: Posts['job_requirement'];
  quantity?: Posts['quantity'];
  status: StatusPost;
  timeWorking: Array<TimeWorking['content']>;
  salaryInformation: Array<SalaryInformation['content']>;
  workLocations: Array<WorkLocation['content']>;
  hashtags: Array<Hashtag['content']>;
  userId: User['user_id'];
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required()
  })
  .required();

export default function ModalCreatePost() {
  const { open, onCloseDialog, onOpenDialog } = UseDialog(false);

  const methodCreatePost = useForm<HookFormCreatePost>({
    resolver: yupResolver(schema)
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methodCreatePost;

  const onSubmitPost = () => {
    console.log('submitting');

    // Test fetcher successful
    reUseFetcher({ prefix: '/api/posts/get-all', method: 'GET' })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <HookFormProvider
      methods={methodCreatePost}
      {...{ onSubmit: handleSubmit(onSubmitPost) }}
    >
      <ButtonCreatePost onClick={onOpenDialog} />
      <SDialog
        onCloseAtHeader={() => {}}
        open={open}
        onCloseDialog={onCloseDialog}
        isSubmitting={isSubmitting}
      >
        <FormCreatePost />
      </SDialog>
    </HookFormProvider>
  );
}
