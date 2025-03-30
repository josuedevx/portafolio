import React, { useState, useEffect } from "react";
import "./styles/face.css";

const AnimatedFace = () => {
	const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
	const [isBlinking, setIsBlinking] = useState(false);

	useEffect(() => {
		const handleMouseMove = (event) => {
			const { clientX, clientY } = event;
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight / 2;

			const maxMovement = 10;
			const x = ((clientX - centerX) / centerX) * maxMovement;
			const y = ((clientY - centerY) / centerY) * maxMovement;

			setEyePosition({ x, y });
		};

		const blinkInterval = setInterval(() => {
			setIsBlinking(true);
			setTimeout(() => setIsBlinking(false), 200);
		}, 4000);

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearInterval(blinkInterval);
		};
	}, []);

	return (
		<div className="face-container">
		  {/* Cejas */}
		  <div className="eyebrow left"></div>
		  <div className="eyebrow right"></div>
	
		  {/* Ojos */}
		  <div className="eyes">
			<div className="eye">
			  <div
				className={`pupil ${isBlinking ? "blink" : ""}`}
				style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}
			  ></div>
			</div>
			<div className="eye">
			  <div
				className={`pupil ${isBlinking ? "blink" : ""}`}
				style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}
			  ></div>
			</div>
		  </div>
	
		  {/* Nariz */}
		  <div className="nose"></div>
	
		  {/* Boca */}
		  <div className="mouth"></div>
		</div>
	  );
	};

export default AnimatedFace;