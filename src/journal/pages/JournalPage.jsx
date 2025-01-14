
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout';
import NothingSelectedView from '../views/NothingSelectedView';
import NoteView from '../views/NoteView';

export const JournalPage = () => {
  return (
    <>    
    <JournalLayout>

      {/* <NothingSelectedView/> */}

      <NoteView/>
      
    </JournalLayout>
    </>
  )
}

