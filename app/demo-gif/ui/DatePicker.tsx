"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  time: string;
}

export function DatePicker({ time }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // 加 1 並補零
  const day = "01"; // 當月的第一天
  const hours = "00";
  const minutes = "00";
  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;

  return (
    <Popover>
      <PopoverTrigger asChild className=" rounded-2xl">
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-between text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{`${time ? time : "null"}`}</span>
          )}
          <CalendarIcon className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
