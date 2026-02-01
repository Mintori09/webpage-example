<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class UserController extends Controller
{
    use ApiResponser;

    public function login(Request $request): JsonResponse
    {
        $validated = $request->validate([
            "email" => "required|string|email",
            "password" => "required|string",
        ]);

        $user = User::query()->where("email", $validated["email"])->first();

        if (!$user || !Hash::check($validated["password"], $user->password)) {
            return $this->errorResponse(
                "Credentials do not match",
                ResponseAlias::HTTP_UNAUTHORIZED,
            );
        }

        $token = $user->createToken("auth_token")->plainTextToken;

        return $this->successResponse(
            [
                "token" => $token,
                "user" => $user,
            ],
            "Login successfully",
        );
    }

    public function registry(Request $request): JsonResponse
    {
        $validated = $request->validate([
            "name" => ["required", "string", "max:255"],
            "email" => [
                "required",
                "string",
                "email",
                "max:255",
                "unique:users",
            ],
            "password" => ["required", "confirmed", Rules\Password::defaults()],
        ]);

        $user = User::query()->create([
            "name" => $validated["name"],
            "email" => $validated["email"],
            "password" => Hash::make($validated["password"]),
        ]);

        $token = $user->createToken("auth_token")->plainTextToken;

        return $this->successResponse(
            [
                "token" => $token,
                "user" => $user,
            ],
            "Register successfully",
            Response::HTTP_CREATED,
        );
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return $this->successResponse(null, "Logged out successfully");
    }

    public function updatePassword(Request $request): JsonResponse
    {
        $validated = $request->validate([
            "old_password" => ["required", Rules\Password::defaults()],
            "new_password" => [
                "required",
                "confirmed",
                Rules\Password::defaults(),
            ],
        ]);

        $user = $request->user();

        if (!Hash::check($validated["old_password"], $user->password)) {
            return $this->errorResponse(
                "Old password does not match",
                ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
            );
        }

        $user->update([
            "password" => Hash::make($validated["new_password"]),
        ]);

        return $this->successResponse(null, "Update password successfully");
    }

    public function profile(Request $request): JsonResponse
    {
        return $this->successResponse(
            $request->user(),
            "User profile retrieved successfully",
        );
    }
}
