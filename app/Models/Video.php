<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable=[
        'url'
    ];

    function playlists() {
        return $this->belongsToMany(Playlist::class,VideoPlaylist::class,'playlist_id','video_id');
    }
}
