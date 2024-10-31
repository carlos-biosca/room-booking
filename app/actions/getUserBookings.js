'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"
import { Query } from "node-appwrite"
import { redirect } from "next/navigation"

async function getUserBookings () {
  const sessionCookie = cookies().get('app-session')

  if (!sessionCookie) {
    return redirect('/login');
  }

  try {
    const { account, databases } = await createSessionClient(sessionCookie.value)
    const user = await account.get()
    const userId = user.$id
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS,
      [Query.equal('user_id', userId)]
    )

    return bookings
  } catch (err) {
    console.log('Get user bookings error:', err);
    redirect('/error')
  }
}

export default getUserBookings