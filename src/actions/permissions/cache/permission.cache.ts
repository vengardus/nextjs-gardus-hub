"use server";

import { CacheConfig } from "@/config/cache.config";
import { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from "next/cache";
import { permissionGetAllByRole } from "../querys/permission.get-all-by-role.action";
import { permissionGetAllByCompanyRoleCod } from "../querys/permission.get-all-by-company_rolecod.action";

export const permissionGetAllByRoleCached = async (roleId: string): Promise<ResponseAction> => {
  "use cache";
  cacheTag(`permissions-${roleId}`);
  cacheLife(CacheConfig.CacheDurations);
  return await permissionGetAllByRole(roleId);
};

export const permissionGetAllByCompanyRoleCodCached = async (
  companyId: string,
  roleCod: string
): Promise<ResponseAction> => {
  "use cache";
  cacheTag(`permissions-${companyId}-${roleCod}`);
  cacheLife(CacheConfig.CacheDurations);
  return await permissionGetAllByCompanyRoleCod(companyId, roleCod);
};
