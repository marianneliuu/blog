"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage } from "@/server/upload-image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().nonempty(),
  author: z.string().nonempty(),
  description: z.string().nonempty(),
  content: z.string().nonempty(),
  playButtonLabel: z.string().nonempty(),
  imageURL: z.string().nonempty(),
  contentImageURL: z.string().nonempty(),
});

export default function Publish() {
  const [imageUploading, setImageUploading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex items-start justify-center">
      <div className="flex flex-col justify-center items-center min-w-[600px] w-1/2">
        <h1 className="text-lg font-extralight mb-7">Publish!</h1>
        <Form {...form}>
          <form className="w-full space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
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
                  <FormLabel>Play Button</FormLabel>
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="file"
                      disabled={imageUploading}
                      onChange={(e) => handleImageUpload(e, "imageURL")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
