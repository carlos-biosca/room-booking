'use server'

import { createAdminClient } from "@/config/appwrite"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function getAllRooms () {
  try {
    const { databases } = await createAdminClient()
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS
    )
    revalidatePath('/', 'layout')
    return rooms.reverse()
  } catch (err) {
    console.log('get rooms error:', err);
    redirect('/error')
  }
}

export default getAllRooms