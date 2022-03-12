<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    public function add(Request $request){
        try{
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
            $course=Course::create([
                'name'=>$request->name,
                'slug'=>Str::slug($request->name,'-'),
                'description'=>$request->description
            ]);
            return response()->json(['status' => true, "message" => "Course Created Successfully"]);
        }catch(\Exception $e){
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
    public function getCourse()
    {
        try {
            $courses = Course::all();
            return response()->json(['status' => true, "message" => "Course Listed Successfully", 'result' => $courses]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $course = Course::find($id);
            $course->update([
                'name'=>$request->name,
                'slug'=>Str::slug($request->name,'-'),
                'description'=>$request->description
            ]);
            return response()->json(['status' => true, "message" => "Course Updated Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $course = Course::find($id);
            $course->delete();
            return response()->json(['status' => true, "message" => "Course Deleted Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
}
