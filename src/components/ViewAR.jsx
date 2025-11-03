import React, { useEffect, useRef, useState } from "react";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import * as THREE from "three";

export default function ViewAR({ tracker }) {
  const containerRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const startAR = async () => {
    setIsActive(true);
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: tracker.trackerImage, // in real use case use .mind file
    });

    const { renderer, scene, camera } = mindarThree;
    const anchor = mindarThree.addAnchor(0);

    if (tracker.contentType === "text") {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = "40px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(tracker.contentValue, 10, 50);
      const texture = new THREE.CanvasTexture(canvas);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
      anchor.group.add(sprite);
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => renderer.render(scene, camera));
  };

  return (
    <>
      {!isActive ? (
        <button className="btn btn-outline-primary btn-sm" onClick={startAR}>
          View in AR
        </button>
      ) : (
        <div
          ref={containerRef}
          style={{ width: "100%", height: "300px", position: "relative" }}
        />
      )}
    </>
  );
}
