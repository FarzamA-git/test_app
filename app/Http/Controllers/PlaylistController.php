<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PlaylistController extends Controller
{
    public function add(Request $request)
    {
        try {
            $validated = Validator::make(
                $request->all(),
                [
                    'name'        =>      'required|unique:playlists',
                ]
            );
            if ($validated->failed()) {
                return response()->json(['status' => false, "message" => $validated->getMessageBag()]);
            }
            $playList = Playlist::create([
                'name' => $request->name,
                'user_id'=>Auth::id()
            ]);
            $video_ids=$request->video_ids;
            $playList->videos()->sync($video_ids);
            return response()->json(['status' => true, "message" => "Playlist Created Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
    public function getPlayList()
    {
        try {
            $playList = Playlist::with('videos')->get();
            return response()->json(['status' => true, "message" => "Course Listed Successfully", 'result' => $playList]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $playList = Playlist::find($id);
            $playList->update([
                'name' => $request->name,
            ]);
            return response()->json(['status' => true, "message" => "playList Updated Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $playList = Playlist::find($id);
            $playList->delete();
            return response()->json(['status' => true, "message" => "playList Deleted Successfully"]);
        } catch (\Exception $e) {
            return response()->json(['status' => false,  $e->getMessage()]);
        }
    }
}
