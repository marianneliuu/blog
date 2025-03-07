"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export const uploadImage = async (file: File) => {
  // add unique identifier to filename
  const filename = `${Date.now()}-${file.name}`;
  const blob = await put(filename, file, {
    access: "public",
  });

  revalidatePath("/");
  return blob.url;
};
