import { expectToBeResult } from "../expectToBeResult";

export const expectToBeSuccessful = (actual: any) => {
  expectToBeResult(actual);
  expect(actual).toHaveProperty<boolean>("isSuccessful", true);
  expect(actual).toHaveProperty<boolean>("isFailure", false);
};
