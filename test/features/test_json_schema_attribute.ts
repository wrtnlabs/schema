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

export const test_json_schema_attribute = (): void => {
  const schema = {
    type: "boolean",
    "x-wrtn-placeholder": "Required to be checked",
  } satisfies OpenApi.IJsonSchema.IBoolean;
  typia.assertEquals<OpenApi.IJsonSchema>(schema);
  typia.assertEquals<IChatGptSchema>(schema);
  typia.assertEquals<IClaudeSchema>(schema);
  typia.assertEquals<IGeminiSchema>(schema);
  typia.assertEquals<ILlamaSchema>(schema);
  typia.assertEquals<ILlmSchemaV3>(schema);
  typia.assertEquals<ILlmSchemaV3_1>(schema);
};
