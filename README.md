<p align="center">
    <img src="./assets/fav-96.png">
</p>

<br>

# kissSolver:
An A.I. C.A.P.T.C.H.A. Solver browser-extension for KissAnime written in JavaScript with help of python. It was/is being developed with the help of:

- tf.js and opencv.js

- OpenCV dev tools

- python implementation of os-library,opencv and keras (might not be required)


<br>

## Installation:

Download the [release]() zip.

- #### Firefox

  1. open [about:addons](about:addons)
  2. Click the ![firefox](./assets/firefox.PNG) and select "Install Add-on From File"
  3. navigate to and select kissSolver-master.zip

- #### Chrome

  1. Unzip file save folder on local drive.
  2. open [chrome://extensions/](chrome://extensions/)
  3. Turn on "Developer mode" on top-right.
  4. Click on "Load unpacked"
  5. navigate to and select kissSolver unzipped folder


<br><br>
## F.A.Q. regarding development:



### Problem Statement?

Self-Explanatory!

![kissanime.ru/Special/AreYouHuman2?reUrl=](./assets/problemStatement.png)

<br>

### How are images segregated?

There are 2 ways 

- Subtract pixel values from problem image given to generic image (image without number) [slow but accurate]
- Check for similar dimensions (images can have similar dimensions) [fast but inaccurate]

<br>

### What kind of A.I. is used?

1. **Haar Cascade**: *for finding out where is the number is in image* (ML)
2. **Convolutional Neural Network**: *for finding out what that number is* (DL)


<br><br>

## Documentation for development:

Check [docs/index.md](docs/index.md).



<br><br>

## A Special thanks to reddit user "Cloraxland" for below given post.
https://www.reddit.com/r/KissAnime/comments/8nuk9d/data_mined_captcha_data_all_captchas_grouped_into/
