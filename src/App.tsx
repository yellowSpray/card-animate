import "./App.css";
import UserCard from "./components/UserCard.js";
import { users } from "./data/users.js";

function App() {
  return (
    <>
      <main>
        <section className="flex justify-center items-center gap-10">
          {users.map((item) => (
            <UserCard key={item.id} {...item}/>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
