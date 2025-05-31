import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Plus, MessageCircle, ChevronDown, X } from "lucide-react";
import { useState } from "react";

interface UserCardProps {
  name: string;
  pseudo: string;
  avatar: string;
  fonction: string;
  entreprise: string;
  description: string;
  connect: boolean;
  className?: string;
}

function isConnected({connect}: { connect: boolean}){
  return connect ? (
      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-1 z-2 border-2 border-white"></span>
   ) : (
      <span className="bg-red-500 w-3 h-3 rounded-full absolute right-1 z-2 border-2 border-white"></span>
  )
}


export default function UserCard({ name, pseudo, avatar, fonction, entreprise, description, connect }: UserCardProps) {

  const displayContent = (
    <>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <p className="text-xs text-gray-500 mt-3">{fonction} chez {entreprise}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-5">
        <Button size="lg">
          <MessageCircle />
          Contact Me
        </Button>
        <Button variant="outline" size="lg">
          <Plus />
          See More
        </Button>
      </CardFooter>
    </>
  )

  const [display, setDisplay] = useState(false)

  function isDisplay(){
    setDisplay(!display)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex flex-col items-end justify-end relative">
          <Avatar>
            <AvatarImage src={avatar} />
          </Avatar>
          {isConnected({ connect })}
        </div>
        <div className="w-full">
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-gray-500 text-center pl-5 pt-2 w-50">{pseudo}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={isDisplay}>{display ? <X /> : <ChevronDown />}</Button>
      </CardHeader>
      {display && displayContent}
    </Card>
  );
}
