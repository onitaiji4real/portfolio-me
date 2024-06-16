import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectUI() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-xl ">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="A">屏東縣歸來廠</SelectItem>
          <SelectItem value="B">台東廠</SelectItem>
          <SelectItem value="C">台南縣歸來廠</SelectItem>
          <SelectItem value="D">高雄縣歸來廠</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
