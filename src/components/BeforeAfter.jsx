/*import beforeImg from "../assets/projects/before-placeholder.jpg";
import afterImg from "../assets/projects/after-placeholder.jpg";*/

import { useState } from "react";

function BeforeAfter() {

const [sliderPosition, setSliderPosition] = useState(50);

const [isDragging, setIsDragging] = useState(false);

const handleMove = (e) => {

  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentage = (x / rect.width) * 100;

  setSliderPosition(
    Math.min(Math.max(percentage, 0), 100)
  );

};

const handleMouseDown = () => {
  setIsDragging(true);
};

const handleMouseUp = () => {
  setIsDragging(false);
};

const handleMouseMove = (e) => {

  if (!isDragging) return;

  handleMove(e);

};

  return (
    <section className="before-after">

      <div className="before-after-header">
        <p className="section-subtitle">REAL PROJECTS</p>

        <h2>Before & After</h2>

        <p className="section-text">
          See the difference our professional garage door repairs
          and installations make for homeowners across Ottawa.
        </p>
      </div>

      <div className="compare-card">

        <div className="compare-images"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>

          <div className="after-wrapper">

            <div className="image-placeholder">
              After Image
            </div>

            {/* 
            <img
              src={afterImg}
              alt="After Garage Door Repair"
              className="after-image"
            />
            */}

          </div>


          <div
            className="before-wrapper"
            style={{ width: `${sliderPosition}%` }}
          >

            <div className="image-placeholder">
              Before Image
            </div>

            {/* 
            <img
              src={beforeImg}
              alt="Before Garage Door Repair"
              className="before-image"
            />
            */}

          </div>


          <div
            className="slider-line"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="slider-button"
            onMouseDown={handleMouseDown}>
              ↔
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default BeforeAfter;