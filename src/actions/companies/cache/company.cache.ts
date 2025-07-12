import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag, unstable_cache } from "next/cache";
import { CacheConfig } from "@/config/cache.config";
import { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import { companyGetByUser } from "../querys/company.get-by-user.action";

export const companyGetByUserCached = async (
  userId: string,
  role: string
): Promise<ResponseAction> => {
  "use cache";
  cacheTag(`company-user-${userId}`);
  cacheLife(CacheConfig.CacheDurations);
  return await companyGetByUser(userId, role);
};

export const companyGetByUserCachedNEW = async (
  userId: string,
  role: string
): Promise<ResponseAction> => {
  console.log('pre-companyGetByUserCached');
  const fn = unstable_cache(
    async () => {
      return companyGetByUser(userId, role)
    },
    [`company-user-${userId}`], // ahora sí existe
    { revalidate: CacheConfig.CacheDurations.revalidate }
  )
  return fn()
};
