import { TextAreaLabel } from "@/components/textarea-with-label";
import { InputLabel } from "@/components/input-with-label";
import { Calendar as CalendarIcon } from "lucide-react";
import ArrowLeft from "@/assets/icons/arrow-left";
import { Calendar } from "@/components/ui/calendar";
import ProfileIcon from "@/assets/icons/profile";
import { Button } from "@/components/ui/button";
import InputFile from "@/components/input-file";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React, { useState } from "react";
import { cn } from "@/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MultipleSelect, SelectForm } from "@/components/multiple-select";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import VolunterForm from "./components/form";

function DetailVolunter() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit");
  let action = "detail";

  if (isEdit) {
    action = "edit";
  }

  return (
    <Layout>
      <Header titleHeader="Lowongan Relawan" />
      <FormLayout>
        <FormHeader id={id} title={action} />
        <VolunterForm action={action} id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailVolunter;
