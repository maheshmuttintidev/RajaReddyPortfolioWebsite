import { Hero } from "@/components/hero";
import React from "react";


const slides = [
  {
    title: "RAJA REDDY NAGENDLA",
    subtitle: "AWS DevOps Engineer",
    skills:
      "Contact: 8885333691 | Email: rajareddy3100@gmail.com | Location: Hyderabad",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SUMMARY",
    subtitle:
      "I am a dedicated B.Tech graduate with a solid foundation in software development and technology, specifically in AWS services and development tools...",
    skills: "",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "EXPERIENCE",
    subtitle:
      "AX Technical Developer at OnActuate Software Consulting Pvt Ltd (06/2022 - 12/2022)",
    skills:
      "A software consulting company. Worked as AX Technical Developer. Gained 6 months of practical experience...",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "EDUCATION",
    subtitle:
      "B.Tech from Nova College of Eng & Technology (08/2017 - 05/2021)",
    skills: "",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "STRENGTHS",
    subtitle: "Teamwork & Learning Ability | Commitment & Human Relations",
    skills: "",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "KEY ACHIEVEMENTS",
    subtitle: "AWS Competence: Achieved competence in AWS core services...",
    skills: "",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LANGUAGES",
    subtitle: "English - Proficient | Telugu - Native",
    skills: "",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SKILLS",
    subtitle:
      "Auto Scaling, AWS, Bash, CI/CD, CloudFormation, Cloudwatch, Docker, EC2, ELB, Git, IAC, IAM, Jenkins, Lambda, Linux, macOS, MS Office, OOPs, Python, RDS, Route 53, S3, SQL, Telugu, Terraform, VPC, Windows.",
    skills: "",
    imageUrl:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
   
      <Hero slides={slides} />
    </div>
  );
}
