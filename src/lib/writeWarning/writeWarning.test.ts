import { writeWarning } from "./writeWarning";

const TestWarningMessage = "Warning Message";

describe("writeWarning returns back success Result", () => {
  test("return value", () => {
    expect(writeWarning(TestWarningMessage)).toBe("test");
  });
});
