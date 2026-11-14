import React from 'react'
import { SignIn } from '@clerk/react'

function SignInPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <SignIn />
    </div>
  )
}

export default SignInPage