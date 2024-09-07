import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FieldEdit from "./FieldEdit";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import moment from "moment";
import { useToast } from "@/components/ui/use-toast";
import { SignInButton, useUser } from "@clerk/nextjs";

function FormUi({jsonForm,selectedTheme,selectedStyle,onFieldUpdate,deleteField,editable = true,formId = 0,enabledSignIn = false,})
 {
  const { user } = useUser();
  const { toast } = useToast();
  const [formData, setFormData] = useState();
  let formRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const result = await db.insert(userResponses).values({
      jsonResponse: formData,
      createdAt: moment().format("DD/MM/yyyy"),
      formRef: formId,
    });

    if (result) {
      formRef.reset();
      toast({
        title: "Form Saved",
        message: "Your form has been saved successfully",
      });
    } else {
      toast({ title: "Error", message: "Something went wrong" });
    }
  };

  const handleCheckboxChange = (fieldName, itemName, value) => {
    const list = formData?.[fieldName] ? formData?.[fieldName] : [];

    if (value) {
      list.push({
        label: itemName,
        value: value,
      });
      setFormData({
        ...formData,
        [fieldName]: list,
      });
    } else {
      const result = list.filter((item) => item.label == itemName);
      setFormData({
        ...formData,
        [fieldName]: result,
      });
    }
  };

  return (
    <form
      ref={(e) => (formRef = e)}
      onSubmit={onFormSubmit}
      className="border p-5 md:w-[600px] rounded-lg"
      data-theme={selectedTheme}
      style={{
        boxShadow: selectedStyle?.key == "boxshadow" && "5px 5px 0px black",
        border: selectedStyle?.key == "border" && selectedStyle.value,
      }}
    >
      <h2 className="font-bold text-center text-2xl">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">
        {jsonForm?.formSubheading}
      </h2>
      {jsonForm?.formFields?.map((field, index) => (
        <div key={index} className="flex items-center gap-2">
          {field.fieldType === "select" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.formLabel}</label>
              <Select
                onValueChange={(v) => handleSelectChange(field.formName, v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={field.placeholderName} />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((item, idx) => (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : field.fieldType === "radio" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.formLabel}</label>
              <RadioGroup>
                {field.options.map((option, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option}
                      id={option}
                      onClick={() =>
                        handleSelectChange(field.formName, item.label)
                      }
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : field.fieldType === "checkbox" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">
                {field?.formLabel}
              </label>
              {field?.options?.map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <Checkbox
                    value={item.value}
                    onCheckedChange={(v) =>
                      handleCheckboxChange(field?.formLabel, item.label, v)
                    }
                  />
                  <Label htmlFor={item.value}>{item.label}</Label>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">
                {field.formLabel}
                {field.fieldRequired && <span className="text-red-500">*</span>}
              </label>
              <Input
                type={field?.fieldType}
                placeholder={field.placeholderName || ""}
                name={field.formName}
                required={field?.fieldRequired}
                className="bg-tansparent"
                onChange={handleInputChange}
              />
            </div>
          )}
          {editable && (
            <div>
              <FieldEdit
                defaultValue={field}
                onUpdate={(value) => onFieldUpdate(value, index)}
                deleteField={() => deleteField(index)}
              />
            </div>
          )}
        </div>
      ))}
      {!enabledSignIn ? (
        <button type="submit" className="btn btn-primary">
          {jsonForm?.formSubmitButton || "Submit"}
        </button>
      ) : isSignedIn ? (
        <button type="submit" className="btn btn-primary">
          {jsonForm?.formSubmitButton || "Submitt"}
        </button>
      ) : (
        <button>
          <SignInButton>Sign In before submit</SignInButton>
        </button>
      )}
      
    </form>
  );
}

export default FormUi;
