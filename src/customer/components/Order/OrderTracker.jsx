import React from 'react'
import Stepper from '@mui/material/Stepper';
import { StepLabel,Step } from '@mui/material';
const steps=[
    "Placed",
    "Order confirmed",
    "Shipped",
    "Out for delivery",
    "Delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=><Step>
                <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker