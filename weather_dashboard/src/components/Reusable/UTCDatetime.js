import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '500',
        fontSize: { xs: '10px', sm: '12px', md:'16px' },
        color: 'rgba(15,0,131,1)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {utcFullDate} 
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;
