'use server'

import { createAdminClient } from "@/config/appwrite"
import checkUser from "./checkUser"
import { ID } from "node-appwrite"
import { revalidatePath } from "next/cache"

async function addRoom (previousState, formData) {
  const { databases } = await createAdminClient()

  try {
    const { user } = await checkUser()

    const newRoom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS,
      ID.unique(),
      {
        user_id: user.id,
        name: formData.get("name"),
        description: formData.get("description"),
        sqft: formData.get("sqft"),
        capacity: formData.get("capacity"),
        location: formData.get("location"),
        address: formData.get("address"),
        availability: formData.get("availability"),
        price_per_hour: formData.get("price_per_hour"),
        amenities: formData.get("amenities"),
      }
    )
    revalidatePath('/', 'layout')

    return {
      success: true
    }

  } catch (err) {
    console.log(err);
    return {
      error: err.response.message || 'error has ocurred'
    }
  }
}

export default addRoom