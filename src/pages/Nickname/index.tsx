/* eslint-disable react-native/no-inline-styles */
// Nickname.tsx
import theme from '@/theme';
import React, { useState, useEffect, useRef } from 'react';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '@/types/navigation';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import BottomSheetComponent from '@/components/BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  handleDismissModalPress,
  handlePresentModalPress,
} from '@/components/BottomSheet/index.utils';
import CustomCheckbox from '@/components/CustomCheckbox';
import { right_arrow_icon } from 'public/assets/images/icons/login';
import { useIsFocused } from '@react-navigation/native';
import { termsOfUseArr, TermOfUse } from './data';
import CustomInput from '@/components/CustomInput';

const Nickname: React.FC = () => {
  const [nickname, setNickname] = useState<string>('');
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleModalPress = handlePresentModalPress(bottomSheetModalRef);
  const handleModalDismiss = handleDismissModalPress(bottomSheetModalRef);

  const navigation = useNavigation<LoginScreenNavigationProp>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardHeight(e.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (nickname.length > 0) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }, [nickname]);

  const handleNextBtn = () => {
    navigation.replace('Password', { type: 'signup' });
  };

  const [termsOfUse, setTermsOfUse] = useState<TermOfUse[]>(termsOfUseArr);

  const handleAllCheck = () => {
    const allChecked = !termsOfUse[0].checked;
    const updatedTerms = termsOfUse.map(term => ({
      ...term,
      checked: allChecked,
    }));
    setTermsOfUse(updatedTerms);
  };

  const handleIndividualCheck = (index: number) => {
    const updatedTerms = termsOfUse.map((term, i) => {
      if (i === index) {
        return { ...term, checked: !term.checked };
      }
      return term;
    });

    // If any of the individual checkboxes are unchecked, uncheck the "전체 동의" checkbox
    if (index !== 0 && termsOfUse[0].checked && !updatedTerms[index].checked) {
      updatedTerms[0].checked = false;
    }

    // If all checkboxes except the first one are checked, check the "전체 동의" checkbox
    const allChecked = updatedTerms.slice(1).every(term => term.checked);
    if (allChecked) {
      updatedTerms[0].checked = true;
    }

    setTermsOfUse(updatedTerms);
  };

  const handleTermsBtn = () => {
    navigation.navigate('TermsAndUse');
    handleModalDismiss();
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      handleModalPress();
    }
  }, [isFocused]);

  const checkAllRequiredTerms = (): boolean => {
    return termsOfUse.filter(term => term.required).every(term => term.checked);
  };

  const handleTermsNextBtn = () => {
    handleModalDismiss();
    setIsButtonVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.c2e_white_01,
        paddingHorizontal: 30,
        paddingTop: 50,
      }}>
      <Text
        style={{
          color: theme.colors.c2e_gray_01,
          fontWeight: '800',
          fontSize: 22,
          lineHeight: 30,
        }}>
        닉네임을
      </Text>
      <Text
        style={{
          color: theme.colors.c2e_gray_01,
          fontWeight: '800',
          fontSize: 22,
          lineHeight: 30,
        }}>
        설정해주세요
      </Text>

      <View style={{ marginTop: 34 }}>
        <CustomInput
          type="underline"
          value={nickname}
          setValue={setNickname}
          placeholder="닉네임을 입력해주세요"
          isError={false}
        />
      </View>

      <View
        style={[
          styles.buttonContainer,
          {
            bottom: keyboardHeight,
            flexDirection: 'row',
            flex: 0.1,
            display: isButtonVisible ? 'flex' : 'none',
          },
        ]}>
        <View style={{ flex: 0.4, marginRight: 10 }}>
          <CustomButton
            text="나중에"
            backgroundColor={theme.colors.c2e_gray_03}
            color={theme.colors.c2e_gray_02}
            fontWeight={'800'}
            onPress={handleNextBtn}
          />
        </View>

        <View style={{ flex: 0.6, marginBottom: 30 }}>
          <CustomButton text="다음" fontWeight={'800'} disabled={!nickname} />
        </View>
      </View>

      <BottomSheetComponent
        ref={bottomSheetModalRef}
        enablePanDownToClose={false}
        pressBehavior="collapse"
        snapPoint={['55%']}>
        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              marginBottom: 16,
              textAlign: 'left',
              fontSize: 22,
              fontWeight: '800',
              color: theme.colors.c2e_gray_01,
            }}>
            서비스 이용약관
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 14,
              fontWeight: '700',
              color: theme.colors.c2e_gray_04,
            }}>
            C2E wallet 이용을 위한 서비스 약관 동의가 필요합니다.
          </Text>

          <View style={{ marginTop: 47 }}>
            {termsOfUse?.map((value, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CustomCheckbox
                      checked={value.checked}
                      width={24}
                      height={24}
                      onPress={() =>
                        index === 0
                          ? handleAllCheck()
                          : handleIndividualCheck(index)
                      }
                    />
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() =>
                        index === 0
                          ? handleAllCheck()
                          : handleIndividualCheck(index)
                      }>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: theme.colors.c2e_black_02,
                        }}>
                        {value.title}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={handleTermsBtn}>
                    <View>
                      <Text
                        style={{
                          display: value.required ? 'flex' : 'none',
                          borderRadius: 4,
                          fontSize: 11,
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                          backgroundColor: theme.colors.c2e_blue_03,
                          color: theme.colors.c2e_blue_02,
                          fontWeight: '700',
                        }}>
                        필수
                      </Text>
                      <Text
                        style={{
                          display: value?.option ? 'flex' : 'none',
                          borderRadius: 4,
                          fontSize: 11,
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                          backgroundColor: theme.colors.c2e_white_01,
                          color: theme.colors.c2e_gray_04,
                          borderWidth: 1,
                          borderColor: theme.colors.c2e_gray_02,
                          fontWeight: '700',
                        }}>
                        선택
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        marginLeft: 12,
                      }}>
                      <Image
                        source={right_arrow_icon}
                        style={{
                          display: value.required ? 'flex' : 'none',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View style={{ marginTop: 24 }}>
            <CustomButton
              text="다음"
              fontWeight={'800'}
              backgroundColor={theme.colors.c2e_blue_02}
              disabled={!checkAllRequiredTerms()}
              onPress={() => handleTermsNextBtn()}
            />
          </View>
        </View>
      </BottomSheetComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingVertical: 0,
  },
});

export default Nickname;
