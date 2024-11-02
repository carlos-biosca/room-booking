'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

async function cancelBooking (bookingId) {
  const sessionCookie = cookies().get('app-session')

  if (!sessionCookie) {
    return redirect('/login');
  }

  try {
    const { account, databases } = await createSessionClient(sessionCookie.value)
    const user = await account.get()
    const userId = user.$id
    const booking = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS,
      bookingId
    )

    if (booking.user_id !== userId) {
      return {
        error: 'You are not allowed to cancel this booking!'
      }
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS,
      bookingId
    )

    revalidatePath('/bookings', 'layout')
    return {
      success: 'Booking canceled!'
    }

  } catch (err) {
    console.log('Cancel booking error:', err);
    redirect('/error')
  }
}

export default cancelBooking