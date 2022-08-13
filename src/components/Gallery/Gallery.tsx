import React, { useState, useEffect } from "react";
import "./Gallery.scss";

const Gallery = (props) => {
  const [transform, setTransform] = useState(0);
  const [slidesNumber, setSlidesNumber] = useState([]);
  const [dotClicked, setDotclicked] = useState(false);

  const handleTransform = (transform: number) => {
      setTransform(transform)
    }

  const handleDotClicked = (transform: number) => {
    setDotclicked(true);
    setTransform(transform);
  };
  const handleDotClass = (index: number) => {
    switch(index){
      case 0:
        setTransform(0)
        break;
        case 1:
          setTransform(1)
          break;
          case 2:
        setTransform(2)
        break;
        case 3:
        setTransform(3)
        break;     
    }
    return transform
  }

  useEffect(() => {
    if (!dotClicked) {
      if(props.slides.length > 1){
        let timer = setTimeout(() => {
          handleTransform(transform);
        }, 5000);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [transform, dotClicked]);

  useEffect(() => {
    if (dotClicked) {
      let timer = setTimeout(() => {
        setDotclicked(false);
      }, 12000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [dotClicked]);

  return (
    <div className="Gallery__container">
      <div className="Gallery__container__dots">
        {props.slides.map((s,index) => (
          <div
          key={s.title}
            className={
              "Gallery__container__dots__dot" +
                (transform === index ? "__active":"")
            }
            onClick={() => handleDotClicked(1)}
          ></div>
        ))}
        {/* <div
          className={"Gallery__container__dots__dot" + (transform === "Reset" ? "__active" : "")}
          onClick={() => handleDotClicked("Reset")}
        />
        <div
          className={"Gallery__container__dots__dot" + (transform === "1" ? "__active" : "")}
          onClick={() => handleDotClicked("1")}
        ></div>
        <div
          className={"Gallery__container__dots__dot" + (transform === "2" ? "__active" : "")}
          onClick={() => handleDotClicked("2")}
        ></div>
        <div
          className={"Gallery__container__dots__dot" + (transform === "3" ? "__active" : "")}
          onClick={() => handleDotClicked("3")}
        ></div> */}
      </div>
      <div
        className={"Gallery__container__slideContainer__transform" + transform}
      >
        {props.slides.map((p) => (
          <div
            className="Gallery__container__slideContainer__slide"
            style={{ backgroundColor: p.bgColor }}
            key={p.title}
          >
            <div className="Gallery__container__slideContainer__slide__title">
              {p.title}
            </div>
            <div className="Gallery__container__slideContainer__slide__content">
              {p.content}
            </div>
          </div>
        ))}
        {/* <div
          className="Gallery__container__slideContainer__slide"
          style={{
            backgroundColor: "#0a2472",
          }}
        >
          
        </div>
        <div
          className="Gallery__container__slideContainer__slide"
          style={{
            backgroundColor: "#FE4A49",
          }}
        >
          2
        </div>
        <div
          className="Gallery__container__slideContainer__slide"
          style={{
            backgroundColor: "#FED766",
          }}
        >
          3
        </div>
        <div
          className="Gallery__container__slideContainer__slide"
          style={{
            backgroundColor: "#E6E6EA",
          }}
        >
          4
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
