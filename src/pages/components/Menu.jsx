import Typewriter from "typewriter-effect";

export default function Menu() {

  const styleClassNames = {
    navItem : "mr-10 font-neuFace",
  }

  return (
  <div className="relative h-screen">
   <header>
    <nav className="flex flex-row justify-end p-2 content-around">
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
          .typeString("I like computers.")
          .typeString("Anyway, glad to see you here.")
          .changeDeleteSpeed(3)
          .pauseFor(5000)
          .deleteAll()
          .start()
          // birthday 
          // hobbies
          // nice to see you.
      }}
    />
    </div>
   </div>
  )
}