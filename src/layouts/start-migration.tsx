"use client";

import { Input } from "@/components/ui/input"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
});

export function StartMigration() {
  const [vendorName, setVendorName] = useState("");
  const [switchModel, setSwitchModel] = useState("");

  const handleVendorNameChange = (event: any) => {
      setVendorName(event);
      setSwitchModel("");
    }

  const handleSwitchChange = (event: any) => {
    setSwitchModel(event);
  };

  console.log(vendorName);
  console.log(switchModel);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Vendor Name</FormLabel>
              <Select
                onValueChange={(field) => handleVendorNameChange(field)}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Dell" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="Dell">Dell</SelectItem>
                  <SelectItem value="Huawei">Huawei</SelectItem>
                  <SelectItem value="Cisco">Cisco</SelectItem>
                  {/* <SelectItem value="nuxt">Nuxt.js</SelectItem> */}
                </SelectContent>
              </Select>

              <Popover>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Searcframeworkh ..."
                      className="h-9"
                    />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue("language", language.value);
                          }}
                        >
                          {language.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the network switch vendor.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Switch Model</FormLabel>
              <Select
                onValueChange={(field) => handleSwitchChange(field)}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                <SelectTrigger id="vendor">
                  <SelectValue placeholder="Select vendor first" />
                </SelectTrigger>
                </FormControl>

                {vendorName === "Dell" && (
                  <SelectContent position="popper">
                    <SelectItem value="Dell z switch">Dell z switch</SelectItem>
                    <SelectItem value="Dell p switch">Dell p switch</SelectItem>
                    <SelectItem value="Dell s5 switch">
                      Dell s5 switch
                    </SelectItem>
                    <SelectItem value="Dell s4 switch">
                      Dell s4 switch
                    </SelectItem>
                  </SelectContent>
                )}
                {vendorName === "Huawei" && (
                  <SelectContent position="popper">
                    <SelectItem value="Huawei 1">Huawei 1</SelectItem>
                    <SelectItem value="Huawei 2">Huawei 2</SelectItem>
                    <SelectItem value="Huawei 3">Huawei 3</SelectItem>
                    <SelectItem value="Huawei 4">Huawei 4</SelectItem>
                  </SelectContent>
                )}
                {vendorName === "Cisco" && (
                  <SelectContent position="popper">
                    <SelectItem value="Cisco 1">Cisco 1</SelectItem>
                    <SelectItem value="Cisco 2">Cisco 2</SelectItem>
                    <SelectItem value="Cisco 3">Cisco 3</SelectItem>
                    <SelectItem value="Cisco 4">Cisco 4</SelectItem>
                    <SelectItem value="Cisco 5">Cisco 4</SelectItem>
                    <SelectItem value="Cisco 6">Cisco 4</SelectItem>
                  </SelectContent>
                )}
              </Select>
              <Popover>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Searcframeworkh ..."
                      className="h-9"
                    />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue("language", language.value);
                          }}
                        >
                          {language.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select switch model by the vendor.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

    <div className="grid content-center max-w-sm    gap-2">
      <Label htmlFor=" align-content: center Input Database config">Input Database config</Label>
      <Input id="xml" type="file" />
    </div>
  

                                
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
