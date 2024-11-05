'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"
import { ID } from "node-appwrite"
import { redirect } from "next/navigation"
import checkUser from "./checkUser"
import { revalidatePath } from "next/cache"
import checkRoomAvailability from "./checkRoomAvailability"

async function bookRoom (previousState, formData) {
  const sessionCookie = cookies().get('app-session')

  if (!sessionCookie) {
    return redirect('/login');
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value)
    const { user } = await checkUser()

    if (!user) {
      return {
        error: 'You are not logged in!'
      }
    }

    // Get time
    const checkInDate = formData.get('check_in_date');
    const checkInTime = formData.get('check_in_time');
    const checkOutDate = formData.get('check_out_date');
    const checkOutTime = formData.get('check_out_time');
    const roomId = formData.get('room_id');
    const checkInDateTime = `${checkInDate}T${checkInTime}`;
    const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;

    //Check availability
    const isAvailableToBook = await checkRoomAvailability(roomId, checkInDateTime, checkOutDateTime)
    if (typeof isAvailableToBook === "string") {
      return {
        error: isAvailableToBook
      }
    }

    const bookingData = {
      check_in: checkInDateTime,
      check_out: checkOutDateTime,
      user_id: user.id,
      room_id: roomId,
    };

    // Create booking
    const newBooking = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS,
      ID.unique(),
      bookingData
    )

    revalidatePath('/bookings', 'layout');

    return {
      success: true,
    };

  } catch (err) {
    console.log(err);
    return {
      error: 'Failed to book room'
    }
  }
}

export default bookRoom