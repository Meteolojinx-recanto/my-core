"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCourseAction } from "@/features/courses-list/action";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
export function CreateCourseForm({
  className,
  revalidatePathPage,
}: {
  className: string;
  revalidatePathPage: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const createCourseSchema = z.object({
    name: z.string(),
    description: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  return (
    <Form {...form}>
      <form
        className={cn(className, "space-y-8")}
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            await createCourseAction(revalidatePathPage, data);
          });
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="название.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="описание..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isCreateTransition} type="submit">
          Добавить
        </Button>
      </form>
    </Form>
  );
}
