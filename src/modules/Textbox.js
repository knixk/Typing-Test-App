import React from "react";
import { useState } from "react";

function Textbox() {
  const [before, setBefore] = useState(0);
  // const [wpm, setWpm] = useState(0);

  const [start, setStart] = useState(60);
  const [wpm, setWpm] = useState(0);
  // const [temp, setTemp] = useState(null);

  let data =
    "The tones. First of a and, the folks extent, knowing analyzed logging would out dull and as far right in he and alarm of circumstances. Far the build synthesizers desk quitting and name was in little as than scolded the surprise be importance, the identification the if which, the for can one and, the from ensure of infinity, fully objective preceding turn just our and let both design of on recently almost missions transmitting founding also instance. First of found. To attained receive has I close blonde had ever and to and a ago. For software quite still both the. The tones. First of a and, the folks extent, knowing analyzed logging would out dull and as far right in he and alarm of circumstances. Far the build synthesizers desk quitting and name was in little as than scolded the surprise be importance, the identification the if which, the for can one and, the from ensure of infinity, fully objective preceding turn just our and let both design of on recently almost missions transmitting founding also instance. First of found. To attained receive has I close blonde had ever and to and a ago. For software quite still both the.";

  const [dummyText, setDummyText] = useState(data.substring(before, start));
  const [text, setText] = useState(null);

  function timer() {
    var sec = 60;
    var timer = setInterval(function () {
      document.getElementById("timer").innerHTML = "00:" + sec;
      sec--;
      // console.log(wpm);
      if (sec < 0) {
        clearInterval(timer);
        // showWpm();
        // document.getElementById("wpm").innerHTML = wpm;
      }
    }, 1000);
  }

  // function showWpm() {
  //   document.getElementById("wpm").innerHTML = wpm;
  // }

  function nextText() {
    // setWpm(wpm + 10);
    // temp = start;
    setBefore(start);

    // setTemp(start);
    setWpm(wpm + 11);
    setBefore(start);

    setStart(start + 60);
    console.log(wpm);
    // start += 60;
    // before = temp;
    setDummyText(data.substring(before, start));

    // console.log(start, "I am start");
    // console.log(temp, "I am temp");
    // console.log(before, "I am before");
  }

  let inputbox = document.getElementById("input");

  return (
    <div>
      <div className="container">
        <div className="group">
          <p>
            {dummyText === text
              ? ((inputbox.value = ""), nextText())
              : dummyText}
          </p>

          <input
            onClick={() => {
              if (timer) {
                timer();
                console.log("timer is running");
              } else {
                return;
              }
            }}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            name="input"
            id="input"
            className="input"
          />

          <div className="timer" id="timer"></div>
          <div className="wpm" id="wpm">
            {wpm - 10 < 0
              ? ""
              : timer
              ? wpm - 10 + ": wpm"
              : wpm - 10 + ": wpm"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textbox;
