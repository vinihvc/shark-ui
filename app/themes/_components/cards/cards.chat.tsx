"use client";

import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export function CardsChat() {
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ]);

  const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage alt="Image" src="/avatars/01.png" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="font-medium text-sm leading-none">Sofia Davis</p>
            <p className="text-muted-foreground text-xs">m@example.com</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <div
              className={cn(
                "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
              key={index}
            >
              {message.content}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <form
          className="relative w-full"
          onSubmit={(event) => {
            event.preventDefault();
            if (inputLength === 0) {
              return;
            }
            setMessages([
              ...messages,
              {
                role: "user",
                content: input,
              },
            ]);
            setInput("");
          }}
        >
          <InputGroup>
            <InputGroupInput
              autoComplete="off"
              id="message"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              value={input}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                className="rounded-full"
                size="icon-xs"
                type="submit"
              >
                <ArrowUpIcon />
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </CardFooter>
    </Card>
  );
}
