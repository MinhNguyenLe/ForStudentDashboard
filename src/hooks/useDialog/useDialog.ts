import { useState } from 'react';

export interface UseDialogReturn {
  open: boolean;
  onOpenDialog: () => void;
  onCloseDialog: () => void;
}

const useDialog = (defaultOpen: boolean = false): UseDialogReturn => {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  const onOpenDialog = () => {
    setOpen(true);
  };

  const onCloseDialog = () => {
    setOpen(false);
  };

  return {
    open,
    onOpenDialog,
    onCloseDialog
  };
};

export default useDialog;
