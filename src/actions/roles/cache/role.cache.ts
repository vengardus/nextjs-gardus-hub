import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from "next/cache";

import { CacheConfig } from "@/config/cache.config";
import { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import { roleGetAllByCompany } from "../querys/role.get-all-by-company.action";

export const roleGetAllByCompanyCached = async (companyId: string): Promise<ResponseAction> => {
  "use cache";
  cacheTag(`roles-${companyId}`);
  cacheLife(CacheConfig.CacheDurations);
  return await roleGetAllByCompany(companyId);
};
