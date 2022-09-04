<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CuteLinks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cute_links', function (Blueprint $table) {
            $table->id();
            $table->char('random_code', 2)->comment('A 2 character code to prevent or slowdown URL Guessing');
            $table->string('url', 2083)->comment('The real url'); // 2083 is the max number of characters in IE browser according to this thread: https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
            $table->char('url_hash', 32)->comment('The MD5 has of the url for quick searching');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cute_links');
    }
}
