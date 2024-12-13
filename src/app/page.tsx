import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
import { CoursesList } from "@/features/courses-list/pub/courses-list";

export default async function Home() {
  return (
    <main className="flex flex-col  p-8">
      <CreateCourseForm
        revalidatePathPage={"/"}
        className="max-w-[300px] mb-5"
      />
      <CoursesList revalidatePagePath={"/"} />
    </main>
  );
}
