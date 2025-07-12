import { CacheConfig } from "@/config/cache.config";
import { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from "next/cache";
import { branchGetAllByCompany } from "../querys/branch.get-all-by-company.action";

export const branchGetAllByCompanyCached = async (companyId: string): Promise<ResponseAction> => {
    "use cache";
    cacheTag(`branches-${companyId}`);
    cacheLife(CacheConfig.CacheDurations);
    return await branchGetAllByCompany(companyId);
  };
  