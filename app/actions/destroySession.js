'use server'

import { createSessionClient } from "@/config/appwrite"
import { cookies } from "next/headers"

async function destroySession () {

  const sessionCookie = cookies().get('app-session')
  console.log(sessionCookie);

  if (!sessionCookie) {
    return {
      error: "No session found"
    }
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value)
    await account.deleteSession('current')
    cookies().delete('app-session')

    return {
      success: true
    }
  } catch (err) {
    console.log(err);
    return {
      error: 'Logout error'
    }
  }
}

export default destroySession;