import { useAppDispatch, useAppSelector } from '@/store/hook';
import Box from '@mui/material/Box';
import { selectPost } from '../../postSlice';
import LineInPostContent, {
  LineInPostContentProps
} from '../LineInPostContent';

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
    name: 'workLocations'
  }
  // {
  //   label: 'Time working',
  //   title: 'Time working',
  //   inFormCreate: true,
  //   name: 'timeWorking'
  // }
];

export default function FormCreatePost() {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPost);
  
  console.log(post,"----")

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
