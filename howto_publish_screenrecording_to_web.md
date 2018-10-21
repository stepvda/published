# How to publish a standard Quicktime Screenrecording to the web #

This is the result from my research into this topic as I was also new to this so I tried out several options.

## Option 1 - Youtube - publish and embed ##

I used Quicktime player on macOS 10.14 to create the screen recording. Goal was to make a quick couple of seconds demo of my [DuckDuckGo](https://github.com/stepvda/duckduckgoogle) project on github.

<details>
<summary>From quicktime you can publish directly to youtube. as you can see by clicking here</summary>

![save quicktime to youtube](https://south.stepvda.net/lib/screen_to_web_qt.png)

</details>

To embed your youtube video in markdown use the following syntax both for the video and the preview image which youtube will also generate where you need to replace the videoId in both url's.

````markdown
[![View screenrecording]
(https://img.youtube.com/vi/<videoId>/0.jpg)]
(https://www.youtube.com/watch?v=<videoId>)

syntax:
[![some_text](picture_link.jpg)](video_link.mp4)
````

<details>
<summary>click to view youtube example</summary>

[![DuckDuckGoogle](https://img.youtube.com/vi/HnFOLH8ZaLE/0.jpg)](https://youtu.be/HnFOLH8ZaLE)

</details>

**Note:** that the is no inline viewing and no autostart of the youtube video. When you click on the vide a new browser window opens on the youtube website.



## Option 2 - `Gifs.com` -  animated gif ##

Convert your recording to animated gif. Downside here is that this website leaves a watermark on your recording unless you pay for a premium account. Other then that this would be perfect.

<details>
<summary>click to view example</summary>

![DuckDuckGoogle](https://south.stepvda.net/lib/duckduckGo_demo_gifs_com.gif)

</details>

Quality and compression rate are good in animated gif format, but I can't help being totally annoyed by this watermark. Maybe it's just me but that's enough for me to  find another solution.

## Option 4 - Animated Gif with `ffmpeg` ##

Use the renowed ffMpeg library to convert to animated gif from the command line. The trick here is that you need to figure out the right settings.

For my first attempt I did the following straightforward command:

````bash
ffmpeg -i yesbuddy.mov -pix_fmt rgb24 output.gif
````

The result was not so great, the resolution was to high and there was some weird pixelation happening.

>For the following 3 examples I used the HTML tags instead of the markdown I used before, just to show some other possibilities.

in this example above you have to set the `iframe` to the exact size of the image otherwise you get scroll bars. like you can see in the following example. Note that you have to explicitely specify the size of the iframe if not it gets resized based on the browser window and you get scrollbars.

<details>
<summary>click to view the TOO BIG example</summary>

`code`

````html
<iframe width="1160" height="674" src="https://south.stepvda.net/lib/duckduckGo_demo_ffmpeg.gif" frameborder="0" allowfullscreen></iframe>
````

<iframe width="1160" height="674" frameborder="0" allowfullscreen><img src="https://south.stepvda.net/lib/duckduckGo_demo_ffmpeg.gif"></iframe>

</details>

So the video was to big so naturally I tried adapting the size of the iframe but unfortunately that leads to uggly scrollbars.

<details>
<summary>click to view BAD example with scroll bars</summary>

`code`

````html
<iframe width="580" height="337" src="duckduckGo_demo_ffmpeg.gif" frameborder="0" allowfullscreen></iframe>
</details>
````

<iframe width="580" height="337" src="https://south.stepvda.net/lib/duckduckGo_demo_ffmpeg.gif" frameborder="0" allowfullscreen></iframe>

</details>

Next I tried to use more HTML to resize the video, this time by using the `img`tag. If you do this then you actually have to *remove the iframe* tags.

<details>
<summary>click to view example with img tag</summary>

`code`

````html
<img src="https://south.stepvda.net/lib/duckduckGo_demo_ffmpeg.gif" width="580" height="337">
````

<img src="https://south.stepvda.net/lib/duckduckGo_demo_ffmpeg.gif" width="580" height="337">

/details

>you can [install](https://formulae.brew.sh/formula/ffmpeg) ffmpeg with homebrew `brew install ffmpeg`

## Option 5 - HTML5 Video Streaming ##

If you have the capability to stream video then you might want to consider this option. From a performance point streaming is optimized for viewing content that hasn't yet fully been transferred. This is offcourse what Youtube also does.

I quickly found a good online converter to convert my QuickTime movie to .webm format. This time there was no watermark. Here's the link to this free service <https://www.aconvert.com/video/mov-to-webm/>

## Compatability ##

This gives us already quiet a bit of choice one would say, but that is before you start testing. As it turns out not every option works well in every scenario. This all has to do with the way that  the `markdown` gets  rendered into HTML. I did my testing myself using the following methods :

- VSCode extension for markdown preview 
- MacDown markdown editingtool 
- Publish and view on GitHub.com 

|    viewer   | option |   visible | autoplay | quality | embedded video |
| -------:|:------:|:-------:|:--------:|:-------:|---------------:|
| VSCode  |        |         |          |         |                |
| MacDown |       |        |         |        |
| github |        |         |          |         |

----------

## ![steps](https://south.stepvda.net/lib/details.png) **Bottom Line** ##

Youtube offers a quick solution with good quality and integration with QuickTime. Offcourse you have to take all that comes with the social networking and personalized adds. But if you don't have a hosting option for static files then youtube also solves this for you. For the other options I had to host the images and videos on a server myself.

==========

*refrences:* <https://stackoverflow.com/questions/153152/resizing-an-iframe-based-on-content>


---
---

# Encoding #

I found these recommendations online: [https://stackoverflow.com/questions/8937899/choosing-a-video-codec-for-screen-recording#11314411](https://stackoverflow.com/questions/8937899/choosing-a-video-codec-for-screen-recording#11314411)

I tried something else myself using Handbrake with H265 (aka HVEC) compression. I was able to go from a 12MB `QuickTime .mov` to a less then 1MB `.mp4` with no visible quality impact. 
This is the file with the preset: https://south.stepvda.net/lib/screen_recording_handbrake_preset.json 
 
