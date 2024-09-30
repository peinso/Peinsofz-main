import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    <main className='sticky-bottom-right'>
        <div>
        <div class="idea-bubble">
            Leave us a Message!
        </div>
        <Fab className='bottom-right-floating' aria-label="Contact us" href='/contact'>
        <EmailIcon />
        </Fab>
        </div>
    </main>

  );
}