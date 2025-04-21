"use server";
// to use server actions inside client components, you need to use "use server" pragma

import { prisma } from "@/utils/db";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateTaskDto } from "@/utils/dtos";
import { Status } from "@prisma/client";
export const createTask = async ({ title, description }: CreateTaskDto) => {
  console.log({ title, description });
  if (typeof title !== "string" || title.length < 2) return;
  if (typeof description !== "string" || description.length < 4) return;
  const task = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  console.log(task);
  // revalidatePath("/");
  redirect("/");
};
export const handleDelete = async (formData: FormData) => {
  try {
    const id = formData.get("id")?.toString();
    console.log({id})

    if (!id) return;
    const deletedTask = await prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
    console.log(deletedTask);
    // revalidatePath("/");
    redirect("/");
  } catch (e) {
    console.log(e);
  }
};
export const handleDeleteUsingId = async (id: number) => {
  try {
   
    if (!id) return;
    const deletedTask = await prisma.task.delete({
      where: {
        id
      },
    });
    console.log(deletedTask);
    // use to refresh page to fetch the latest data
    // revalidatePath("/");
    redirect("/");
  } catch (e) {
    console.log(e);
  }
};
export async function updateTask(formData: FormData) {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const status = formData.get("status") as Status;
  const id = formData.get("id")?.toString();

  if (typeof title !== 'string' || title.length < 2) return;
  if (typeof description !== 'string' || description.length < 4) return;
  if (!status) return;
  if (typeof id !== 'string') return;

  try {
      await prisma.task.update({
          where: { id: parseInt(id) },
          data: { title, description, status }
      });
  } catch (error) {
    console.log(error);
      throw new Error("could not update the task, please try again");
  }

  //revalidatePath("/");
  redirect(`/tasks/${id}`);
}