import {
  IChatGptSchema,
  IClaudeSchema,
  IGeminiSchema,
  ILlamaSchema,
  ILlmSchemaV3,
  ILlmSchemaV3_1,
  OpenApi,
} from "@samchon/openapi";
import "@wrtnlabs/schema";
import typia from "typia";

export const test_json_schema_payment_of_string = (): void => {
  const schema = {
    type: "string",
    "x-wrtn-payment-citizen-id": true,
    "x-wrtn-payment-citizen-mobile": true,
    "x-wrtn-payment-citizen-name": true,
    "x-wrtn-payment-currency": true,
    "x-wrtn-payment-order-id": true,
    "x-wrtn-payment-order-name": true,
    "x-wrtn-payment-uid": true,
    "x-wrtn-payment-vendor": true,
  } satisfies OpenApi.IJsonSchema.IString;
  typia.assertEquals<OpenApi.IJsonSchema>(schema);
  typia.assertEquals<IChatGptSchema>(schema);
  typia.assertEquals<IClaudeSchema>(schema);
  typia.assertEquals<IGeminiSchema>(schema);
  typia.assertEquals<ILlamaSchema>(schema);
  typia.assertEquals<ILlmSchemaV3>(schema);
  typia.assertEquals<ILlmSchemaV3_1>(schema);
};
