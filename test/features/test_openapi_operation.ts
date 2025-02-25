import { OpenApi } from "@samchon/openapi";
import "@wrtnlabs/schema";
import typia from "typia";

export const test_openapi_operation = (): void => {
  const op: OpenApi.IOperation = {
    "x-wrtn-icon": "https://www.google.com/favicon.ico",
    "x-wrtn-experimental": true,
    "x-wrtn-function-select-benchmarks": ["Show me products"],
  };
  typia.assertEquals(op);
};
