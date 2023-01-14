import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<any>>;
    myAsyncTask: () => Promise<{ readonly status: string }>;
};

export const MyCustomDialog: React.FC<Props>  = ({ open, setOpen, myAsyncTask }) => { 


    // const [open, setOpen] = useState(false);

    return <Dialog aria-labelledby='My Dialog' open={open} onClose={() => setOpen(false)}>
        <DialogTitle>My dialog</DialogTitle>
        <DialogContent>
            <DialogContentText>{`Do you agree on the terms?`}</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>No</Button>
            <Button onClick={async () => { await myAsyncTask(); setOpen(false); }}>Yes</Button>
        </DialogActions>

    </Dialog>;
}