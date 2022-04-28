import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createDocument } from './api';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../recoilState';

export default function CreateDoc(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');


  const token = useRecoilValue(tokenState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    createDocument(name,token, password);
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new Document
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Document Name"
            fullWidth
            variant="standard"
            value={name}
            onInput={e => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Document Password"
            fullWidth
            variant="standard"
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
