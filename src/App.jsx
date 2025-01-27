import React from 'react'
import MainLayout from './components/layouts/MainLayout'
import { Button } from '@mui/material'
import Header from './components/ui/Header'

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Button variant='contained' color='primary'>کلیک کن</Button>
    </MainLayout>

  )
}

export default App
