'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"
import { Query } from "node-appwrite"
import { redirect } from "next/navigation"

async function getUserRooms () {
  const sessionCookie = cookies().get('app-session')

  if (!sessionCookie) {
    return redirect('/login');
  }

  try {
    const { account, databases } = await createSessionClient(sessionCookie.value)
    const user = await account.get()
    const userId = user.$id
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS,
      [Query.equal('user_id', userId)]
    )

    return rooms
  } catch (err) {
    console.log('Get user rooms error:', err);
    redirect('/error')
  }
}

export default getUserRooms