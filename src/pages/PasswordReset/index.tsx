import { View, Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { c2e_focus_icon } from 'public/assets/images/icons/navigation';
import { TitleView, ResetView, Title, Description } from './index.styled';

const PasswordReset = () => {
  return (
    <ResetView>
      <View>
        <Image source={c2e_focus_icon} style={{ marginBottom: 20 }} />
        <TitleView>
          <Title>안전한 서비스 이용을 위해</Title>
          <Title>본인 인증이 필요해요</Title>
        </TitleView>
        <View>
          <Description>연계된 이메일 계정을 통해</Description>
          <Description>새로운 비밀번호를 등록합니다.</Description>
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <CustomButton text="계속하기" fontWeight={800} />
      </View>
    </ResetView>
  );
};

export default PasswordReset;
