/* =========================================
   PASSWORD SYSTEM
========================================= */

function unlockLove() {

    const passwordInput =
        document.getElementById("password");

    const password =
        passwordInput.value.trim();


    /*
     * =====================================
     * YOUR PASSWORD
     * =====================================
     *
     * Change "iloveyou" to whatever
     * password you want her to use.
     */

    const correctPassword =
        "iloveyou";


    const container =
        document.getElementById(
            "passwordContainer"
        );

    const explosion =
        document.getElementById(
            "explosion"
        );

    const error =
        document.getElementById(
            "errorMessage"
        );


    /* =====================================
       CORRECT PASSWORD
    ===================================== */

    if (password === correctPassword) {

        /* Remove error message */

        error.textContent = "";


        /* Make the password page
           fade and zoom away */

        container.style.transform =
            "scale(1.25)";

        container.style.opacity =
            "0";


        /* Start explosion */

        explosion.classList.add(
            "active"
        );


        /* Go to song page */

        setTimeout(function() {

            window.location.href =
                "song.html";

        }, 1000);

    }


    /* =====================================
       WRONG PASSWORD
    ===================================== */

    else {

        error.textContent =
            "That's not it, my love ❤️";


        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =========================================
   ENTER KEY
========================================= */

const passwordInput =
    document.getElementById(
        "password"
    );


/* Attach Enter key handler to password input reliably */
function attachPasswordEnter() {

    const input = document.getElementById("password");

    if (!input) return;

    input.addEventListener("keydown", function(e) {

        const key = e.key || e.keyCode;

        if (key === "Enter" || key === 13) {

            e.preventDefault();

            unlockLove();

        }

    });

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachPasswordEnter);
} else {
    attachPasswordEnter();
}
/* Fallback: reveal memories button after 15s if not already shown */
setTimeout(function() {
    const btn = document.getElementById("memoriesButton");
    if (btn && !btn.classList.contains("show-button")) {
        btn.classList.add("show-button");
    }
}, 15000);


/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage(page) {

    window.location.href =
        page;

}


/* =========================================
   AUTOMATIC LOVE LETTER
========================================= */

function startLoveLetter() {

    const letterParts =
        document.querySelectorAll(
            ".letter-part"
        );


    const memoriesButton =
        document.getElementById(
            "memoriesButton"
        );


    /* If we're not on the letter
       page, stop here. */

    if (!letterParts.length) {

        return;

    }


    let currentPart = 0;


    /* =====================================
       SHOW NEXT PARAGRAPH
    ===================================== */

    function showNextPart() {


        /* When the entire letter
           has been displayed */

        if (
            currentPart >=
            letterParts.length
        ) {

            /*
             * Give her a few seconds
             * to enjoy the ending.
             */

            setTimeout(
                function() {

                    if (
                        memoriesButton
                    ) {

                        memoriesButton
                            .classList
                            .add(
                                "show-button"
                            );

                    }

                },
                4000
            );


            return;

        }


        /* Current paragraph */

        const current =
            letterParts[
                currentPart
            ];


        /* Make it visible */

        current.classList.add(
            "show"
        );


        /* =================================
           CALCULATE READING TIME
        ================================= */


        const text =
            current.innerText
                .trim();


        const words =
            text
                .split(/\s+/)
                .length;


        /*
         * Reading speed:
         *
         * Approximately
         * 180 words per minute.
         */

        let readingTime =
            (words / 180)
            * 60
            * 1000;


        /*
         * Add 2.5 seconds so she
         * has breathing room.
         */

        readingTime += 2500;


        /*
         * Minimum 5 seconds.
         */

        readingTime =
            Math.max(
                readingTime,
                5000
            );


        /*
         * Maximum 12 seconds.
         */

        readingTime =
            Math.min(
                readingTime,
                12000
            );


        /* Move to next paragraph */

        currentPart++;


        /* Wait before revealing
           the next paragraph */

        setTimeout(
            showNextPart,
            readingTime
        );

    }


    /*
     * Wait 1.8 seconds after
     * opening the letter page.
     */

    setTimeout(
        showNextPart,
        1800
    );

}


/* =========================================
   START LETTER AUTOMATICALLY
========================================= */

if (
    document.querySelector(
        ".letter-page"
    )
) {

    startLoveLetter();

}


/* =========================================
   GALLERY IMAGE VIEWER
========================================= */

const photos =
    document.querySelectorAll(
        ".photo img"
    );


const viewer =
    document.getElementById(
        "imageViewer"
    );


const viewerImage =
    document.getElementById(
        "viewerImage"
    );


const closeViewer =
    document.getElementById(
        "closeViewer"
    );


/* =====================================
   OPEN IMAGE
===================================== */

if (photos.length > 0) {

    photos.forEach(
        function(photo) {

            photo.addEventListener(
                "click",
                function() {

                    if (!viewer) {
                        return;
                    }


                    viewer.style.display =
                        "flex";


                    viewerImage.src =
                        this.src;

                }
            );

        }
    );


}


/* =====================================
   CLOSE IMAGE
===================================== */

if (closeViewer) {

    closeViewer.addEventListener(
        "click",
        function() {

            viewer.style.display =
                "none";

        }
    );

}


/* Close when clicking
   outside the picture */

if (viewer) {

    viewer.addEventListener(
        "click",
        function(event) {

            if (
                event.target === viewer
            ) {

                viewer.style.display =
                    "none";

            }

        }
    );

}


/* =========================================
   SONG PLAYBACK (Play / Pause Button)
========================================= */

function initSongPlayback() {
    const playButton = document.getElementById('playButton');
    const audioElem = document.getElementById('globalAudio');

    const STORAGE_TIME = 'globalAudioTime';
    const STORAGE_PLAYING = 'globalAudioPlaying';
    const STORAGE_USER = 'globalAudioUserInteracted';

    function updatePlayButton() {
        if (!playButton || !audioElem) return;
        playButton.textContent = audioElem.paused ? 'Play ▶️' : 'Pause ⏸️';
    }

    function togglePlay() {
        if (!audioElem) return;
        if (audioElem.paused) {
            const p = audioElem.play();
            if (p !== undefined) p.catch(() => {});
        } else {
            audioElem.pause();
        }
        updatePlayButton();
    }

    if (playButton) playButton.addEventListener('click', togglePlay);

    if (audioElem) {
        /* Restore time & playing state from storage */
        try {
            const savedTime = parseFloat(localStorage.getItem(STORAGE_TIME) || '0');
            if (!isNaN(savedTime) && savedTime > 0) {
                audioElem.currentTime = Math.max(0, savedTime - 0.2);
            }
        } catch (e) {}

        const wasPlaying = localStorage.getItem(STORAGE_PLAYING) === 'true';
        const userInteracted = localStorage.getItem(STORAGE_USER) === 'true';
        if (wasPlaying && userInteracted) {
            const p = audioElem.play();
            if (p !== undefined) p.catch(() => {});
        }

        audioElem.addEventListener('play', function() {
            updatePlayButton();
            localStorage.setItem(STORAGE_PLAYING, 'true');
            localStorage.setItem(STORAGE_USER, 'true');
        });

        audioElem.addEventListener('pause', function() {
            updatePlayButton();
            localStorage.setItem(STORAGE_PLAYING, 'false');
        });

        /* Periodically save current time */
        setInterval(function() {
            try {
                if (!isNaN(audioElem.currentTime)) {
                    localStorage.setItem(STORAGE_TIME, String(audioElem.currentTime));
                }
            } catch (e) {}
        }, 1000);

        /* Save on unload */
        window.addEventListener('beforeunload', function() {
            try {
                localStorage.setItem(STORAGE_TIME, String(audioElem.currentTime || 0));
                localStorage.setItem(STORAGE_PLAYING, audioElem.paused ? 'false' : 'true');
            } catch (e) {}
        });

        /* When the song finishes, move to the letter page (only on song page) */
        audioElem.addEventListener('ended', function() {
            try {
                if (document.body && document.body.classList.contains('song-page')) {
                    goToPage('letter.html');
                }
            } catch (e) {}
        });

        updatePlayButton();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSongPlayback);
} else {
    initSongPlayback();
}

/* Try autoplay on load (only if helper exists) */
if (typeof tryAutoplayOrPrompt === 'function') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryAutoplayOrPrompt);
    } else {
        tryAutoplayOrPrompt();
    }
}