import { BrandWhereInput } from "./BrandWhereInput";
import { BrandOrderByInput } from "./BrandOrderByInput";

export type BrandFindManyArgs = {
  where?: BrandWhereInput;
  orderBy?: Array<BrandOrderByInput>;
  skip?: number;
  take?: number;
};
