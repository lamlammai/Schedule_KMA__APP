import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Images} from 'src/assets/images';
import {isTablet, JWT_KEY} from 'src/base/common/Constants';
import Styles from 'src/base/common/Styles';
import {debug} from 'src/base/utils/DebugUtil';
import Helper from 'src/base/utils/helper';
import {notifyInvalid} from 'src/base/utils/Utils';
import {Block, Image, Spinner, Text} from 'src/components';
import AuthService from 'src/domain/auth.service';
import {
  DRAWER_STACK,
  FORGET_PASSWORD_SCREEN,
  HOME_TAB_NAVIGATOR,
  REGISTER_SCREEN,
} from 'src/navigation/screen';
import {setAccount} from 'src/redux/slices/accountSlice';
import styles from 'src/screens/auth/login/login.style';
import Color from 'src/theme/Color';

import InputComponent from '../components/InputComponent';

const LoginScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const dispatch = useDispatch();

  const handleRegister = () => navigation.navigate(REGISTER_SCREEN);
  const handleForgetPass = () => navigation.navigate(FORGET_PASSWORD_SCREEN);

  const handleLogin = async () => {
    try {
      if (!username) {
        throw t('NOT_ENTER_EMAIL');
      }
      if (!password) {
        throw t('NOT_ENTER_PASSWORD');
      }
      // setLoading(true);
      navigation.navigate(HOME_TAB_NAVIGATOR);
      // const authService = new AuthService();
      // const {data} = await authService.login(username, password);
      // debug('asdf55>>>', data);
      // if (data.access_token) {
      //   data.access_token && Helper.storeData(JWT_KEY, data.access_token);
      //   const infoUser = await authService.getInfoUser();
      //   setLoading(false);
      //   infoUser.data.message === '+OK' &&
      //     dispatch(setAccount(infoUser.data.data));
      //   navigation.navigate(isTablet ? DRAWER_STACK : DRAWER_STACK);
      // } else {
      //   throw t('LOGIN_FAIL');
      // }
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      {isTablet && (
        <Image
          source={Images.IMG_BACKGROUND_LOGIN}
          style={styles.backgroundLogin}
        />
      )}
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            marginTop={isTablet ? 0 : 20}
            row
            alignSelf="center"
            style={styles.blockLogo}>
            <Image source={Images.IMG_LOGO} style={styles.logoLogin} />
            <View style={{display: 'flex'}}>
              <Text style={styles.textTitle}>
                Schedule <Text style={styles.textEdu}>KMA</Text>
              </Text>
            </View>
          </Block>
          <Block alignCenter marginTop={isTablet ? 0 : 20}>
            <Text style={styles.textTitleLogin}>{t('LOGIN')}</Text>
            <Block row alignCenter>
              <Text style={styles.textNoAccount}>{t('NOT_ACCOUNT')}</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={handleRegister}>
                <Text style={styles.textRegister}>{t('REGISTER')}</Text>
              </TouchableOpacity>
            </Block>
          </Block>
          <Block marginHorizontal={30} marginTop={isTablet ? 30 : 60}>
            <InputComponent
              marginBottom={25}
              title={t('CODE_LOGIN')}
              placeholder={t('ENTER_CODE')}
              value={username}
              onChangeText={setUsername}
            />
            <InputComponent
              title={t('PASSWORD')}
              secureTextEntry
              placeholder={t('ENTER_PASSWORD')}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.btnForget}
              onPress={handleForgetPass}
              activeOpacity={0.5}>
              <Text style={styles.textForgetPassword}>
                {t('FORGET_PASSWORD')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={handleLogin}
              activeOpacity={0.5}>
              <Text style={styles.textLogin}>{t('LOGIN')}</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.GREEN} />
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
