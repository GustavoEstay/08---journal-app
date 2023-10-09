
import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display:'flex'}}>

        {/* NavBar */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* SideBar */}

        <Box component='main'
        sx={{flexGrow: 1, p: 3
        }}
        >

            {/* toolbar */}

            { children }
        </Box>

    </Box>
  )
}

