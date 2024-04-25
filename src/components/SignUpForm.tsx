import { useId } from 'react'

import { Button } from '@/components/Button'

export function SignUpForm() {
  let id = useId()

  return (
    <div>
        <Button className={"w-full flex justify-center items-center text-base"} href="https://oasis.gallery/collection/0:0d16c74a210724fce890494858caa5ef6731cfc34cafc422e97a944cbaf6c042">BUY NOW</Button>
        <br/>
        <Button className={"w-full flex justify-center items-center text-base"} href="https://hackmd.io/4Y40u3D7TDSk2Nn5h4TSHA?view">RULES OF THE GAME</Button>
    </div>
  )
}
