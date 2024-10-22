'use server'

import { createAdminClient } from "@/config/appwrite"
import { ID } from "node-appwrite"

async function createUser (previousState, formData) {
  const name = formData.get('name');
  const email = formData.get('email')
  const password = formData.get('password')
  const confirm = formData.get('confirm')

  if (password.length < 8) {
    return {
      error: 'Password must contain at least 8 characters'
    }
  }

  if (password !== confirm) {
    return {
      error: 'Passwords are different'
    }
  }

  const { account } = await createAdminClient()

  try {
    await account.create(ID.unique(), email, password, name)

    return {
      success: true
    }
  } catch (err) {
    console.log(err);
    return {
      error: 'Registration failed'
    }
  }
}

export default createUser;