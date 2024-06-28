/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import theme from '@/theme';
import { View, Text, Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '@/types/navigation';
import { google_icon, speech_bubble } from 'public/assets/images/icons/login';
import CustomCarousel from '@/components/CustomCarousel';
import Web3Auth, {
  OPENLOGIN_NETWORK,
  LOGIN_PROVIDER,
  ChainNamespace,
} from '@web3auth/react-native-sdk';
import * as WebBrowser from '@toruslabs/react-native-web-browser';
import EncryptedStorage from 'react-native-encrypted-storage';

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const scheme = 'web3auth';
  const redirectUrl = `${scheme}://openlogin`;

  const clientId =
    'BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ';

  const chainConfig = {
    chainNamespace: ChainNamespace.EIP155,
    chainId: '0xaa36a7',
    rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
    // Avoid using public rpcTarget in production.
    // Use services like Infura, Quicknode etc
    displayName: 'Ethereum Sepolia Testnet',
    blockExplorerUrl: 'https://sepolia.etherscan.io',
    ticker: 'ETH',
    tickerName: 'Ethereum',
    decimals: 18,
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  };

  const web3auth = new Web3Auth(WebBrowser, EncryptedStorage, {
    clientId,
    network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET, // or other networks
    redirectUrl,
    useCoreKitKey: true,
    loginConfig: {
      google: {
        verifier: 'aggregate-sapphire',
        verifierSubIdentifier: 'w3a-google',
        typeOfLogin: 'google',
        clientId:
          '519228911939-cri01h55lsjbsia1k7ll6qpalrus75ps.apps.googleusercontent.com',
      },
      auth0emailpasswordless: {
        verifier: 'aggregate-sapphire',
        verifierSubIdentifier: 'w3a-a0-email-passwordless',
        typeOfLogin: 'jwt',
        clientId: 'QiEf8qZ9IoasbZsbHvjKZku4LdnRC1Ct',
        jwtParameters: {
          domain: 'https://web3auth.au.auth0.com',
          // this corresponds to the field inside jwt which must be used to uniquely
          // identify the user. This is mapped b/w google and email passwordless logins of Auth0
          verifierIdField: 'email',
          isVerifierIdCaseSensitive: false,
        },
      },
      auth0github: {
        verifier: 'aggregate-sapphire',
        verifierSubIdentifier: 'w3a-a0-github',
        typeOfLogin: 'jwt',
        clientId: 'hiLqaop0amgzCC0AXo4w0rrG9abuJTdu',
        jwtParameters: {
          domain: 'https://web3auth.au.auth0.com',
          // this corresponds to the field inside jwt which must be used to uniquely
          // identify the user. This is mapped b/w google and github logins
          verifierIdField: 'email',
          isVerifierIdCaseSensitive: false,
        },
      },
    },
  });
  const handleGoogleLoginBtn = () => {
    navigation.replace('Nickname');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.c2e_blue_01,
        flexDirection: 'column',
      }}>
      <CustomCarousel />

      <View
        style={{
          marginHorizontal: 30,
        }}>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8.5,
          }}>
          <Image source={speech_bubble} resizeMode="contain" />
          <Text
            style={{
              fontWeight: 800,
              fontSize: 14,
              position: 'absolute',
              paddingBottom: 6,
              color: theme.colors.c2e_white_01,
            }}>
            회원가입하고 10P 받기!
          </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <CustomButton
            shadow
            onPress={handleGoogleLoginBtn}
            text="구글로 로그인하기"
            startIcon={google_icon}
            fullWidth
            backgroundColor={theme.colors.disableButton}
            color={theme.colors.c2e_gray_01}
            fontWeight={700}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
