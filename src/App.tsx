import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Plus, MessageCircle } from "lucide-react";

function App() {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex justify-center gap-5">
          <Button size="lg"><MessageCircle />Contact Me</Button>
          <Button variant="outline" size="lg"><Plus />See More</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
