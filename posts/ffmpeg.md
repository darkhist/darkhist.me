---
title: Creating Music Videos with FFmpeg
date: '2020-11-16'
---

I listen to a lot of lo-fi hop-hop. You know the kind, infinitely-looping GIFs from anime films accompanied by chill beats to relax/study to. Yeah, those. I had some audio files laying around and a collection of GIFs, so I used FFmpeg to make a few of music videos

> What’s FFmpeg?

According to the [FFmpeg website](https://ffmpeg.org/), FFmpeg is “a complete, cross-platform solution to record, convert and stream audio and video”. Today, we’ll be using it to create a music video from a GIF and an MP3!

## Getting Started

Before we get started, I’d like to point out that I’m using a MacBook Pro running OSX Mojave 10.14.5. If you’re using a different OS, you can install FFmpeg by [visiting their Download page](https://ffmpeg.org/download.html).

Today, we’ll be using Homebrew, the popular package manager for OSX, to install FFmpeg

Open your Terminal to get started!

If you don’t have Homebrew, you can get it by running

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

After you’ve installed Homebrew, you can get FFmpeg by running `brew install ffmpeg`

Make sure you have the Command Line Developer Tools installed!
If you don't have them, you can get them by running `xcode-select --install`

To verify that FFmpeg has been installed correctly, run `which ffmpeg`

You should see `/usr/local/bin/ffmpeg`

## Creating the Video

Now that we have FFmpeg, we can get started!

Make sure you have a GIF and MP3 file saved in the same folder on your computer. I put my files in a `Documents/music` folder, but you can save them wherever you want

Navigate into the folder where your files are using

In my case, this would look like `cd Documents/music`

Finally, we can use the following command to create our music video!

```
ffmpeg \-i song.mp3 \-stream_loop -1 \-i cool-gif.gif \-codec:v libx264 \-preset slow \-tune animation \-codec:a aac \-pix_fmt yuv420p \-shortest \mv.mp4
```

Replace `song.mp3` and `cool-gif.gif` with the names of your files

I named my output file `mv.mp4`, but you can name yours whatever you’d like. After the video is created, it will be automatically saved to the current directory

> Okay, now we have our awesome music video, but what is FFmpeg actually doing?…

## Command Breakdown

`ffmpeg`: Invokes the FFmpeg program

`-i [file]` : Indicates that the specified file will be used as an input

`-stream_loop -1`: Sets the number of times an input should be looped. In our case, we want our GIF to loop forever, so we set the loop count to -1

`-codec:v libx264`: Specifies that we want to use the libx264 library to compress our GIF with the H.264 codec. H.264 is a fancy video compression tool, used to shrink the file size of a video while retaining as much quality as possible. H.264 uses cool compression techniques like chroma subsampling and motion compensation, which we won’t get into today, but if you’re interested in learning more, I highly recommend [this blog post by Sid Bala](https://sidbala.com/h-264-is-magic/)

`-preset slow`: This setting changes the video encoding speed, which changes the compression of our video. Video encoding is a CPU-intensive task, so a slower encoding speed takes longer, but will give us a higher quality video. Feel free to explore other preset options!

`-tune animation`: This option changes the video encoding settings based on the type of input we’re using. In my case, I used a GIF from Sailor Moon, so `animation` seemed like the best choice

_For more information about the H.264 codec, or to explore other preset and tuning options, see the H.264 Encoding Guide in the Resouces section below_

`-codec:a aac`: Specifies that we’d like to use AAC for audio encoding. AAC is a popular audio encoder, and generally achieves better sound quality compared to MP3 files

`pix_fmt yuv420p`: Specifies that the YUV pixel format should be used for our output video. YUV is a special color space, similar to RGB, and allows our video to be played with QuickTime and other video players. If you’d like to learn more about YUV, the [Wikipedia Page](https://en.wikipedia.org/wiki/YUV) is a great place to start

`-shortest`: Ensures that the duration of the music video matches the duration of the audio

`mv.mp4`: The name of the output file

## Resources

[FFmpeg Documentation](https://ffmpeg.org/ffmpeg.html)

[H.264 Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)

## Cheers 🎉

After working with FFmpeg, I learned more about audio and video encoding, pixel formats, and more! I hope you did too! It was really cool to explore audio and video encoding while making something fun. Thanks for stopping by!
