<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validated = Validator::make(
            $request->all(),
            [
                'name'              =>      'required|string|max:20',
                'email'             =>      'required|email|unique:users,email',
                'password'          =>      'required|alpha_num|min:6',
                'confirm_password'  =>      'required|same:password',
                'address'           =>      'required|string'
            ]
        );
        if ($validated->failed()) {
            return response()->json(['status' => false, "message" => $validated->getMessageBag()]);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'address' => $request->address,
        ]);
        $course_ids=$request->course_ids;
        $user->courses()->sync($course_ids);
        
        return response()->json(['status' => true, "message" => "User Created Successfully"]);
    }

    public function login(Request $request)
    {
        $validated = Validator::make(
            $request->all(),
            [
                'email'             =>      'required|email|unique:users,email',
                'password'          =>      'required|alpha_num|min:6',
            ]
        );
        if ($validated->failed()) {
            return response()->json(['status' => false, "message" => $validated->getMessageBag()]);
        }
        $credentials = $request->only('email', 'password');
        try {
            if (!JWTAuth::attempt($credentials)) {
                return response()->json(['status' => false, "message" => "Email or password not correct"]);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' => $user->id,
            'email' => $user->email,
        ])->attempt($credentials);
        return response()->json(['data' => $data, 'status' => true, "message" => "Email or password not correct"]);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    public function getUser()
    {
        try {
            $users = User::with('courses','playlists')->get();
            return response()->json(['status' => true, "message" => "User Listed Successfully", 'result' => $users]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $user = User::find($id);
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'address' => $request->address
            ]);
            return response()->json(['status' => true, "message" => "User Updated Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $user = User::find($id);
            $user->delete();
            return response()->json(['status' => true, "message" => "User Deleted Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
}
