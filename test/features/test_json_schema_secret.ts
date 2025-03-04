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

export const test_json_schema_secret = (): void => {
  const schema = {
    type: "string",
    "x-wrtn-secret-key": "google",
    "x-wrtn-secret-scopes": ["write", "read"],
  } satisfies OpenApi.IJsonSchema.IString;
  typia.assertEquals<OpenApi.IJsonSchema>(schema);
  typia.assertEquals<IChatGptSchema>(schema);
  typia.assertEquals<IClaudeSchema>(schema);
  typia.assertEquals<IGeminiSchema>(schema);
  typia.assertEquals<ILlamaSchema>(schema);
  typia.assertEquals<ILlmSchemaV3>(schema);
  typia.assertEquals<ILlmSchemaV3_1>(schema);
};
