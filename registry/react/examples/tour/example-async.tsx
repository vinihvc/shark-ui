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
    actions: [{ action: "next", label: "Next" }],
    description: "This tour demonstrates loading data before showing a step.",
    id: "intro",
    title: "Async Data Loading",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Fetching user data...",
    effect({ show, update }) {
      const controller = new AbortController();

      fetch("https://api.github.com/users/segunadebayo", {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          update({
            description: `You have ${data.public_repos} public repositories and ${data.followers} followers.`,
            title: `Welcome, ${data.name ?? data.login}!`,
          });
          show();
        })
        .catch(() => {
          update({
            description: "Could not load user data. Please try again.",
            title: "User Profile",
          });
          show();
        });

      return () => controller.abort();
    },
    id: "user-info",
    target: () => document.querySelector<HTMLElement>("#user-card"),
    title: "Loading...",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description:
      "The async step loaded data from the GitHub API before displaying.",
    id: "complete",
    title: "Tour Complete",
    type: "dialog",
  },
];

const Example = () => (
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

export default Example;
