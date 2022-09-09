import {expect, it} from "@jest/globals";

import {getFormattedBalanceStr} from "./Balance";

it("formats balances correctly", () => {
  expect(getFormattedBalanceStr("0")).toEqual("0");
  expect(getFormattedBalanceStr("1")).toEqual("0.00000001");
  expect(getFormattedBalanceStr("100000000")).toEqual("1");
  expect(getFormattedBalanceStr("110000000")).toEqual("1.1");
  expect(getFormattedBalanceStr("110100000")).toEqual("1.101");
  expect(getFormattedBalanceStr("10000000000000000")).toEqual("100,000,000");
  expect(getFormattedBalanceStr("10000000000000001")).toEqual(
    "100,000,000.00000001",
  );
});
