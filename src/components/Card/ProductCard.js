import { Card } from '@mui/material'
import React from 'react'

const ProductCard = ({image, name, title, bid}) => {
  return (
    <Card sx={{border:'1px solid #D0D5DD', borderRadius:'12px', padding:'12px'}}>
    <div>
    <img src='/assets/laptop.svg'/>
    </div>
    
    </Card>
  )
}

export default ProductCard