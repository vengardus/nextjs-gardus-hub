import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from "next/cache";

import { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import { CacheConfig } from "@/config/cache.config";
import { documentTypeGetAllByCompany } from "../querys/document-type.get-all-by-company.action";

export const documentTypeGetAllByCompanyCached = async (companyId: string): Promise<ResponseAction> => {
    "use cache";
    cacheTag(`document-types-${companyId}`);
    cacheLife(CacheConfig.CacheDurations);
    return await documentTypeGetAllByCompany(companyId);
  };