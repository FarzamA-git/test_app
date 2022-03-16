<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\PlayListController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('create', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('showCourse', [CourseController::class, 'getCourse']);
Route::get('showVideo', [VideoController::class, 'getVideo']);

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::post('logout', [UserController::class, 'logout']);
    Route::get('show', [UserController::class, 'getUser']);
    Route::post('update/{id}', [UserController::class, 'update']);
    Route::delete('delete/{id}', [UserController::class, 'delete']);

    Route::post('add', [CourseController::class, 'add']);
    Route::post('updateCourse/{id}', [CourseController::class, 'update']);
    Route::delete('deleteCourse/{id}', [CourseController::class, 'delete']);

    Route::post('addPlaylist', [PlaylistController::class, 'add']);
    Route::get('showPlaylist', [PlaylistController::class, 'getPlaylist']);
    Route::post('updatePlaylist/{id}', [PlaylistController::class, 'update']);
    Route::delete('deletePlaylist/{id}', [PlaylistController::class, 'delete']);

    Route::post('addVideo', [VideoController::class, 'add']);
    Route::post('updateVideo/{id}', [VideoController::class, 'update']);
    Route::delete('deleteVideo/{id}', [VideoController::class, 'delete']);
});
