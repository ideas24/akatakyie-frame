import { useState, useEffect } from 'react';

const useCustomFontSize = (fontSize, shapeRef) => {
  const [customFontSize, setCustomFontSize] = useState(fontSize);

  useEffect(() => {
    const textNode = shapeRef.current.findOne('Text');
    const textWidth = textNode.width();
    const textHeight = textNode.height();
    const rectWidth = shapeRef.current.findOne('Rect').width();
    const rectHeight = shapeRef.current.findOne('Rect').height();

    if (textWidth > rectWidth || textHeight > rectHeight) {
      const newFontSize = Math.min(rectWidth / textWidth, rectHeight / textHeight) * customFontSize;
      setCustomFontSize(newFontSize);
    }
  }, [name]);

  return customFontSize;
};

export default useCustomFontSize;
