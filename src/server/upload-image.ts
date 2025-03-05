"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export const uploadImage = async (file: File) => {
  const blob = await put(file.name, file, {
    access: "public",
  });

  revalidatePath("/");
  return blob.url;
};
