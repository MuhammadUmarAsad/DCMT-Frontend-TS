"use client";
import './protocol-selection.css';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
ToastAction

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const items = [
  {
    id: "vlan",
    label: "VLAN",
  },
  {
    id: "port-channel",
    label: "Port-Channel",
  },
  {
    id: "interface",
    label: "Interface",
  },
  {
    id: "breakout-port",
    label: "Breakout-Port",
  },
  {
    id: "lldp",
    label: "LLDP",
  },
  {
    id: "snpm",
    label: "SNPM",
  },
  {
    id: "icmb",
    label: "ICMB",
  },
  {
    id: "evpn",
    label: "E-VPN",
  },
  {
    id: "vpn",
    label: "VPN",
  },
  {
    id: "bgp",
    label: "BGP",
  },
  {
    id: "mac vlan",
    label: "Mac-VLAN",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function ProtocolSelection() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  async function sendDataToDjango(data:z.infer<typeof FormSchema>) {
    const response = await fetch('http://your-django-backend/api/endpoint/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        // Include any necessary authentication headers (e.g., CSRF token)
      },
      body: JSON.stringify(data) 
    });
  
    if (response.ok) {
      // Handle successful response (e.g., display a success message)
      console.log('Data sent successfully!');
    } else {
      // Handle unsuccessful response (e.g., display an error message)
      console.error('Error sending data:', response.status);
    }
  }
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    sendDataToDjango(data); 

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      action: (

        <ToastAction altText="submitted Data is as follows"> 
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </ToastAction>
        
      )
    });
  }

  return (
    <div className="protocol-1">
      <div className="protocol-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Protocol Selection
                    </FormLabel>
                    <FormDescription>
                      Select the Protocols you want to convert.
                    </FormDescription>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="btn-1" type="submit">
              <a href="/protocolselection">Next</a>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
