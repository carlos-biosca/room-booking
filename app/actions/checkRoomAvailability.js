'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"
import { Query } from "node-appwrite"
import { redirect } from "next/navigation"
import dateToUTC from "@/helpers/dateToUTC"

async function checkRoomAvailability (roomId, checkIn, checkOut) {
  const sessionCookie = cookies().get('app-session')

  if (!sessionCookie) {
    return redirect('/login');
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value)

    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS,
      [Query.equal('room_id', roomId)]
    )

    const checkInDate = dateToUTC(checkIn)
    const checkOutDate = dateToUTC(checkOut)

    if (checkInDate > checkOutDate) return "Dates are not valid!"

    for (const booking of bookings) {
      const bookingCheckInDate = dateToUTC(booking.check_in)
      const bookingCheckOutDate = dateToUTC(booking.check_out)

      if (checkInDate < bookingCheckOutDate && checkOutDate > bookingCheckInDate) return 'Not available at this time!'
    }

    return true
  } catch (err) {
    console.log('Room availability check failed!', err);
    redirect('/error')
  }
}

export default checkRoomAvailability