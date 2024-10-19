'use server'

import { createAdminClient } from "@/config/appwrite"
import { cookies } from "next/headers"

async function createSession (previousState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const { account } = await createAdminClient()

  try {
    const session = await account.createEmailPasswordSession(email, password)
    cookies().set('app-session', session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(session.expire),
      path: '/'
    })
    return { success: true }
  } catch (err) {
    console.log(err);
    return {
      error: 'Invalid email or password'
    }
  }
}

export default createSession;