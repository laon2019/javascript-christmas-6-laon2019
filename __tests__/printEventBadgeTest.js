import OutputView from '../src/view/OutputView';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();

  return logSpy;
};

describe('12월 이벤트 배지 테스트', () => {
  test('산타 배지 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(20000); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('산타'));
  });
  
  test('산타 배지 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(25000); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('산타'));
  });
  
  test('트리 배지 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(19999); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('트리'));
  });

  test('트리 배지 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(10000); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('트리'));
  });

  test('별 배지 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(9999); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('별'));
  });

  test('별 배지 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(5000); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('별'));
  });

  test('없음 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(4999); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('없음'));
  });

  test('없음 출력', () => {
    const logSpy = getLogSpy();

    OutputView.printEventBadge(0); 

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('없음'));
  });
});
