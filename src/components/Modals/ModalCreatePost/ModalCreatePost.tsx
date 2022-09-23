import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import FormCreatePost from '@/components/Forms/FormCreatePost/FormCreatePost';
import ButtonCreatePost from './ButtonCreatePost';
import { Divider } from '@mui/material';
import fetcher from '@/utils/fetcher';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCreatePost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    // Test fetcher successful
    fetcher({prefix:"/api/posts/get-all",method: "GET"}).then((r)=> console.log(r)).catch(e => console.log(e))
  };

  return (
    <div>
      <ButtonCreatePost onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Create post okay</DialogTitle>
        <Divider />
        <DialogContent>
          <FormCreatePost />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
