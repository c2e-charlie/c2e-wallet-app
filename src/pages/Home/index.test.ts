import { handleInputChange } from './index.utils'; // 경로를 실제 파일 경로로 변경하세요.

describe('handleInputChange', () => {
  let setInputPoint: jest.Mock;

  beforeEach(() => {
    setInputPoint = jest.fn();
  });

  it('빈 문자열을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('');
  });

  it('문자열 "."을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('.', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('.');
  });

  it('소수점으로 끝나는 문자열을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('123.', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('123.');
  });

  it('소수점 3자리 이상 입력할 경우 잘린 값을 반환한다.', () => {
    handleInputChange('1.4567', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('1.456');
  });

  it('유효하지 않은 숫자를 입력할 경우 0으로 설정한다.', () => {
    handleInputChange('abc', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('0');
  });

  it('일일 최대 변환 가능 값을 초과할 경우 최대 변환 가능 값으로 설정한다.', () => {
    handleInputChange('30', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('25');
  });

  it('정상적인 값을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('20', 100, 50, 2, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('20');
  });
});
