
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './NameCard.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NameCard = ({ avatarUrl, name, details }) => {
  return (
    <Card className="name-card">
      <Card.Body className="text-center">
        {/* <Image src={avatarUrl} roundedCircle className="avatar mb-3" /> */}
        <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
       </Avatar>
        <Card.Title className="name">{name}</Card.Title>
        <Card.Text className="details">{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NameCard;
