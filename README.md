# LIFF app "Drawing"
LIFF application that allows you to write a picture on the canvas and send it to the talk room


### Install the app on your local machine

1. Make sure you have the following installed.

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en/)

2. Clone the [line-liff-drawing]https://github.com/yuuulf/line-liff-drawing) GitHub repository.

    ```shell
    git clone https://github.com/yuuulf/line-liff-drawing
    ```
3. `cd` into `line-liff-drawing` directory.

4. Install the dependencies by running:
    ```shell
    $ npm install
    ```

### Add the drawing app to LIFF

1. Follow the instructions on the page [Adding a LIFF app](https://developers.line.biz/en/docs/liff/registering-liff-apps/).

2. Take a note of your LIFF ID, because you'll need it for the next part. The LIFF ID is the final part of the LIFF URL shown in the console: `line://app/{liffId}`

3. Set your LIFF ID to the `defaultLiffId` variable in `public/liff-drawing.js`.
    ```shell
    const defaultLiffId = "{liffId}"; 
    ```

## Trying the app

### Try the app in LINE

You can open your LIFF app in LINE by creating a simple link from any chat:

1. In any LINE chat, type `line://app/{liffId}` and send the message. (For example, if your LIFF ID is `123`, send the message `line://app/123`.)
2. Tap the link in your own message.
3. Agree to grant the required permissions to the LIFF app.
