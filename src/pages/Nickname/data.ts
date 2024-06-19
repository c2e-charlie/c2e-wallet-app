export interface TermOfUse {
  title: string;
  checked: boolean;
  required: boolean;
  option?: boolean;
}

export const termsOfUseArr = [
  {
    title: '전체 동의',
    checked: false,
    required: false,
  },
  {
    title: '서비스 이용약관 동의',
    checked: false,
    required: true,
  },
  {
    title: '개인정보 수집 및 이용동의',
    checked: false,
    required: true,
  },
  {
    title: '본인은 만 19세 이상입니다.',
    checked: false,
    required: true,
  },
  {
    title: '마케팅 정보 수신 동의',
    checked: false,
    required: false,
    option: true,
  },
];
