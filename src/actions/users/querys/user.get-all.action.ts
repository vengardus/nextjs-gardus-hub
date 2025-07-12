"use server"

import prisma from "@/infrastructure/db/prisma";
import type { ResponseAction } from "@/types/interfaces/common/response-action.interface";
import type { User } from "@/types/interfaces/user/user.interface";
import { getActionError } from "@/utils/errors/get-action-error";
import { initResponseAction } from "@/utils/response/init-response-action";

export const userGetAll = async (): Promise<ResponseAction> => {

    
    const resp = initResponseAction();

    console.log("users/get-all");

    try {
        const users = await prisma.userModel.findMany()  
        resp.data = users as User[]
        resp.success = true  
    } catch (error) {
        resp.message = getActionError(error);
    }
    return resp
}