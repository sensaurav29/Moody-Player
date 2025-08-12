import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

const FaceDetection = ({ setsongs }) => {
  const videoRef = useRef(null);
  const [expressionName, setexpressionName] = useState("");

  // Load models
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
  };

  // Start webcam stream
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera error:", err));
  };

  async function detectMood() {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    let mostProbableExpession = 0;
    let detectedExpression = "";

    if (!detections || detections.length === 0) {
      setexpressionName(
        "No Face detected. Please Adjust Your Camera to optimal light settings"
      );
      return;
    }
    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpession) {
        mostProbableExpession = detections[0].expressions[expression];
        detectedExpression = expression;
      }
    }

    axios
      .get(`http://localhost:3000/songs?mood=${detectedExpression}`)
      .then((res) => {
        console.log(res.data);
        setsongs(res.data.songs);
      });
  }

  useEffect(() => {
    loadModels().then(startVideo());
  }, []);

  return (
    <div className="relative mx-auto flex flex-col gap-4 ">
      <h1 className="text-white text-3xl text-left font-serif  pt-10 tracking-tight font-thin">
        Face Detection
      </h1>
      <div className="flex gap-4 justify-start  items-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-[20rem]  object-cover rounded-[1rem] aspect-video"
        />

        <div className="flex flex-col gap-4 items-start">
          <button
            className="text-white p-2 px-3 font-thin rounded-sm cursor-pointer bg-purple-600 text-xs active:border-neutral-400 active:scale-[0.9]"
            onClick={detectMood}
          >
            Detect Mood
          </button>

          <p className="text-white text-sm text-left">{expressionName}</p>
        </div>
      </div>
    </div>
  );
};

export default FaceDetection;
