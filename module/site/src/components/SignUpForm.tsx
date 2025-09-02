import { Button } from '@/components/Button'

export function SignUpForm() {
  return (
    <div>
        <br/>
        <Button className={"w-full flex justify-center items-center try-game text-black"} href="https://elemgame.github.io/code-with-kiro-hackathon/">TRY GAME</Button>
        <br/>
        <Button className={"w-full flex justify-center items-center text-base"} href="https://medium.com/@elemgame/rules-of-elemental-game-v1-598b872d3885">RULES OF THE GAME</Button>
        <br/>
        <Button className={"w-full flex justify-center items-center text-base"} href="https://oasis.gallery/collection/0:0d16c74a210724fce890494858caa5ef6731cfc34cafc422e97a944cbaf6c042">COLLECTION</Button>
    </div>
  )
}
