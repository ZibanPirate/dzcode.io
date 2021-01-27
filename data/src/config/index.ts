import { Environment } from "@zakiii.com/common/dist/types";
import { fsConfig } from "@zakiii.com/common/dist/config";
export const fullstackConfig = fsConfig(
  (process.env as unknown) as Environment,
);
