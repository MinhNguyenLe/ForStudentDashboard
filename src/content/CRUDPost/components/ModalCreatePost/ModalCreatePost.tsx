import * as React from 'react';
import FormCreatePost from '@/content/CRUDPost/components/FormCreatePost';
import ButtonCreatePost from './ButtonCreatePost';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import RHookFormProvider from '@/components/ComponentBase/RHookFormProvider';

import useDialog from '@/hooks/useReUseDialog';

import {
  Posts,
  // StatusPost,
  TimeWorking,
  SalaryInformation,
  WorkLocation
  // User,
  // Hashtag
  // Contact
} from '@prisma/client';
import RDialog from '@/components/ComponentBase/RDialog';
import { createPost } from '../../api';

export interface HookFormCreatePost {
  jobName: Posts['job_name'];
  jobRequirement?: Posts['job_requirement'];
  quantity?: Posts['quantity'];
  timeWorking?: TimeWorking['content'];
  salaryInformation?: SalaryInformation['content'];
  workLocations?: WorkLocation['content'];
  // hashtags?: Array<Hashtag['content']>;
}

const schema = yup
  .object()
  .shape({
    jobName: yup.string().required()
  })
  .required();

const defaultValues: HookFormCreatePost = {
  jobName: '',
  jobRequirement: '',
  quantity: '',
  timeWorking: '',
  salaryInformation: '',
  workLocations: ''
};

export type ListFieldsName = keyof typeof defaultValues;

export default function ModalCreatePost() {
  const { open, onCloseDialog, onOpenDialog } = useDialog(false);

  const methodCreatePost = useForm<HookFormCreatePost>({
    resolver: yupResolver(schema),
    defaultValues
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methodCreatePost;

  async function onSubmitPost(data: HookFormCreatePost) {
    onCloseDialog();

    const newPost = await createPost(data);

    console.log(newPost);
  }

  return (
    <RHookFormProvider
      methods={methodCreatePost}
      onFormSubmit={handleSubmit(onSubmitPost)}
    >
      <ButtonCreatePost onClick={onOpenDialog} />
      <RDialog
        titleContent="Create post"
        onCloseAtHeader={() => {}} // make sure always show icon close at header
        open={open}
        onCloseDialog={onCloseDialog}
        isSubmitting={isSubmitting}
      >
        <FormCreatePost />
      </RDialog>
    </RHookFormProvider>
  );
}
