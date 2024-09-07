"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AiChatSession } from "@/configs/AiModal";
import { useUser } from "@clerk/nextjs";
import { JsonForms } from "@/configs/schema";
import { db } from "@/configs";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const PROMPT=`on the basis of the description, Please generate a JSON object for a form with the following structure:

- \`formTitle\`: The title of the form.
- \`formSubheading\`: A brief subheading for the form.
- \`formFields\`: An array of field objects. Each field object should have the following properties:
  - \`formName\`: The name of the form field (used as the \`name\` attribute in the form).
  - \`formLabel\`: The label text for the form field.
  - \`fieldType\`: The type of the form field. This can be \`text\`, \`email\`, \`tel\`, \`select\`, \`date\`, \`time\`, \`textarea\`, or \`radio\`.
  - \`placeholderName\`: A placeholder text for the form field (if applicable).
  - \`fieldRequired\`: A boolean indicating if the form field is required.
  - \`options\`: An array of options for select and radio fields (if applicable).
  - \`isRequired\`: A boolean indicating if the field is required (only applicable for radio fields).

- \`formSubmitButton\`: The text for the submit button.

For example, generate a JSON for a form titled "Student Registration" with fields for first name, last name, email, phone number, program, year, and gender.
`;
function CreateForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState();
  const {user}=useUser()
  const route=useRouter()


  const onCreateForm=async()=>{
    console.log(userInput)
    setLoading(true)
    const result = await AiChatSession.sendMessage("Description"+userInput+PROMPT)
    console.log(result.response.text())
    if(result.response.text()){
        const resp=await db.insert(JsonForms)
        .values({
            jsonform:result.response.text(),
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format("DD/MM/yyyy")
        }).returning({id:JsonForms.id})
        console.log("new form id",resp[0].id)
        if(resp[0].id){
          route.push('/edit-form/'+resp[0].id)
        }
        setLoading(false)
    }
    setLoading(false)
  }
  return (
    <div>
      <Button onClick={() => setOpenDialog(true)}>Create AI Form</Button>

      <Dialog open={openDialog}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-2"
                placeholder="Write a small description about your form... "
                onChange={(event) => setUserInput(event.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button onClick={()=>setOpenDialog(false)} variant="destructive">Cancel</Button>
                <Button disabled={loading} onClick={()=>onCreateForm()}>
                  {loading?<Loader2 className="animate-spin" />:"Create"}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateForm;
