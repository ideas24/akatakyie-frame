import React, { useState } from 'react';

/// Components
import { Stage, Layer, Image, Group, Rect } from 'react-konva';
import TransformableText from './TransformableText';
import TransformableImage from './TransformableImage';

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
          {checkedGuild && (
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={guildName}
              colour={bgColorGuild}
              fontFamily={fontFamilyGuild}
              alignment={alignment}
              fontColor={fontColorGuild}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
              fontStyle='normal'
              fontSize={22}
              shapeProps={rect[1]}
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
          )}
        </Group>

        <Image
          image={frameImg}
          width={350}
          height={350}
          style={{ zIndex: '100', position: 'absolute' }}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          listening={false}
        />
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
