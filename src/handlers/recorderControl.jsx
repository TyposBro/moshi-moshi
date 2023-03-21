export async function startRecording(setRecorderState) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    setRecorderState((prevState) => {
      return {
        ...prevState,
        initRecording: true,
        mediaStream: stream,
      };
    });
  } catch (err) {
    console.log(err);
  }
}

export function saveRecording(recorder) {
  if (recorder.state !== "inactive") recorder.stop();
}

export function pauseRecording(recorder) {
  if (recorder.state !== "inactive") recorder.pause();
}

export function resumeRecording(recorder) {
  if (recorder.state === "inactive") recorder.resume();
}
