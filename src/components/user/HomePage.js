import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const Auth = useAuth();
  const user = Auth.getUser();
  const { userLogout } = useAuth();
  console.log(user);

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLogout();
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1>{t('welcome')} {user.name}!</h1>
        <h4>{t('details_msg')}:</h4>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment>
            <h3>{t('name')}: {user.name}</h3>
            <h3>{t('username')}: {user.username}</h3>
            <h3>{t('role')}: {user.role}</h3>
            {user && user.role === 'MANAGER' && (
              <div style={{marginTop: 40, marginBottom: 20}}>
                <Link to="/restricted" style={{fontSize: 20}}>{t('restricted_link')}</Link>
              </div>
            )}
          </Segment>
          <Button color='pink' fluid size='large'>{t('logout')}</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default HomePage