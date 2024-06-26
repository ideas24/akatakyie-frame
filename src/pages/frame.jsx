import React, { useState, useRef } from 'react';

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
  TENA: frameData.frames.TENA,
  TENB: frameData.frames.TENB,
  TENC: frameData.frames.TENC,
  TEND: frameData.frames.TEND,
  TENE: frameData.frames.TENE,
  TENF: frameData.frames.TENF,
  TENG: frameData.frames.TENG,
  TENH: frameData.frames.TENH,
  TENI: frameData.frames.TENI,
  TENJ: frameData.frames.TENJ,
  TENK: frameData.frames.TENK,
  TENL: frameData.frames.TENL,
  TENM: frameData.frames.TENM,
  TENN: frameData.frames.TENN,
  TEN0: frameData.frames.TEN0,
  TENP: frameData.frames.TENP,
  TENQ: frameData.frames.TENQ,
  TENR: frameData.frames.TENR,
  TENS: frameData.frames.TENS,
  TENT: frameData.frames.TENT,
  TENU: frameData.frames.TENU,
  TENV: frameData.frames.TENV,
  TENW: frameData.frames.TENW,
  TENX: frameData.frames.TENX,
  TENY: frameData.frames.TENY,
  TENZ: frameData.frames.TENZ,
  TENAA: frameData.frames.TENAA,
  TENBB: frameData.frames.TENBB,
  TENCC: frameData.frames.TENCC,
  TENDD: frameData.frames.TENDD,
  TENEE: frameData.frames.TENEE,
  TENFF: frameData.frames.TENFF,
  TENGG: frameData.frames.TENGG,
  TENHH: frameData.frames.TENHH,
  TENII: frameData.frames.TENII,
  TENJJ: frameData.frames.TENJJ,
  TENKK: frameData.frames.TENKK,
  TENLL: frameData.frames.TENLL,
  TENMM: frameData.frames.TENMM,
  TENNN: frameData.frames.TENNN,
  TEN00: frameData.frames.TEN00,
  TEN01: frameData.frames.TEN01,
  TEN02: frameData.frames.TEN02,
  TEN03: frameData.frames.TEN03,
  TEN04: frameData.frames.TEN04,
  TEN05: frameData.frames.TEN05,
  TEN06: frameData.frames.TEN06,
  TEN07: frameData.frames.TEN07,
  TEN08: frameData.frames.TEN08,
  TEN09: frameData.frames.TEN09,
  TEN10: frameData.frames.TEN10,
  TEN11: frameData.frames.TEN11,
  TEN12: frameData.frames.TEN12,
  TEN13: frameData.frames.TEN13,
  TEN14: frameData.frames.TEN14,
  TEN15: frameData.frames.TEN15,
  TEN16: frameData.frames.TEN16,
  TEN17: frameData.frames.TEN17,
  TEN18: frameData.frames.TEN18,
  TEN19: frameData.frames.TEN19,
  TEN20: frameData.frames.TEN20,
  TEN21: frameData.frames.TEN21,
};

const align = ['center', 'left', 'right'];
let i = 0;

const Frame = () => {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [userName, setUserName] = useState('Your Name');
  const [guildName, setGuildName] = useState('Guild Name');
  const [checked, setchecked] = useState(false);
  const [checkedGuild, setcheckedGuild] = useState(false);
  const [fontFamily, setFontFamily] = useState(null);
  const [fontFamilyGuild, setFontFamilyGuild] = useState(null);
  const [fontColorGuild, setFontColorGuild] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [bgColorGuild, setBgColorGuild] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [alignment, setAlignment] = useState(align[2]);

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
