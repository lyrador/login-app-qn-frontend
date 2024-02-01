import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Form, Grid, Segment, Message, Dropdown } from 'semantic-ui-react'
import { useAuth } from '../context/AuthContext'
import { userAPI } from '../misc/UserAPI'
import { handleLogError } from '../misc/Helpers'
import 'semantic-ui-css/semantic.min.css';
import { useTranslation } from 'react-i18next';

function Login() {
  const Auth = useAuth();
  const isLoggedIn = Auth.userIsAuthenticated();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const { t, i18n } = useTranslation();

  const languageOptions = [
    { key: 'en', text: 'English', value: 'en' },
    { key: 'zh', text: '中文', value: 'zh' },
  ];

  const handleLanguageChange = (e, { value }) => {
    i18n.changeLanguage(value);
  };

  const handleInputChange = (e, { name, value }) => {
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(username && password)) {
      setIsError(true);
      return
    }

    try {
      const response = await userAPI.authenticate(username, password);
      const { id, name, role } = response.data;
      const authdata = window.btoa(username + ':' + password);
      const authenticatedUser = { id, name, role, username, authdata };

      Auth.userLogin(authenticatedUser);

      setUsername('');
      setPassword('');
      setIsError(false);
    } catch (error) {
      handleLogError(error);
      setIsError(true);
    }
  }

  if (isLoggedIn) {
    return <Navigate to='/home' />
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1>DXC Login Application</h1>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment >
            <Form.Input
              fluid
              autoFocus
              name='username'
              icon='user'
              iconPosition='left'
              placeholder={t('username')}
              value={username}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              name='password'
              icon='lock'
              iconPosition='left'
              placeholder={t('password')}
              type='password'
              value={password}
              onChange={handleInputChange}
            />
            <Button color='blue' fluid size='large'>{t('login')}</Button>
          </Segment>
        </Form>
        {isError && <Message negative>{t('username_password_error')}</Message>}
        <div style={{ marginTop: 20 }}>
          <Dropdown
            placeholder='Select Language'
            fluid
            selection
            options={languageOptions}
            onChange={handleLanguageChange}
          />
        </div>
      </Grid.Column>
    </Grid>
  )
}

export default Login;