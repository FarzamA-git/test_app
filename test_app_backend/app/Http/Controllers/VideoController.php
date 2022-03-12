<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function add(Request $request)
    {
        try {
            $validated = Validator::make(
                $request->all(),
                [
                    'url'        =>      'required',
                ]
            );
            if ($validated->failed()) {
                return response()->json(['status' => false, "message" => $validated->getMessageBag()]);
            }
            $video = Video::create([
                'url' => $request->url
            ]);
            return response()->json(['status' => true, "message" => "Video Created Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
    public function getVideo()
    {
        try {
            $video = Video::all();
            return response()->json(['status' => true, "message" => "Video Listed Successfully", 'result' => $video]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $video = Video::find($id);
            $video->update([
                'url' => $request->url,
            ]);
            return response()->json(['status' => true, "message" => "Video Updated Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $video = Video::find($id);
            $video->delete();
            return response()->json(['status' => true, "message" => "Video Deleted Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
}
