"use client";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

type ButtonProps = {
  className: string;
};

const CVButton = ({ className }: ButtonProps) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleDownload = async () => {
    // $ S3 Bucket details
    const bucketURL = process.env.NEXT_PUBLIC_S3_BUCKET_URL as string;
    const file_Name = "fabian_cv_latest.pdf";
    const fileDownloadURL = `${bucketURL}/${file_Name}`;

    // $ Download Data and tim displayed in the toast
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

    try {
      // Fetch the file
      const response = await axios.get(fileDownloadURL, {
        responseType: "blob", // To handle binary data
      });

      // $ Create a blob URL
      const blob = new Blob([response.data], { type: "application/pdf" });
      const blobURL = window.URL.createObjectURL(blob);

      // $ Trigger file download
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = file_Name;
      link.click();

      // $ Clean up the blob URL
      window.URL.revokeObjectURL(blobURL);

      // $ Show success toast
      toast({
        title: "Success: File Downloaded",
        description: `CV has been downloaded successfully on ${formattedDate}`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Error downloading file:", error);

      // $ Show error toast
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem downloading my CV.",
        duration: 3000,
      });
    }
  };
  return (
    <>
      {isPending ? (
        <Button disabled={isPending} variant="default" className={className}>
          <Loader2 className="animate-spin mr-2" />
          Please Wait...
        </Button>
      ) : (
        <Button
          variant="default"
          disabled={isPending}
          className={className}
          onClick={() => startTransition(handleDownload)}
        >
          <Download className="mr-2" />
          Download CV
        </Button>
      )}
    </>
  );
};

export default CVButton;
