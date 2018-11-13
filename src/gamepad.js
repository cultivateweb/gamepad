(() => {
    "use strict";

    class Gamepad {
        constructor() {
            window.addEventListener("gamepadconnected", e =>
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
                        e.gamepad.index, e.gamepad.id,
                        e.gamepad.buttons.length, e.gamepad.axes.length));
    
            window.addEventListener("gamepaddisconnected", e =>
                console.log("Gamepad disconnected from index %d: %s",
                            e.gamepad.index, e.gamepad.id));
        }
    }


    var gamepad_count = 0;
    setInterval(() => {
        var gamepads = navigator.getGamepads();
        if (gamepads.length != gamepad_count) {
            gamepad_count = gamepads.length;
            for (var i = 0; i < gamepads.length; i++) 
                console.log("Gamepad %d: %s. %d buttons, %d axes",
                            i, gamepads[i].id,
                            gamepads[i].buttons.length, gamepads[i].axes.length);
            
        }
    }, 100);



    //var isFullscreenAvailable = document.fullscreenEnabled;

    class Screen {
        constructor() {
            
        }

        requestFullscreen() {
                 if (document.documentElement.requestFullscreen)       document.documentElement.requestFullscreen();
            else if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();
            else if (document.documentElement.mozRequestFullScreen)    document.documentElement.mozRequestFullScreen();
            else if (document.documentElement.msRequestFullscreen)     document.documentElement.msRequestFullscreen();
        }

        exitFullscreen() {
                 if (document.exitFullscreen)       document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.mozCancelFullScreen)  document.mozCancelFullScreen();
            else if (document.msCancelFullScreen)   document.msCancelFullScreen();
        }

        isFullscreen() {
            return !!(document.fullscreenElement       ||
                      document.webkitFullscreenElement ||
                      document.mozFullscreenElement    ||
                      document.msFullscreenElement);
        }

        toggle() {
            if (this.isFullscreen()) 
                this.exitFullscreen();
            else
                this.requestFullscreen();
        }
    }

    let screen = new Screen();

    screen.toggle();

})();