import React, { useState, useEffect, useRef } from 'react';

// Libraries
import {Rect, Text, Group} from 'react-konva';
import useCustomFontSize from './useCustomFontSize';


const TransformableText = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  name,
  colour,
  fontFamily,
  fontStyle,
  fontColor,
  alignment,
  fontSize,
  frame
}) => {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef();
  const customFontSize = useCustomFontSize(fontSize, textRef);

  useEffect(() => {
    if (textRef.current) {
      const textNode = textRef.current;
      const textBounds = textNode.getClientRect();
      setTextWidth(textBounds.width);
    }
  }, [name]);

  useEffect(() => {
    if (isSelected && textRef.current) {
      textRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Group
        onClick={onSelect}
        id={shapeProps.id}
        onTap={onSelect}
        ref={textRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...shapeProps}
        draggable={false}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={() => {
          if (textRef.current) {
            const textNode = textRef.current;
            const textBounds = textNode.getClientRect();
            const newFontSize = Math.max(1, Math.min(280 / textBounds.width,55 / textBounds.height) * customFontSize);
            textNode.fontSize(newFontSize);
            textNode.y(30 - (newFontSize /2));
            const node = textRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      >
        <Rect
          width={289}
          height={60}
          fill={'#343F60'}
          cornerRadius={[0,0,0,0]}
        />
        <Text
          width={280}
          align="center"
          verticalAlign="middle"
          text={name}
          fill={fontColor || "white"}
          fontSize={customFontSize}
          fontFamily={fontFamily || "Arial"}
          fontStyle={fontStyle || "normal"}
          wrap="word"
        />
      </Group>
    </>
  );
};

export default TransformableText;
