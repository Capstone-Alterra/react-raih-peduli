import React from "react";
import { Input } from "./ui/input";
import fotoicon from "@/assets/icons/foto-icon.svg";
import { Label } from "./ui/label";

function InputFile(props) {
  const { word, id, name } = props;
  return (
    <div classname="mb-[18px]">
      <Label/>
      <div className="relative h-20 rounded-lg border border-input flex justify-center items-center">
        <div className="absolute">
          <div className="flex items-center">
            <img src={fotoicon} className="mr-1"/>
            <span className="block text-gray-400 font-normal">{word}</span>
          </div>
        </div>
        <Input
          type="file"
          className="h-full w-full opacity-0"
          name={name}
          id={id}
        />
      </div>
    </div>
  );
}

export default InputFile;