"use server";

import { revalidateTag } from "next/cache";

export async function revalidateTags(tagTable:string[]) {
  for (const tag of tagTable) {
    revalidateTag(tag);
  }
}
