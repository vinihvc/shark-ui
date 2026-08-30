"use client";

import type React from "react";

import { Alert, AlertDescription } from "@/registry/react/components/alert";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/react/components/item";
import { Spinner } from "@/registry/react/components/spinner";
import { useAsyncList } from "@/registry/react/hooks/use-async-list";

interface User {
  department: string;
  email: string;
  id: number;
  name: string;
  role: string;
}

const UseAsyncListDemo = () => {
  const list = useAsyncList<User>({
    initialItems: mockUsers.slice(0, LIMIT),
    async load({ filterText, signal }) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      signal?.throwIfAborted();
      const query = filterText.toLowerCase();
      const items = mockUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
      return { items: items.slice(0, LIMIT) };
    },
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    list.setFilterText(event.target.value);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Field>
        <FieldLabel>Search users</FieldLabel>
        <Input
          onChange={handleFilterChange}
          placeholder="Search by name or email…"
          type="search"
          value={list.filterText}
        />
      </Field>
      {!!list.loading && (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Spinner /> Loading
        </div>
      )}
      {!!list.error && (
        <Alert role="alert" variant="destructive">
          <AlertDescription>{list.error.message}</AlertDescription>
        </Alert>
      )}
      <ItemGroup className="gap-2">
        {list.items.map((user) => (
          <Item key={user.id} role="listitem" variant="outline">
            <ItemContent>
              <ItemTitle>{user.name}</ItemTitle>
              <ItemDescription>{user.email}</ItemDescription>
              <p className="text-muted-foreground text-xs">
                {user.department} · {user.role}
              </p>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
      {!(list.loading || list.error) && !!list.empty && (
        <p className="text-muted-foreground text-sm">No results found.</p>
      )}
    </div>
  );
};

const LIMIT = 4;

const mockUsers: User[] = [
  {
    department: "Engineering",
    email: "alice@example.com",
    id: 1,
    name: "Alice Johnson",
    role: "Senior Developer",
  },
  {
    department: "Marketing",
    email: "bob@example.com",
    id: 2,
    name: "Bob Smith",
    role: "Marketing Manager",
  },
  {
    department: "Engineering",
    email: "carol@example.com",
    id: 3,
    name: "Carol Davis",
    role: "Frontend Developer",
  },
  {
    department: "Sales",
    email: "david@example.com",
    id: 4,
    name: "David Wilson",
    role: "Sales Representative",
  },
  {
    department: "Engineering",
    email: "eva@example.com",
    id: 5,
    name: "Eva Brown",
    role: "DevOps Engineer",
  },
  {
    department: "Support",
    email: "frank@example.com",
    id: 6,
    name: "Frank Miller",
    role: "Customer Success",
  },
  {
    department: "Marketing",
    email: "grace@example.com",
    id: 7,
    name: "Grace Lee",
    role: "Content Creator",
  },
  {
    department: "Engineering",
    email: "henry@example.com",
    id: 8,
    name: "Henry Taylor",
    role: "Backend Developer",
  },
  {
    department: "Sales",
    email: "ivy@example.com",
    id: 9,
    name: "Ivy Anderson",
    role: "Account Manager",
  },
  {
    department: "Support",
    email: "jack@example.com",
    id: 10,
    name: "Jack Thompson",
    role: "Technical Support",
  },
  {
    department: "Marketing",
    email: "kate@example.com",
    id: 11,
    name: "Kate Martinez",
    role: "Brand Manager",
  },
  {
    department: "Engineering",
    email: "liam@example.com",
    id: 12,
    name: "Liam Garcia",
    role: "Full Stack Developer",
  },
  {
    department: "Sales",
    email: "mia@example.com",
    id: 13,
    name: "Mia Rodriguez",
    role: "Sales Director",
  },
  {
    department: "Support",
    email: "noah@example.com",
    id: 14,
    name: "Noah Lopez",
    role: "Support Manager",
  },
  {
    department: "Engineering",
    email: "olivia@example.com",
    id: 15,
    name: "Olivia White",
    role: "UI Designer",
  },
  {
    department: "Marketing",
    email: "paul@example.com",
    id: 16,
    name: "Paul Harris",
    role: "Digital Marketer",
  },
  {
    department: "Engineering",
    email: "quinn@example.com",
    id: 17,
    name: "Quinn Clark",
    role: "Mobile Developer",
  },
  {
    department: "Sales",
    email: "ruby@example.com",
    id: 18,
    name: "Ruby Lewis",
    role: "Business Development",
  },
  {
    department: "Support",
    email: "sam@example.com",
    id: 19,
    name: "Sam Young",
    role: "Documentation Specialist",
  },
  {
    department: "Marketing",
    email: "tina@example.com",
    id: 20,
    name: "Tina Walker",
    role: "Social Media Manager",
  },
];

export default UseAsyncListDemo;
