"use server";

export async function followUserAction(userId: string) {
    // Simulate DB delay
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`Followed user ${userId}`);
    return { success: true };
}

