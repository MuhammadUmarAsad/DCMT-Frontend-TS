"use client";

import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
};

const interfaces = [
  {
    value: "ethernet0",
    label: "Ethernet0",
  },    
  { value: "ethernet4", label: "Ethernet4" },
  { value: "ethernet8", label: "Ethernet8" },
  { value: "ethernet12", label: "Ethernet12" },
  { value: "ethernet16", label: "Ethernet16" },
  { value: "ethernet20", label: "Ethernet20" },
  { value: "ethernet24", label: "Ethernet24" },
  { value: "ethernet28", label: "Ethernet28" },
  { value: "ethernet32", label: "Ethernet32" },
  { value: "ethernet36", label: "Ethernet36" },
  { value: "ethernet40", label: "Ethernet40" },
  { value: "ethernet44", label: "Ethernet44" },
  { value: "ethernet48", label: "Ethernet48" },
  { value: "ethernet52", label: "Ethernet52" },
  { value: "ethernet56", label: "Ethernet56" },
  { value: "ethernet60", label: "Ethernet60" },
  { value: "ethernet64", label: "Ethernet64" },
  { value: "ethernet68", label: "Ethernet68" },
  { value: "ethernet72", label: "Ethernet72" },
  { value: "ethernet76", label: "Ethernet76" },
  { value: "ethernet80", label: "Ethernet80" },
  { value: "ethernet84", label: "Ethernet84" },
  { value: "ethernet88", label: "Ethernet88" },
  { value: "ethernet92", label: "Ethernet92" },
];
// const statuses: Status[] = [
//   {
//     value: "backlog",
//     label: "Backlog",
//   },
//   {
//     value: "todo",
//     label: "Todo",
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//   },
//   {
//     value: "done",
//     label: "Done",
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//   },
// ];

// export function InterfaceMappings() {
//   const [open0, setOpen0] = React.useState(false);
//   const [selectedStatus0, setSelectedStatus0] = React.useState<Status | null>(
//     null
//   );

//   return (
//     <div>
//     <div className="flex items-center space-x-4">
//       <p className="text-sm text-muted-foreground">Status</p>
//       <Popover open={open0} onOpenChange={setOpen0}>
//         <PopoverTrigger asChild>
//           <Button variant="outline" className="w-[150px] justify-start">
//             {selectedStatus0 ? <>{selectedStatus0.label}</> : <>+ Set status</>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="p-0" side="right" align="start">
//           <Command>
//             <CommandInput placeholder="Change status..." />
//             <CommandList>
//               <CommandEmpty>No results found.</CommandEmpty>
//               <CommandGroup>
//                 {statuses.map((status) => (
//                   <CommandItem
//                     key={status.value}
//                     value={status.value}
//                     onSelect={(value) => {
//                       setSelectedStatus0(
//                         statuses.find((priority) => priority.value === value) ||
//                           null
//                       );
//                       setOpen0(false);
//                     }}
//                   >
//                     {status.label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>

    
//     </div>
//   );
// }


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { toast } from "@/components/ui/use-toast"

// const languages = [
//   { label: "English", value: "en" },
//   { label: "French", value: "fr" },
//   { label: "German", value: "de" },
//   { label: "Spanish", value: "es" },
//   { label: "Portuguese", value: "pt" },
//   { label: "Russian", value: "ru" },
//   { label: "Japanese", value: "ja" },
//   { label: "Korean", value: "ko" },
//   { label: "Chinese", value: "zh" },
// ] as const

const FormSchema = z.object({
    ethernet0: z.enum(["ethernet0"], {
      required_error: "Please select the interface0.",
    }),
    ethernet4: z.enum(["ethernet4"], {
      required_error: "Please select the interface4.",
    }),
    ethernet8: z.enum(["ethernet8"], {
      required_error: "Please select the interface8.",
    }),
    ethernet12: z.enum(["ethernet12"], {
      required_error: "Please select the interface12.",
    }),
  });
  
// const FormSchema = z.object({
//     ethernet0: z.string({
//     required_error: "Please select the interface0.",
//   }),
//   ethernet4: z.string({
//     required_error: "Please select the interface4.",
//   }),
//   ethernet8: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet12: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet16: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet20: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet24: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet28: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet32: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet36: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet40: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet44: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet48: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet52: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet56: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet60: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet64: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet68: z.string({
//     required_error: "Please select the interface.",
//   }),
//   ethernet72: z.string({
//     required_error: "Please select the interface.",
//   }),

// })

export function InterfaceMappings() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [ethernet0, setethernet0] = useState("");
  const [ethernet4, setethernet4] = useState("");
  const [ethernet8, setethernet8] = useState("");
  const [ethernet12, setethernet12] = useState("");


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  const interfaceNames = ['ethernet0', 'ethernet4', 'ethernet8', 'ethernet12', /* add more interface names as needed */];

  return (
    // Assuming you have an array of interface names

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    {interfaceNames.map((interfaceName, index) => (
      <div key={index} className="flex justify-start">
        <FormField
          control={form.control}
        name={interfaceName as "ethernet0" | "ethernet4" | "ethernet8" | "ethernet12"}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>ethernet0/0/{index}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[400px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? interfaces.find(
                            (selectedInterface) => selectedInterface.value === field.value
                          )?.label
                        : "Select Interface"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search interface..."
                      className="h-9"
                    />
                    <CommandEmpty>No interface found.</CommandEmpty>
                    <CommandGroup>
                      {interfaces.map((selectedInterface) => (
                        <CommandItem
                            value={selectedInterface.label}
                            key={selectedInterface.value}
                            onSelect={() => {
                                form.setValue(interfaceName as "ethernet0" | "ethernet4" | "ethernet8" | "ethernet12", selectedInterface.value as "ethernet0" | "ethernet4" | "ethernet8" | "ethernet12");
                                setEthernet(interfaceName, selectedInterface.value);
                            }}
                        >
                          {selectedInterface.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedInterface.value === field.value
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
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    ))}
  </form>
</Form>
  )
}