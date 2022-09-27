import { useState } from 'react';

export interface UseReUseDialogReturn {
  open: boolean;
  onOpenDialog: () => void;
  onCloseDialog: () => void;
}

const useReUseDialog = (defaultOpen: boolean = false): UseReUseDialogReturn => {
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

export default useReUseDialog;
