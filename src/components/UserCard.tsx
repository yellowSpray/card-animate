import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Plus, MessageCircle } from "lucide-react";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
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
        <p className="text-xs text-gray-500 mt-3">{entreprise}</p>
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

  // const [display, setDisplay] = useState(false)

  // function isDisplay(){
  //   setDisplay(!display)
  // }

  return (
    <Card className="py-4 cursor-pointer hover:border-1 hover:border-gray-400">
      <CardHeader>
        <div className="flex flex-col items-end justify-end relative">
          <Avatar>
            <AvatarImage src={avatar} />
          </Avatar>
          {isConnected({ connect })}
        </div>
        <div className="w-full">
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-gray-500 text-left pl-5 pt-2">{fonction}</p>
        </div>
        {/* <Button variant="ghost" size="icon" onClick={isDisplay}>{display ? <X /> : <ChevronDown />}</Button> */}
        <div className="flex flex-row align-center">
          <Button variant="ghost" size="icon"><TbBrandLinkedin /></Button>
          <Button variant="ghost" size="icon"><FiGithub /></Button>
        </div>
      </CardHeader>
      {/* {display && displayContent} */}
    </Card>
  );
}
