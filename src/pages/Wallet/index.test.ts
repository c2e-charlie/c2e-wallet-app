import { copyToClipboard } from './index.utils'; // 경로를 실제 파일 경로로 변경하세요.
import Clipboard from '@react-native-clipboard/clipboard';

jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
}));

describe('copyToClipboard', () => {
  it('텍스트를 클립보드에 성공적으로 복사한다.', () => {
    const text = 'Hello, world!';
    copyToClipboard(text);
    expect(Clipboard.setString).toHaveBeenCalledWith(text);
  });
});
