import * as React from 'react';
import FormCreatePost from '@/content/CRUDPost/FormCreatePost';
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

export interface HookFormCreatePost {
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
    jobName: yup.string().required(),
    workLocations: yup.array().of(yup.string()).required(),
    timeWorking: yup.array().of(yup.string()).required()
  })
  .required();

const defaultValues = {
  jobName: '',
  workLocations: [''],
  timeWorking: ['']
};

export type TestName = 'jobName' | 'workLocations' | 'timeWorking';

export default function ModalCreatePost() {
  const { open, onCloseDialog, onOpenDialog } = UseDialog(false);

  const methodCreatePost = useForm<HookFormCreatePost>({
    resolver: yupResolver(schema),
    defaultValues
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    getValues
  } = methodCreatePost;

  const onSubmitPost = () => {
    console.log('submitting', getValues());

    // Test fetcher successful
    // reUseFetcher({ prefix: '/api/posts/get-all', method: 'GET' })
    //   .then((r) => console.log(r))
    //   .catch((e) => console.log(e));
  };

  return (
    <HookFormProvider
      methods={methodCreatePost}
      // formProps={{ onSubmit: handleSubmit(onSubmitPost) }}
      onSubmit={handleSubmit(onSubmitPost)}
    >
      <ButtonCreatePost onClick={onOpenDialog} />
      <SDialog
        titleContent="Create post okay"
        onCloseAtHeader={() => {}}
        open={open}
        onCloseDialog={() => {
          onCloseDialog();
          console.log('submitting', getValues());
        }}
        isSubmitting={isSubmitting}
      >
        <FormCreatePost />
      </SDialog>
    </HookFormProvider>
  );
}
