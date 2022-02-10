import { expectToBeResult } from "../expectToBeResult";

export const expectToBeFailure = (actual: any) => {
  expectToBeResult(actual);
  expect(actual).toHaveProperty<boolean>("isFailure", true);
  expect(actual).toHaveProperty<boolean>("isSuccessful", false);
};
