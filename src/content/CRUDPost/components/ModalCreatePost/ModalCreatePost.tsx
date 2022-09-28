import * as React from 'react';
import FormCreatePost from '@/content/CRUDPost/components/FormCreatePost';
import ButtonCreatePost from './ButtonCreatePost';
import reUseFetcher from '@/utils/fetcher';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import RHookFormProvider from '@/components/ComponentBase/RHookFormProvider';

import useDialog from '@/hooks/useReUseDialog';

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
import RDialog from '@/components/ComponentBase/RDialog';
import { ErrorMessage } from '@hookform/error-message';

export interface HookFormCreatePost {
  description?: Posts['description'];
  jobName: Posts['job_name'];
  jobRequirement?: Posts['job_requirement'];
  quantity?: Posts['quantity'];
  status?: StatusPost;
  timeWorking?: Array<TimeWorking['content']>;
  salaryInformation?: Array<SalaryInformation['content']>;
  workLocations?: Array<WorkLocation['content']>;
  hashtags?: Array<Hashtag['content']>;
  userId?: User['user_id'];
}

const schema = yup
  .object()
  .shape({
    jobName: yup.string().required()
    // workLocations: yup.array().of(yup.string()).required()
    // timeWorking: yup.array().of(yup.string()).required()
  })
  .required();

const defaultValues: HookFormCreatePost = {
  jobName: ''
  // workLocations: ''
  // timeWorking: ""
};

export type TestName = 'jobName' | 'workLocations' | 'timeWorking';

export default function ModalCreatePost() {
  const { open, onCloseDialog, onOpenDialog } = useDialog(false);

  const methodCreatePost = useForm<HookFormCreatePost>({
    resolver: yupResolver(schema),
    defaultValues
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors }
  } = methodCreatePost;

  const onSubmitPost = (data) => {
    onCloseDialog();

    reUseFetcher({ prefix: '/api/posts/create', method: 'POST', data })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <RHookFormProvider
      methods={methodCreatePost}
      onFormSubmit={handleSubmit(onSubmitPost)}
    >
      <ButtonCreatePost onClick={onOpenDialog} />
      <RDialog
        titleContent="Create post okay"
        onCloseAtHeader={() => {}}
        open={open}
        onCloseDialog={onCloseDialog}
        isSubmitting={isSubmitting}
      >
        <FormCreatePost />
        <ErrorMessage
          errors={errors}
          name="singleErrorInput"
          render={({ message }) => <p>{message}</p>}
        />
      </RDialog>
    </RHookFormProvider>
  );
}
