import { useState } from 'react'
import { Button } from "@/UI/button"
import { Input } from "@/UI/input"
import { Label } from "@/UI/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/UI/form"
import { RadioGroup, RadioGroupItem } from "@/UI/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useLetterStore from '@/modules/utils/store'
import formFields from '@/modules/formFields.json'
import { FormFieldTypes } from '@/types/types'

const formSchema = z.object({
  username: z.string().trim().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  company: z.string().trim().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  desiredSalary: z.string(),
  skills: z.string().min(2, {
    message: "Write at least 10 words.",
  }),
  additionalSkills: z.string().min(2, {
    message: "Write at least 10 words",
  }),
  templateType: z.enum(["default", "large", "small"], {
    required_error: "Please select a template type.",
  }),
})

function CreateForm() {
  const { updateFormData, generateLetter } = useLetterStore();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      position: "",
      company: "",
      desiredSalary: "",
      skills: "",
      additionalSkills: "",
      templateType: 'default',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true)
    updateFormData(values)
    generateLetter()
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 space-y-5">
      <FormField
          key="templateType"
          control={form.control}
          name="templateType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Template Type</FormLabel>
              <FormControl>
                <RadioGroup
                  {...field}
                  className="space-y-2"
                  value={field.value}
                  onValueChange={field.onChange} 
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="r2" />
                    <Label htmlFor="r2">Large</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="r3" />
                    <Label htmlFor="r3">Small</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Select the size of letter you want to generate.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {(formFields as FormFieldTypes[]).map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input placeholder={field.placeholder} {...formField} />
                </FormControl>
                {field?.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={isSubmitted}>Submit</Button>
      </form>
    </Form>
  )
}

export default CreateForm



