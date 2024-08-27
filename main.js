const box=document.querySelectorAll(".box")
const body=document.querySelector("body")

box.forEach(e=>{
    e.addEventListener('click',i=>{
    const switcher=i.target.id
      switch (switcher) {
        case "black":
           body.style.backgroundColor=switcher
          break;
          case "red":
            body.style.backgroundColor=switcher
           break;
           case "yellow":
           body.style.backgroundColor=switcher
          break;
          case "orange":
           body.style.backgroundColor=switcher
          break;
          case "blue":
           body.style.backgroundColor=switcher
          break;
        default:
          body.style.backgroundColor="white"
          break;
      }
    })
})