import { useCompanyStore } from "./company/company.store";
import { usePermissionStore } from "./permission/permission.store";
import { useRoleStore } from "./role/role.store";

export const clearAllStore = () => {
    useCompanyStore.persist.clearStorage();
    useRoleStore.persist.clearStorage();
    usePermissionStore.persist.clearStorage();
  };