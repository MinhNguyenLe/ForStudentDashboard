import { useAppSelector, useAppDispatch } from '@/store/hook';
import Box from '@mui/material/Box';
import {
  selectPostFormCreate,
  setWorkLocations
} from '@/content/CRUDPost/postSlice';
import LineInPostContent, {
  LineInPostContentProps
} from '../LineInPostContent';
import { useFormContext } from 'react-hook-form';
import { HookFormCreatePost, ListFieldsName } from '../ModalCreatePost';

export default function FormCreatePost() {
  const formCreate = useAppSelector(selectPostFormCreate);
  const dispatch = useAppDispatch();

  const { getValues, reset } = useFormContext<HookFormCreatePost>();

  function createCallbackOnEnter(name: ListFieldsName) {
    dispatch(setWorkLocations((getValues(name) as string).trim()));
    reset({
      [name]: ''
    });
  }

  const formDataSkeleton: LineInPostContentProps[] = [
    {
      label: "Description for job's name",
      isMultipleLine: true,
      title: "Job's name",
      inFormCreate: true,
      name: 'jobName'
    },
    {
      label: "Job's requirement",
      isMultipleLine: true,
      title: "Job's requirement",
      inFormCreate: true,
      name: 'jobRequirement'
    },
    {
      label: 'Quantity',
      isMultipleLine: true,
      title: 'Quantity',
      inFormCreate: true,
      name: 'quantity'
    },
    {
      label: 'Work locations',
      title: 'Work locations',
      inFormCreate: true,
      name: 'workLocations',
      contents: formCreate.workLocations,
      onKeyEnter: () => createCallbackOnEnter('workLocations')
    },
    {
      label: 'Time working',
      title: 'Time working',
      inFormCreate: true,
      name: 'timeWorking',
      contents: formCreate.timeWorking,
      onKeyEnter: () => createCallbackOnEnter('timeWorking')
    },
    {
      label: 'Salary Information',
      title: 'Salary Information',
      inFormCreate: true,
      name: 'salaryInformation',
      contents: formCreate.salaryInformation,
      onKeyEnter: () => createCallbackOnEnter('salaryInformation')
    }
  ];

  return (
    <Box
      sx={{
        '& > :not(style)': { minWidth: '25ch' }
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        {formDataSkeleton.map((item, index) => (
          <Box
            mt="8px"
            mb="8px"
            width="100%"
            key={item.label + item.title + index}
          >
            <LineInPostContent {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
