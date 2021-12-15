import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Copyright() {
  return (
    <Box mt={8} mb={4}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Template Internetdagi Open Source Proektlaridan olindi'}
        <Link color='inherit' href='https://t.me/BegzatKidirbaev'> @KIDIRBAEV </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
