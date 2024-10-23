'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"

async function checkUser () {
  const sessionCookie = cookies().get("app-session")

  if (!sessionCookie) {
    return {
      isAuth: false
    }
  }
  try {
    const { account } = await createSessionClient(sessionCookie.value)
    const user = await account.get()

    return {
      isAuth: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email
      }
    }
  } catch (err) {
    console.log(err);
    return {
      isAuth: false
    }
  }
}

export default checkUser;