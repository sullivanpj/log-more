import { Result } from "src/result";

export const expectToBeResult = (actual: any) => {
  expect(actual).toBeInstanceOf<Result>(new Result({ userId: "test" }));
};
