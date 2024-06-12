import { handleInputChange } from './index.utils'; // 경로를 실제 파일 경로로 변경하세요.

describe('handleInputChange', () => {
  let setInputPoint: jest.Mock;

  beforeEach(() => {
    setInputPoint = jest.fn();
  });

  it('빈 문자열을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('', 100, 13, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('');
  });

  it('문자열 "."을 입력할 경우 "0."을 반환.', () => {
    handleInputChange('.', 100, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('0.');
  });

  it('문자열 ".." .뒤에 .을하나 더 붙혀도 " "을 출력', () => {
    handleInputChange('..', 100, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('');
  });

  it('소수점으로 끝나는 문자열을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('1.', 100, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('1.');
  });

  it('소수점 3자리 이상 입력할 경우 잘린 값을 반환한다.', () => {
    handleInputChange('1.4567', 100, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('1.456');
  });

  it('.을 제외한 문자는 입력이 불가능 하다', () => {
    handleInputChange('abc', 100, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('');
  });

  it('myPoint보다 많은 값을 입력할 수 없다', () => {
    handleInputChange('20', 10, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('10');
  });

  it('최대 출력 숫자는 a * ratio = dailyMaxChangeC2e 에서 a값이 최대값이다.', () => {
    handleInputChange('500', 500, 13, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('26.000');
  });

  it('정상적인 값을 입력할 경우 그대로 반환한다.', () => {
    handleInputChange('20', 100, 50, 0.5, setInputPoint);
    expect(setInputPoint).toHaveBeenCalledWith('20');
  });
});
