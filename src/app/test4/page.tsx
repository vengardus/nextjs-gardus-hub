import { userGetAllByCompanyCached } from "@/actions/users/cache/user.cache";
import { ShowPageMessage } from "@/components/common/messages/show-page-message";
import { checkAuthenticationAndPermission } from "@/services/auth/check-authentication-and-permission.use-case";
import { ModuleEnum } from "@/types/enums/module.enum";
import { User } from "@/types/interfaces/user/user.interface";
import React from "react";

export default async function Test4Page() {
  // Verify user authentication and permission
  const authenticatationAndPermissionResponse = await checkAuthenticationAndPermission(
    ModuleEnum.users
  );
  if (!authenticatationAndPermissionResponse.isAuthenticated)
    return <ShowPageMessage customMessage={authenticatationAndPermissionResponse.errorMessage} />;
  const company = authenticatationAndPermissionResponse.company!;

  const respUsers = await userGetAllByCompanyCached(company.id);
  if (!respUsers.success) {
    return <ShowPageMessage modelName={"Usuarios"} errorMessage={respUsers.message} />;
  }
  const users = respUsers.data as User[];

  return (
    <div>
      Test4Page
      <div>
        {users.map((user: User) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}
