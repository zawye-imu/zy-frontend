
export default function Menu() {

  const styleClassNames = {
    navItem : "mr-10 font-neuFace",
  }

  return (
   <header>
    <nav className="flex flex-row justify-end p-2 content-around">
    <a href="" className={styleClassNames.navItem} style={{fontFamily:"neutralFace"}}>/Projects</a>
    <a href="" className={styleClassNames.navItem}>/About </a>
    <a href="" className={styleClassNames.navItem}>/Contact</a>
    </nav>
   </header>
  )
}