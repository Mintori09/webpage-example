<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    use ApiResponser;

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $user = auth()->user();
        $file = $request->file('image');

        $fileName = time() . '_' . Str::random(10) . '.' . $file->getClientOriginalExtension();

        $path = "uploads/editor/user_{$user->id}";

        $filePath = $file->storeAs($path, $fileName, 'public');

        $url = Storage::disk('public')->url($filePath);

        return $this->successResponse([
            'url' => $url,
            'path' => $filePath
        ], 'Image uploaded successfully');
    }
}
