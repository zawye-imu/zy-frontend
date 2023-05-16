import Typewriter from "typewriter-effect";
import bg1 from "./bg_test1.jpg"

export default function Menu() {

  const styleClassNames = {
    navItem : "mr-10 font-neuFace",
  }

  return (
  <div className="relative h-screen bg-cover" style={{backgroundImage:`url(${bg1})`}}>
   <header>
    <nav className="flex flex-row justify-end pt-4 content-around">
    <a href="" className={styleClassNames.navItem} style={{fontFamily:"neutralFace"}}>/Projects</a>
    <a href="" className={styleClassNames.navItem}>/About </a>
    <a href="" className={styleClassNames.navItem}>/Contact</a>
    </nav>
   </header>
   <div className="font-mono absolute top-64 left-64 text-2xl">
      <Typewriter
      options={{
          loop: true,
        }}
      onInit={(typewriter) => {
        typewriter.typeString("<span style='color: #27ae60;'>Hello There!</span> &#9995;")
        .pauseFor(1000)
        .typeString("\nI\'m <b>Zaw Ye Htet Naing.</b>")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(2000)
          .typeString("I was born on <i>1997/11/05</i>")
          .changeDeleteSpeed(2)
          .pauseFor(2000)
          .deleteAll()
          .typeString("I like <span>&#128187;</span> <span>&#128640;</span> <span>&#128175;</span> and <span>&#128176;</span>")
          .typeString("<br>Anyway, glad to see you here.")
          .changeDeleteSpeed(3)
          .pauseFor(5000)
          .deleteAll()
          .start()
      }}
    />
    </div>
   </div>
  )
}