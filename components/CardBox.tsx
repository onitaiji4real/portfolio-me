import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useSWR from "swr";
import { issueFetcher } from "@/lib/utils/fetcher";
import Image from "next/image";

export default function CardBox() {
  type Issue = {
    title: string;
    body: string;
    id: number;
  };
  const githubIssueUrl =
    "https://api.github.com/repos/onitaiji4real/blog-pages-db/issues";

  const { data, error, isLoading } = useSWR<Issue[]>(
    githubIssueUrl,
    issueFetcher
  );

  error && <div>Failed to load</div>;
  !data || (isLoading && <div>isLoading</div>);

  return (
    <>
      <div className="flex-col">
        {data &&
          data.map((issue, idx) => (
            <div key={idx} className="w-full">
              <Card className="relative">
                <CardHeader>
                  <CardTitle>{issue.title}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>

                <div className=" absolute top-0 right-0 max-w-20 max-h-full">
                  <Image
                    src={"/project-1.png"}
                    alt="n"
                    className=""
                    width={1920}
                    height={1080}
                    objectFit="cover"
                  />
                </div>
              </Card>
            </div>
          ))}
      </div>
      {/* {data &&
        data.map((issue, idx) => (
          <div key={idx} className="flex justify-end items-center py-2">
            <div>
              <Card className="h-3/4 w-3/4">
                <CardHeader>
                  <CardTitle>{issue.title}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        ))} */}
    </>
  );
  //   return <div className=" flex justify-center items-center py-10">Card</div>;
}
