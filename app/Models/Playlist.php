<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;

    protected $fillable=[
        'name','user_id'
    ];

    function videos() {
        return $this->belongsToMany(Video::class,VideoPlaylist::class,'playlist_id','video_id');
    }

    function users() {
        return $this->belongsTo(User::class,'user_id');
    }
}
