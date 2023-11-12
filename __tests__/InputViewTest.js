import { Console } from "@woowacourse/mission-utils";
import InputView from "../src/view/InputView";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("InputViewValidation", () => {
  describe("readDate", () => {
    test("유효하지 않은 범위 내의 숫자이면 에러를 던져야 합니다", async () => {
      Console.readLineAsync.mockResolvedValue("35");
      await expect(InputView.readDate()).rejects.toThrowError(
        '[ERROR] 1 ~ 31 사이의 숫자를 입력해주세요.'
      );
    });

    test("숫자가 아닌 값이면 에러를 던져야 합니다", async () => {
      Console.readLineAsync.mockResolvedValue("abc");
      await expect(InputView.readDate()).rejects.toThrowError(
        '[ERROR] 1 ~ 31 사이의 숫자를 입력해주세요.'
      );
    });
  });
});
