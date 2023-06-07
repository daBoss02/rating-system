import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import Button from './components/Button';
import { useState } from 'react';
import './style/index.css';


function App() {
  const [openDialog, setOpenDialog] = useState(false);

  function Click() {
    setOpenDialog(!openDialog);
    console.log(openDialog);
  }

  return (
    <main className='container'>
      <StarRating />
      <Dialog 
        class={openDialog ? "show" : "hidden"}
        open={openDialog} 
        click={Click}
      />
      <Button 
        click={Click}
        text={openDialog ? "Close Dialog" : "Open Dialog"}
      />
    </main>
  );
}

export default App;
