'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"
import { Query } from "node-appwrite"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

async function deleteRoom (id) {
  const sessionCookie = cookies().get('app-session')

  if (!sessionCookie) {
    return redirect('/login');
  }

  try {
    const { account, databases, storage } = await createSessionClient(sessionCookie.value)
    const user = await account.get()
    const userId = user.$id
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS,
      [Query.equal('user_id', userId)]
    )

    const findRoom = rooms.find(room => room.$id === id)
    if (!findRoom) {
        return {
          error: 'Room not found'
        }
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS,
      findRoom.$id
    )
    
    revalidatePath('/rooms/user', 'layout')
    return {
      success: 'Room deleted successfully!'
    }
  } catch (err) {
    console.log(err);
    return {
      error: 'Delete room failure'
    }
  }
}

export default deleteRoom
