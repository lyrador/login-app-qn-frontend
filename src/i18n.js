import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "login": "Login",
          "logout": "Logout",
          "username": "Username",
          "password": "Password",
          "username_password_error": "The username or password provided are incorrect!",
          "role": "Role",
          "name": "Name",
          "details_msg": "Here are your details",
          "restricted_link": "Visit Restricted Page",
          "restricted_page_msg": "THIS IS RESTRICTED PAGE",
          "back": "Back"
        }
      },
      zh: {
        translation: {
          "welcome": "欢迎",
          "login": "登录",
          "logout": "登出",
          "username": "用户名",
          "password": "密码",
          "username_password_error": "提供的用户名或密码不正确！",
          "role": "角色",
          "name": "姓名",
          "details_msg": "这是您的详细信息",
          "restricted_link": "访问受限页面",
          "restricted_page_msg": "这是受限页面",
          "back": "回去"
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;