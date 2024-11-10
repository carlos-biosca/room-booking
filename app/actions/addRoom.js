'use server'

import { createAdminClient } from "@/config/appwrite"
import checkUser from "./checkUser"
import { ID } from "node-appwrite"
import { revalidatePath } from "next/cache"

async function addRoom (previousState, formData) {
  const { databases, storage } = await createAdminClient()

  try {
    const { user } = await checkUser()

    //Image
    let imageID;
    const image = formData.get('image')
    if (image && image.size > 0 && image.name !== 'undefined') {
      try {
        const response = await storage.createFile('images', ID.unique(), image)
        imageID = response.$id
      } catch (err) {
        console.log(err);
        return {
          error: 'Error uploading image'
        }
      }
    } else {
      console.log('Invalid image provided');
    }

    const newRoom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_ROOMS,
      ID.unique(),
      {
        user_id: user.id,
        name: formData.get("name"),
        description: formData.get("description"),
        sqmt: formData.get("sqmt"),
        capacity: formData.get("capacity"),
        location: formData.get("location"),
        availability: formData.get("availability"),
        amenities: formData.get("amenities"),
        image: imageID
      }
    )
    revalidatePath('/rooms/list', 'layout')

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