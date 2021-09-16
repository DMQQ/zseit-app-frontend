import { CalcTime } from "helpers/CalcTime";

test("Returns true if day is equal today", () => {
  expect(CalcTime("10.09.2021")).toStrictEqual(false);
  expect(CalcTime("16.09.2021")).toStrictEqual(true);
});
