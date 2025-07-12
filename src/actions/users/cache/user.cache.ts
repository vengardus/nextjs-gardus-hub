import { CacheConfig } from "@/config/cache.config";
import { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
  unstable_cache,
} from "next/cache";
import { userGetAllByCompany } from "../querys/user.get-all-by-company.action";
import { userGetAll } from "../querys/user.get-all.action";

export const userGetAllByCompanyCached = async (companyId: string): Promise<ResponseAction> => {
  "use cache";
  cacheTag(`users-${companyId}`);
  cacheLife(CacheConfig.CacheDurations);
  return await userGetAllByCompany(companyId);
};

export const userGetAllCached = async (): Promise<ResponseAction> => {
  "use cache";
  cacheTag(`users`);
  cacheLife(CacheConfig.CacheDurations);
  return await userGetAll();
};

export function userGetAllByCompanyNew(companyId: string) {
  // Aquí companyId está en scope, así que podemos usarlo en keyParts
  console.log("pre-userGetAllByCompanyCached2");
  const fn = unstable_cache(
    async () => {
      return userGetAllByCompany(companyId);
    },
    [`users-${companyId}`], // ahora sí existe
    { revalidate: CacheConfig.CacheDurations.revalidate }
  );
  return fn();
}
