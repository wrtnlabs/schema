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

export const test_json_schema_payment_of_numeric = (): void => {
  const schema = {
    type: "integer",
    "x-wrtn-payment-amount": true,
    "x-wrtn-payment-citizen-id": true,
    "x-wrtn-payment-order-id": true,
  } satisfies OpenApi.IJsonSchema.IInteger;
  for (const type of ["integer", "number"]) {
    (schema as any).type = type;
    typia.assertEquals<OpenApi.IJsonSchema>(schema);
    typia.assertEquals<IChatGptSchema>(schema);
    typia.assertEquals<IClaudeSchema>(schema);
    typia.assertEquals<IGeminiSchema>(schema);
    typia.assertEquals<ILlamaSchema>(schema);
    typia.assertEquals<ILlmSchemaV3>(schema);
    typia.assertEquals<ILlmSchemaV3_1>(schema);
  }
};
