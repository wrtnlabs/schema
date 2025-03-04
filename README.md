# `@wrtnlabs/schema`
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wrtnlabs/schema/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@wrtnlabs/schema.svg)](https://www.npmjs.com/package/@wrtnlabs/schema)
[![Downloads](https://img.shields.io/npm/dm/@wrtnlabs/schema.svg)](https://www.npmjs.com/package/@wrtnlabs/schema)
[![Build Status](https://github.com/wrtnlabs/schema/workflows/build/badge.svg)](https://github.com/wrtnlabs/schema/actions?query=workflow%3Abuild)

Extension of [`@samchon/openapi`](https://github.com/samchon/openapi) adding plugin properties.

You can see the plugin properties in the [`src/index.ts`](https://github.com/wrtnlabs/schema/blob/main/src/index.ts) file.

```typescript
import { OpenApi.IJsonSchema } from "@samchon/openapi";
import "@wrtnlabs/schema";

const schema: OpenApi.IJsonSchema = {
  type: "string",
  format: "email",
  "x-wrtn-placeholder": "Insert your email address please",
};
```

