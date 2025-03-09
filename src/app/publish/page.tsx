"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addBlog } from "@/server/blog-actions";
import { uploadImage } from "@/server/upload-image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const BlogFormSchema = z.object({
  title: z.string().nonempty(),
  author: z.string().nonempty(),
  description: z.string().nonempty(),
  content: z.string().nonempty(),
  playButtonLabel: z.string().nonempty(),
  imageURL: z.string().nonempty(),
  contentImageURL: z.string().nonempty(),
});

export type BlogFormSchema = z.infer<typeof BlogFormSchema>;

export default function Publish() {
  const [imageUploading, setImageUploading] = useState(false);

  const form = useForm<z.infer<typeof BlogFormSchema>>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      content: "",
      playButtonLabel: "",
      imageURL: "",
      contentImageURL: "",
    },
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: "imageURL" | "contentImageURL",
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImageUploading(true);
    try {
      const blobUrl = await uploadImage(file);
      form.setValue(fieldName, blobUrl);
    } catch (error) {
      form.setError(fieldName, { message: "Failed to upload image" });
      console.log(error);
    } finally {
      setImageUploading(false);
    }
  };

  const onSubmit = async (data: BlogFormSchema) => {
    try {
      await addBlog(data);
    } catch (error) {
      console.log(error);
      form.setError("contentImageURL", { message: "Failed to publish blog" });
    }
  };

  return (
    <div className="flex items-start justify-center">
      <div className="flex flex-col justify-center items-center w-full min-w-[200px] max-w-[600px] mx-1">
        <h1 className="text-lg font-extralight mb-7">Publish!</h1>
        <Form {...form}>
          <form className="w-full space-y-2 pb-10" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[200px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="playButtonLabel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Play Button Lyric</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageURL"
              render={() => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      disabled={imageUploading}
                      onChange={(e) => handleImageUpload(e, "imageURL")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contentImageURL"
              render={() => (
                <FormItem>
                  <FormLabel>Content Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      disabled={imageUploading}
                      onChange={(e) => handleImageUpload(e, "contentImageURL")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-5">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
