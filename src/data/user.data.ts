// lib/getData.ts
import prisma from '@/infrastructure/db/prisma'
import { unstable_cache } from 'next/cache'

/**
 * Esta función se cachea en la Data Cache de Next.js
 * y se reutiliza en peticiones sucesivas.
 */
export const getUserDataCached = unstable_cache(async () => {
    console.log("==>getData");
  return prisma.userModel.findMany(/* …tus filtros… */)
}, /* keyParts opcional: */ [])
