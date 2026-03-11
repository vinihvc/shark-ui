"use client";

import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourActions,
  TourContent,
  TourDescription,
  TourHeader,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
} from "@/registry/react/components/tour";

const steps: TourStepType[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Async Data Loading",
    description: "This tour demonstrates loading data before showing a step.",
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "user-info",
    type: "tooltip",
    title: "Loading...",
    description: "Fetching user data...",
    target: () => document.querySelector<HTMLElement>("#user-card"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
    effect({ show, update }) {
      const controller = new AbortController();

      fetch("https://api.github.com/users/segunadebayo", {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          update({
            title: `Welcome, ${data.name ?? data.login}!`,
            description: `You have ${data.public_repos} public repositories and ${data.followers} followers.`,
          });
          show();
        })
        .catch(() => {
          update({
            title: "User Profile",
            description: "Could not load user data. Please try again.",
          });
          show();
        });

      return () => controller.abort();
    },
  },
  {
    id: "complete",
    type: "dialog",
    title: "Tour Complete",
    description:
      "The async step loaded data from the GitHub API before displaying.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const AsyncExample = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Tour</Button>
      </TourTrigger>

      <div
        className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
        id="user-card"
      >
        User Profile Card
      </div>

      <TourContent>
        <TourHeader>
          <TourProgressText />
          <TourTitle />
          <TourDescription />
        </TourHeader>

        <TourActions />
      </TourContent>
    </Tour>
  </div>
);

export default AsyncExample;
