import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SubmitButton from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { deleteBanner } from '@/app/actions';

const DeleteBannerRoute = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Are you absolutely sure?</CardTitle>
            <CardDescription>
              This action cannot be undone. This will permanently delete this
              product and remove all data from our servers.
            </CardDescription>
          </CardHeader>
          <CardFooter className="w-full flex justify-between">
            <Button variant={"secondary"} asChild>
              <Link href="/dashboard/banner">Cancel</Link>
            </Button>
            <form action={deleteBanner}>
              <input type="hidden" name="bannerId" value={params.id} />
              <SubmitButton variant={"destructive"} text="Delete Product" />
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default DeleteBannerRoute