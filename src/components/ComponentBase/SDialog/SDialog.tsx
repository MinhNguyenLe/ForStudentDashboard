import { PropsWithChildren, Ref, ReactElement, forwardRef } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { UseDialogReturn } from '@/hooks/useDialog';
import {
  DialogTitle,
  Typography,
  IconButton,
  Divider,
  DialogContent
} from '@mui/material';
import Box from '@mui/system/Box';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface SDialogProps
  extends DialogProps,
    Pick<UseDialogReturn, 'open' | 'onCloseDialog'> {
  isSubmitting?: boolean;
  onCloseAtHeader?: () => void;
}

export default function SDialog({
  children,
  open,
  onCloseDialog,
  isSubmitting = false,
  onCloseAtHeader
}: PropsWithChildren<SDialogProps>) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onCloseDialog}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flex={1}>
            <Typography>Create post okay</Typography>
          </Box>
          {onCloseAtHeader ? (
            <IconButton
              aria-label="close"
              onClick={() => {
                onCloseAtHeader();
                onCloseDialog();
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
      <Divider />
      <DialogActions>
        <Button type="submit" onClick={onCloseDialog}>
          {isSubmitting ? 'Saving' : 'Save'}
        </Button>
        <Button onClick={onCloseDialog}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
