<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    use ApiResponser;
    public function login(Request $request): JsonResponse {
        $attr = $request->validate([
            'email' => 'required|string|email',
            "password" => 'required|string'
        ]);
        $user = User::where('email', $attr['email'])->first();

        if (!$user || Hash::check($attr['password'] . $user->password, $user->password === false) ){
            return $this->errorResponse('Credentials do not match', Response::HTTP_UNAUTHORIZED);
        }

        $data = [
            'token' => $user->createToken($attr['email'])->plainTextToken,
            'user' => $user
        ];
        return $this->successResponse($data, Response::HTTP_OK);
    }

    public function registry(Request $request): JsonResponse {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken($request->email)->plainTextToken;

        return $this->successResponse([
            'token' => $token,
            'user' => $user,
            'message' => "Register successfully"
        ], Response::HTTP_CREATED);
    }
//    public function logout(Request $request): JsonResponse {
//        // Kiểm tra xem user có đang dùng token hợp lệ không
//        if ($request->user()) {
//            // Chỉ xóa token hiện tại đang sử dụng
//            $request->user()->currentAccessToken()->delete();
//
//            return $this->successResponse([
//                'message' => 'Logged out successfully'
//            ], Response::HTTP_OK);
//        }
//
//        return $this->errorResponse('Unauthenticated', Response::HTTP_UNAUTHORIZED);
//    }

    public function logout(Request $request) : JsonResponse {
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
            return $this->successResponse([
                'message' => "Logged out successfully"
            ], Response::HTTP_OK);
        }
        return $this->errorResponse([
            'message' => 'Unauthenticated'
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function profile(Request $request): JsonResponse {
        return $this->successResponse($request->user(), Response::HTTP_OK);
    }
}
