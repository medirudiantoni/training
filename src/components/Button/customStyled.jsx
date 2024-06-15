import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CusButton = styled(Button)(({}) => ({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  letterSpacing: '0px',
  textTransform: 'none',
  borderRadius: 4,
}));


export default CusButton;
