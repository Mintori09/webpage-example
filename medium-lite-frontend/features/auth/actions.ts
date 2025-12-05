// src/features/auth/actions.ts
"use server";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    // Logic Server-side xử lý đăng nhập
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Login attempt:", email);
    // Gọi API thực tế ở đây
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập delay
}

export async function loginWithGoogleAction() {
    // Logic redirect tới Google Provider
    console.log("Login with Google");
}

// Giả lập xử lý đăng ký
export async function registerUserAction(formData: FormData) {
    const rawFormData = {
        fullName: formData.get("full-name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirm-password"),
    };

    // Tại đây bạn sẽ gọi API backend hoặc DB
    console.log("Registering user:", rawFormData);

    // Giả lập delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect hoặc return state
    redirect("/dashboard");
}

export async function resetPasswordAction(formData: FormData) {

}
