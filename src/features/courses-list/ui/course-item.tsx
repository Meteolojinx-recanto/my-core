"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

export function CourseItem({
  course,
  onDelete,
}: {
  course: CourseListElement;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  return (
    <Card>
      <CardHeader>{course.name}</CardHeader>
      <CardDescription>{course.description}</CardDescription>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}
