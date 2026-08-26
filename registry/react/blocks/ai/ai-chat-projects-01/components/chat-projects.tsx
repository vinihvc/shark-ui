"use client";

import {
  FileSearchIcon,
  GlobeIcon,
  LayoutGridIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Card, CardHeader, CardMedia } from "@/registry/react/components/card";

const PROJECTS = [
  {
    description: "Summarize findings and compare sources across documents.",
    icon: FileSearchIcon,
    id: "research-analysis",
    title: "Research & Analysis",
  },
  {
    description: "Search the web and cite results in your workspace.",
    icon: GlobeIcon,
    id: "web-search",
    title: "Web Search",
  },
  {
    description: "Turn docs into answers with grounded citations.",
    icon: LayoutGridIcon,
    id: "knowledge-base",
    title: "Knowledge Base",
  },
  {
    description: "Generate endpoint examples and request schemas.",
    icon: FileSearchIcon,
    id: "api-docs",
    title: "API Documentation",
  },
  {
    description: "Draft release notes from commits and changelogs.",
    icon: LayoutGridIcon,
    id: "release-notes",
    title: "Release Notes",
  },
  {
    description: "Cluster feedback themes for product prioritization.",
    icon: SearchIcon,
    id: "user-feedback",
    title: "User Feedback",
  },
] as const;

export const ChatProjects = () => (
  <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="font-semibold text-xl">Projects</h2>
        <p className="text-muted-foreground text-sm">
          Organize chats around a goal, document set, or workflow.
        </p>
      </div>
      <Button>
        <PlusIcon aria-hidden="true" className="size-4" />
        Create project
      </Button>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {PROJECTS.map((project) => {
        const Icon = project.icon;
        return (
          <Card key={project.id}>
            <CardMedia variant="icon">
              <Icon aria-hidden="true" />
            </CardMedia>
            <CardHeader
              description={project.description}
              title={project.title}
            />
          </Card>
        );
      })}
    </div>
  </div>
);
