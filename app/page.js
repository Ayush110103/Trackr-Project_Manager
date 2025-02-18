import React from "react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LampContainer } from "@/components/ui/lamp";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is Trackr?",
    answer:
      "Trackr is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does Trackr compare to other project management tools?",
    answer:
      "Trackr offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is Trackr suitable for small teams?",
    answer:
      "Absolutely! Trackr is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from Trackr's features.",
  },
  {
    question: "What key features does Trackr offer?",
    answer:
      "Trackr provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can Trackr handle multiple projects simultaneously?",
    answer:
      "Yes, Trackr is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes Trackr ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While Trackr is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative container mx-auto py-20 text-center">
        {/* Background Beams behind everything */}
        {/* <BackgroundBeamsWithCollision className="absolute inset-0 -z-20" /> */}
        
       
        <LampContainer className="absolute top-[-195px] left-1/2 transform -translate-x-1/2 z-[-10]" />
    
    
        <div className="relative z-10">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-6 flex flex-col">
  Organize your tasks
  <br />
  <span className="flex mx-auto gap-3 sm:gap-4 items-center">
    with Trackr
    {/* Optional logo image here */}
  </span>
</h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Empower your teams with intuitive project management solution.
          </p>
          <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
          <Link href="/onboarding">
            <Button size="lg" className="mr-4">
              Get Started <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      {/* <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
    {/* CTA Section */}
<section className="relative py-20 text-center px-5">
  <BackgroundBeamsWithCollision className="absolute inset-0 -z-20" />
  <div className="container mx-auto relative">
    <h3 className="text-3xl font-bold mb-6">
      Ready to Transform Your Workflow?
    </h3>
    <p className="text-xl mb-12">
      Join with Trackr to streamline your projects and boost productivity.
    </p>
    <Link href="/onboarding">
      <Button size="lg" className="animate-bounce">
        Start For Free <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>
  </div>
</section>
    </div>
  );
}
