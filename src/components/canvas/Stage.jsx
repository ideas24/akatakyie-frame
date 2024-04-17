import React, { useState } from 'react';

/// Components
import { Stage, Layer, Image, Group, Rect } from 'react-konva';
import TransformableText from './TransformableText';
import TransformableImage from './TransformableImage';
import { fill } from '@cloudinary/url-gen/actions/resize';

const CanvasStage = ({
  stageRef,
  userName,
  guildName,
  frameImg,
  image,
  checked,
  checkedGuild,
  bgColor,
  bgColorGuild,
  fontFamily,
  fontColor,
  fontColorGuild,
  fontFamilyGuild,
  alignment,
  width,
  height,
  textPositions, // New prop for text positions
  imagePositions,
  rectWidth, // New prop for Rect width
  rectHeight, // New prop for Rect height
  defaultImageDimensions, // New prop for default image dimensions
  rectSchoolWidth,
  rectSchoolHeight,
  textSchoolPositions,
  frameWidth,
  frameHeight,
  nameRectWidth,
  nameRectHeight,
  rectbgcolor,
}) => {
  const groupDimensions = {
    height: 372,
    width: 373,
  };
  const groupHeight = groupDimensions.height;
  const aspectRatio = width / height;
  const imageRenderWidth = aspectRatio * groupDimensions.height;
  const imageRenderHeight = groupDimensions.height;
  const imagePositionX = 0;
  const imagePositionY = 0;
  const rect = [
    {
      x: 50,
      y: 50,
      id: 'rect1',
    },
    {
      x: 100,
      y: 100,
      id: 'rect2',
    },
  ];

  const renderImg = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImg1',
    },
  ];

  const [tranImg, setTranImg] = useState(renderImg);
  const [selectedId1, selectShape1] = useState(null);
  const [rectangles, setRectangles] = useState(rect);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = () => {
    selectShape1(null);
    selectShape(null);
  };

  const calculateTextHeight = (text, fontFamily, nameFontsize) => {
    // Create a temporary canvas element to measure text dimensions
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${nameFontsize}px ${fontFamily}`;
  
    // Measure the text width
    const textWidth = context.measureText(text).width;
  
    // Calculate the number of lines based on the width of the text and the width of the shape
    const numLines = Math.ceil(textWidth / (rectSchoolWidth));
  
    // Calculate the total height based on font size and line height
    const totalHeight = numLines * (nameFontsize * 1.2); // Adjust line height as needed
  
    return totalHeight;
  };
  const nameFontsize = 10;

  return (
    <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
      <Layer>
        <Group
          clipX={imagePositionX}
          clipY={imagePositionY}
          clipWidth={groupDimensions.width}
          clipHeight={groupHeight}
        >
          <TransformableImage
            image={image}
            defaultImageWidth={defaultImageDimensions?.width ||imageRenderWidth}
            defaultImageHeight={defaultImageDimensions?.height ||imageRenderHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            shapeProps={{
              x: imagePositions[0]?.imagePositionsX || 80,
              y: imagePositions[0]?.imagePositionsY || 0,
            }}
            isSelected={renderImg[0].id === selectedId1}
            onSelect={() => {
              selectShape1(renderImg[0].id);
            }}
            onChange={(newAttrs) => {
              const imgs = tranImg.slice();
              imgs[0] = newAttrs;
              setTranImg(imgs);
            }}
          />
          {checked && (
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={userName}
              colour={bgColor}
              fontFamily={fontFamily}
              alignment={alignment}
              fontColor={fontColor}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
              fontStyle='bold'
              fontSize={20}
              verticalAlign="middle"
              shapeProps={{
                ...rect[0], 
                x: textPositions[0]?.textPositionX || 6, // Use the text position from props or fallback to default
                y: textPositions[0]?.textPositionY || 268.5,
                width: rectWidth, // Set the width
                height: rectHeight, // Set the height
              }}
              isSelected={rect[0].id === selectedId}
              onSelect={() => {
                selectShape(rect[0].id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[0] = newAttrs;
                setRectangles(rects);
              }}
            />
          )}
          
        </Group>

        <Image
          image={frameImg}
          width={frameWidth || 350}
          height={frameHeight || 350}
          style={{ zIndex: '100', position: 'absolute' }}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          listening={false}
        />
      </Layer>

      <Layer> 
        {checkedGuild && (
          <Group  x={nameRectWidth || 222} y={nameRectHeight || 245.8}>
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={guildName}
              colour='#F1A80F'
              fontFamily={fontFamilyGuild}
              alignment={alignment}
              fontColor='#FFFFFF'
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
              fontStyle='bold'
              fontSize={nameFontsize}
              shapeProps={{
              ...rect[1],
              x: textSchoolPositions[1]?.textSchoolPositionX || 0.5, // Use the text position from props or fallback to default
              y: textSchoolPositions[1]?.textSchoolPositionY || 0.5, 
              width: rectSchoolWidth, // Set the width
              height: calculateTextHeight(guildName, fontFamilyGuild, nameFontsize) ||rectSchoolHeight, // Set the height 
              fill: rectbgcolor,     
            }}
              isSelected={rect[1].id === selectedId}
              onSelect={() => {
                selectShape(rect[1].id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[1] = newAttrs;
                setRectangles(rects);
              }}
            />
          </Group>
          )}
      </Layer>      
    </Stage>
  );
};

export default CanvasStage;
