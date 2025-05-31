import "./App.css";
import UserCard from "./components/UserCard.js";
import gsap from "gsap";
import { users } from "./data/users.js";
import { useRef } from "react";
import { useGSAP } from "@gsap/react"; // <== import hook from React package

gsap.registerPlugin(useGSAP)

function App() {

  const eventCard = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.cardAnimation', {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "power1.inOut"
    })
    
  }, { scope: eventCard })

  return (
    <>
      <main className="xl:w-7xl lg:w-5xl md:w-full w-full">
        <section ref={eventCard} className="grid xl:grid-cols-3 gap-7 p-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {users.map((item) => (
            <div key={item.id} className="cardAnimation">
              <UserCard {...item} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
