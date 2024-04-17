import React, { useState, useRef, useEffect } from 'react';

// Libraries
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import Helmet from 'react-helmet';

// Components
import Carousel from '../components/frameControllers/FrameCarousel';
import Head from '../components/shared/Head';
import Inputs from '../components/frameControllers/DetailsInput';
import Download from '../components/toolbox/Download';
import CanvasStage from '../components/canvas/Stage';

// Assets
import frameData from '../../config/frameData';
import { options } from '../components/toolbox/InputText';


const Container3 = styled.h1`
  ${tw`
   w-94
   pt-2
   m-auto
   sm:w-full
`}
`;

const C1 = styled.div`
  ${tw`
  mt-5
  mlg:mt-0
  `}

  background-color: #333333;
  padding: 1rem;
  border-radius: 4px;
  width: 100%;
`;

const C4 = styled.div`
  ${tw`
  pt-8
  pl-5
  mlg:flex justify-center m-0
  `}
`;

const C3 = styled.div`
  ${tw`
  `}
`;

const C2 = styled.div`
  ${tw`
    flex
    gap-20
    mt-18
    mlg:grid
    mlg:gap-0
  `}
`;

const CarouselC = styled.h1`
  ${tw`
    w-94
    sm:w-full
    overflow-y-hidden
    mt-5
`}
  margin: 0px, 0px;
  padding: 2px;
  overflow-x: auto;
  white-space: nowrap;
`;

const Container = styled.div`
  ${tw`
    bg-color-secondary
    h-full
    grid
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    overflow-y-hidden
    `}
`;

const Heading = styled.div`
  ${tw`
    font-roboto
    text-6xl
    flex
    justify-center
    items-center
    gap-4
    -mt-10
    mlg:hidden
    `}
`;

const Yellow = styled.span`
  ${tw`
    text-frame-yellow
    `}
`;

const SlimText = styled.span`
  ${tw`
    font-light
    text-white
    `}
`;

const FRAMES = {
  ONE:  frameData.frames.ONE,
  TWO: frameData.frames.TWO,
  THREE: frameData.frames.THREE,
  FOUR: frameData.frames.FOUR,
  FIVE: frameData.frames.FIVE,
  SIX: frameData.frames.SIX,
  SEVEN: frameData.frames.SEVEN,
  EIGHT: frameData.frames.EIGHT,
  NINE: frameData.frames.NINE,
  TEN: frameData.frames.TEN,
  ELEVEN: frameData.frames.ELEVEN,
  TWELVE: frameData.frames.TWELVE,
 // THIRTEEN: frameData.frames.THIRTEEN,
};

const align = ['center', 'left', 'right'];
let i = 0;

const Frame = () => {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [userName, setUserName] = useState(options[0]);
  const [guildName, setGuildName] = useState('Name');
  const [checked, setchecked] = useState(false);
  const [checkedGuild, setcheckedGuild] = useState(false);
  const [fontFamily, setFontFamily] = useState(null);
  const [fontFamilyGuild, setFontFamilyGuild] = useState(null);
  const [fontColorGuild, setFontColorGuild] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [bgColorGuild, setBgColorGuild] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [alignment, setAlignment] = useState(align[2]);
  const [textPositions, setTextPositions] = useState([
    { textPositionX: 6, textPositionY: 268.5 }, // Default values
    { textPositionX: 10, textPositionY: 300 }, // Values for frame TWO
  ]);
  const [textSchoolPositions, setTextSchoolPositions] = useState([
    { textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }, // Default values
    { textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }, // Values for frame TWO
  ]);
  const [imagePositions, setImagePositions] = useState([
    { imagePositionsX: 80, imagePositionsY: 0 }, // Default values
    { imagePositionsX: 80, imagePositionsY: 0 }, // Values for frame TWO
  ]);
  const [defaultImageDimensions, setDefaultImageDimensions] = useState({ width: 350, height: 350 }); // Default dimensions
  const [rectWidth, setRectWidth] = useState(289); // Default rect width
  const [rectHeight, setRectHeight] = useState(60); // Default rect height
  const [rectSchoolWidth, setRectSchoolWidth] = useState(0.5); // Default rect width
  const [rectSchoolHeight, setRectSchoolHeight] = useState(0.5); // Default rect height
  const [frameHeight, setFrameHeight] = useState(350); // Default frame Height
  const [frameWidth, setFrameWidth] = useState(350);  // Default frame Width
  const [nameRectHeight, setNameRectHeight] = useState(245.8); // Default name rect height
  const [nameRectWidth, setNameRectWidth] = useState(222); // Default name rect width
  const [rectbgcolor, setRectbgcolor] = useState('#313C5F'); // Default rect bgcolor 

  const handleAlignment = () => {
    setAlignment(align[i + 1]);
    // eslint-disable-next-line no-const-assign
    i += 1;

    if (i === 3) {
      setAlignment(align[i - 3]);
      i = 0;
    }
  };
  const handleChange = () => setchecked((prevCheck) => !prevCheck);
  const handleChangeGuild = () => setcheckedGuild((prevCheck) => !prevCheck);

  const stageRef = useRef(null);
  const [frameImg] = useImage(selectedFrame, 'Anonymous');
  const [image] = useImage(uploadedImage, 'Anonymous');

  const svgUrl = '#0D427F';
    // Update text positions based on selected frame
    useEffect(() => {
      switch (selectedFrame) {
        case FRAMES.ONE:
          setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
          setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
          setRectWidth(345);
          setRectHeight(60);
          setDefaultImageDimensions({ width: 300, height: 300 });
          setRectSchoolWidth(50);
          setRectSchoolHeight(20);
          setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
          setFrameHeight(350);
          setFrameWidth(350);
          setNameRectWidth(34);
          setNameRectHeight(170);
          setRectbgcolor('#14477A');
          break;
        case FRAMES.TWO:
          setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
          setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
          setRectWidth(289);
          setRectHeight(60);
          setDefaultImageDimensions({ width: 300, height: 300 });
          setRectSchoolWidth(50);
          setRectSchoolHeight(20);
          setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
          setFrameHeight(350);
          setFrameWidth(350);
          setNameRectWidth(34);
          setNameRectHeight(170);
          setRectbgcolor('#14477A');
          break;
        case FRAMES.THREE:
          setTextPositions([{ textPositionX: 0.2, textPositionY: 219.5  }]);
          setImagePositions([{ imagePositionsX: 222, imagePositionsY: 120 }]);
          setRectWidth(0.5);
          setRectHeight(0.5);
          setDefaultImageDimensions({ width: 149, height: 149 });
          setRectSchoolWidth(50);
          setRectSchoolHeight(20);
          setTextSchoolPositions([{ textSchoolPositionX: 2, textSchoolPositionY: 19.8 }]);
          setFrameHeight(350);
          setFrameWidth(350);
          setNameRectWidth(219);
          setNameRectHeight(245.8);
          setRectbgcolor(svgUrl);
          break;
        case FRAMES.FOUR:
            setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(345);
            setRectHeight(60);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.FIVE:
            setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(298);
            setRectHeight(60);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.SIX:
            setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(300);
            setRectHeight(60);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.SEVEN:
            setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(289);
            setRectHeight(60);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.EIGHT:
            setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(289);
            setRectHeight(60);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.NINE:
            setTextPositions([{ textPositionX: 0.2, textPositionY: 219.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(350);
            setRectHeight(51);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.TEN:
            setTextPositions([{ textPositionX: 0.2, textPositionY: 219.5  }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(350);
            setRectHeight(51);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
        case FRAMES.ELEVEN:
            setTextPositions([{ textPositionX: 0.2, textPositionY: 219.5  }]);
            setImagePositions([{ imagePositionsX: 222, imagePositionsY: 120 }]);
            setRectWidth(0.5);
            setRectHeight(0.5);
            setDefaultImageDimensions({ width: 149, height: 149 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 2, textSchoolPositionY: 19.8 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(219);
            setNameRectHeight(245.8);
            setRectbgcolor(svgUrl);
          break;
        case FRAMES.TWELVE:
            setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }]);
            setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
            setImagePositions([{ imagePositionsX: 89, imagePositionsY: 0 }]);
            setRectWidth(289);
            setRectHeight(60);
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setDefaultImageDimensions({ width: 300, height: 300 });
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(34);
            setNameRectHeight(170);
            setRectbgcolor('#14477A');
          break;
   {/*     case FRAMES.THIRTEEN:
            setTextPositions([{ textPositionX: 0.2, textPositionY: 219.5  }]);
            setImagePositions([{ imagePositionsX: 222, imagePositionsY: 120 }]);
            setRectWidth(0.5);
            setRectHeight(0.5);
            setDefaultImageDimensions({ width: 149, height: 149 });
            setRectSchoolWidth(50);
            setRectSchoolHeight(20);
            setTextSchoolPositions([{ textSchoolPositionX: 1, textSchoolPositionY: 19.8 }]);
            setFrameHeight(350);
            setFrameWidth(350);
            setNameRectWidth(29);
      setNameRectHeight(169); 
      break;    */}
        default:
          setTextPositions([{ textPositionX: 6, textPositionY: 256.5 }])
          setRectWidth(289);
          setRectHeight(60);;
          setRectSchoolWidth(0.5);
          setRectSchoolHeight(0.5);
          setTextSchoolPositions([{ textSchoolPositionX: 0.5, textSchoolPositionY: 0.5 }]);
          setFrameHeight(350);
          setFrameWidth(350);
          setNameRectWidth(222);
          setNameRectHeight(245.8);
          break;
      }
    }, [selectedFrame]);

  return (
    <>
      <Helmet>
        <title>Akatakyieframe | AX Group 25th Anniversary</title>
        <meta name='Akatakyieframe | AX Group 25th Anniversary' contect='Frame for AX Group 25th Anniversary' />
      </Helmet>

      <Container>
        <C2>
          <C1>
            {typeof window !== 'undefined' && (
              <CanvasStage
                stageRef={stageRef}
                userName={userName}
                guildName={guildName}
                frameImg={frameImg}
                image={image}
                alignment={alignment}
                fontColor={fontColor}
                checked={checked}
                checkedGuild={checkedGuild}
                fontFamily={fontFamily}
                bgColor={bgColor}
                bgColorGuild={bgColorGuild}
                fontColorGuild={fontColorGuild}
                fontFamilyGuild={fontFamilyGuild}
                height={height}
                width={width}
                textPositions={textPositions}
                rectWidth={rectWidth} // Pass rect width
                rectHeight={rectHeight} // Pass rect height
                defaultImageDimensions={defaultImageDimensions}
                imagePositions={imagePositions}
                rectSchoolWidth={rectSchoolWidth}
                rectSchoolHeight={rectSchoolHeight}
                textSchoolPositions={textSchoolPositions}
                frameHeight={frameHeight}
                frameWidth={frameWidth}
                nameRectWidth={nameRectWidth}
                nameRectHeight={nameRectHeight}
                rectbgcolor={rectbgcolor}
              />
            )}
            <CarouselC>
              <Carousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
            </CarouselC>
          </C1>

          <C3>
            <Container3>
              <Inputs
                handleChange={handleChange}
                handleChangeGuild={handleChangeGuild}
                checked={checked}
                checkedGuild={checkedGuild}
                setchecked={setchecked}
                setheckedGuild={setcheckedGuild}
                uploadedImage={uploadedImage}
                setUploadedImage={setUploadedImage}
                userName={userName}
                setUsername={setUserName}
                guildName={guildName}
                setGuildname={setGuildName}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
                bgColor={bgColor}
                setBgColor={setBgColor}
                fontColor={fontColor}
                setFontColor={setFontColor}
                alignment={alignment}
                bgColorGuild={bgColorGuild}
                setBgColorGuild={setBgColorGuild}
                fontColorGuild={fontColorGuild}
                setFontColorGuild={setFontColorGuild}
                handleAlignment={handleAlignment}
                align={align}
                fontFamilyGuild={fontFamilyGuild}
                setFontFamilyGuild={setFontFamilyGuild}
                setHeight={setHeight}
                setWidth={setWidth}
              />
            </Container3>
            <Download stageRef={stageRef} />
          </C3>
        </C2>
      </Container>
    </>
  );
};

export default Frame;
