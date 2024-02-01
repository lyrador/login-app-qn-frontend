import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { useTranslation } from 'react-i18next';

function RestrictedPage() {
  const Auth = useAuth();
  const user = Auth.getUser();
  const navigate = useNavigate();

  const { t } = useTranslation();

  if (user.role !== 'MANAGER') {
    return <Navigate to='/home' />
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 style={{ color: "red"}}>{t('restricted_page_msg')}</h1>
        <button onClick={() => navigate(-1)}>{t('back')}</button>
      </Grid.Column>
    </Grid>
  )
}

export default RestrictedPage;