"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import login from "@/actions/login";
// import { PasswordToggleInput } from "@/components/PasswordToggleInput";

import useHandleSubmitLogin from "@/customHooks/useHandleSubmitLogin";

// $ Importing the form schema
import { LoginSchema } from "@/schemas/index";
import * as z from "zod";

const showPassword: boolean = false;

// $ Importing the Form Components
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

const LoginForm = () => {
  const { error, form, isPending, success, handleSubmit } =
    useHandleSubmitLogin();

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-8 rounded-lg max-w-xl text-white"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mt-auto space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="john.doe@email.com"
                    className="text-white dark:text-gray-600 placeholder:text-white dark:placeholder-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="password"
                  className="placeholder:tracking-wider"
                >
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={isPending}
                    placeholder="********"
                    className="text-white dark:text-gray-600 placeholder:text-white dark:placeholder-gray-500 focus:border-blue-300"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            className="bg-[#3a7ff9] dark:text-white hover:bg-blue-400"
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
