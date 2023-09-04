import { ReactNode } from "react";

export interface ServiceCardProps {
    text : string;
    url : string;
    logo : string;
    detail : string;
}

export interface TestimonialsProps{
 name: string;
 jobTitle : string;
 review :string;
 avatar : string;
}

export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];

  export interface ContactItemProps{
    logo : React.ReactNode;
    title : string ;
    text : string;
  }