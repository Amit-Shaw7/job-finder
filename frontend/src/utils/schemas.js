import { z } from "zod";

export const loginSchema = z
    .object({
        email: z.string().email("Invalid email").min(1, "Email is required"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have more than 8 characters"),
    })

export const applySchema = z
    .object({
        email: z.string().email("Invalid email").min(1, "Email is required"),
        name : z.string().min(0, "Name is required"),  
        note : z.string().min(0, "Note is required"),
    })

export const signupSchema = z
    .object({
        email: z.string().email("Invalid email").min(1, "Email is required"),
        name: z.string().min(0, "Name is required"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have more than 8 characters"),
        confirmPassword: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });