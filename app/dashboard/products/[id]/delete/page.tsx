import { deleteProduct } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const DeleteRoute = ({ params }: { params: { id: string } }) => {
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
              <Link href="/dashboard/products">Cancel</Link>
            </Button>
            <form action={deleteProduct}>
              <input type="hidden" name="productId" value={params.id} />
              <SubmitButton variant={"destructive"} text="Delete Product" />
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default DeleteRoute;
