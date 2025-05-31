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
      <main>
        <section ref={eventCard} className="flex flex-row flex-wrap justify-center items-center gap-10">
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
