import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Plus, MessageCircle } from "lucide-react";

interface UserCardProps {
  name: string;
  pseudo: string;
  avatar: string;
  fonction: string;
  entreprise: string;
  description: string;
  connect: boolean;
}

export default function UserCard({ name, pseudo, avatar, fonction, entreprise, description, connect }: UserCardProps) {
  return (
    <Card className="w-[350px] h-[400px]">
      <CardHeader>
        <Avatar>
          <AvatarImage src={avatar} />
        </Avatar>
        <div className="w-full">
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-gray-500 text-center pl-5 pt-2 w-50">{pseudo} {connect}</p>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <p className="text-sm text-gray-500">{fonction} chez {entreprise}</p>
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
    </Card>
  );
}
