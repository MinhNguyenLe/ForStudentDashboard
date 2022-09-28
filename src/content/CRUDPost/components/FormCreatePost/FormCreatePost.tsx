import { useAppSelector, useAppDispatch } from '@/store/hook';
import Box from '@mui/material/Box';
import { selectPost, setWorkLocations } from '@/content/CRUDPost/postSlice';
import LineInPostContent, {
  LineInPostContentProps
} from '../LineInPostContent';
import { useFormContext } from 'react-hook-form';
import { HookFormCreatePost } from '../ModalCreatePost';

export default function FormCreatePost() {
  const post = useAppSelector(selectPost);
  const dispatch = useAppDispatch();

  const { getValues, reset } = useFormContext<HookFormCreatePost>();

  const formDataSkeleton: LineInPostContentProps[] = [
    {
      label: "Description for job's name",
      isMultipleLine: true,
      title: "Job's name",
      inFormCreate: true,
      name: 'jobName'
    },
    {
      label: 'Work locations',
      title: 'Work locations',
      inFormCreate: true,
      name: 'workLocations',
      contents: post.formCreate.workLocations,
      onKeyEnter: () => {
        console.log(getValues('workLocations'));

        dispatch(setWorkLocations(getValues('workLocations').trim()));
        reset({
          workLocations: ''
        });
      }
    }
    // {
    //   label: 'Time working',
    //   title: 'Time working',
    //   inFormCreate: true,
    //   name: 'timeWorking'
    // }
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
