import React, { Fragment } from 'react';
import Layout from './Layout';
import Copyright from './Copyright';
import WarningIcon from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
  return (
    <Layout
      title='Xatolik: 404'
      description=':( Sahifa topilmadi'
      className='container-fluid'
    >
      <Typography variant='h3' gutterBottom>
        <WarningIcon style={{ fontSize: 50, color: '#FF7D00' }} /> Kechirasiz, Bu sahifa mavjud emas!
      </Typography>
      <Copyright />
    </Layout>
  );
};

export default NotFound;
