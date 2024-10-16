'use server'

import { createAdminClient } from "@/config/appwrite"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function getRoom (id) {
  try {
    const { databases } = await createAdminClient()
    const room = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS,
      id
    )
    revalidatePath('/', 'layout')
    return room
  } catch (err) {
    console.log('get room error:', err);
    redirect('/error')
  }
}

export default getRoom