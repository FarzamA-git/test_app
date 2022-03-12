<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideoPlaylistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('video_playlists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_id')->nullable()->references('id')->on('videos')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->foreignId('playlist_id')->nullable()->references('id')->on('playlists')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('video_playlists');
    }
}
