import React, { useState, useEffect } from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';

import CustomButtons from './CustomTools';

const Container2 = styled.div`
  ${tw`
  mt-3
  bg-frame-xgray
  rounded-lg
  pt-2
`}
`;

const Heading1 = styled.h1`
  ${tw`
  w-3/4
  text-2xl
  text-color-bright
  font-normal
  col-span-2
  pb-2
  pl-4
  text-left
  mb-2
`}
`;

const Section1 = styled.div`
  ${tw`
  flex
  `}
`;

const Section2 = styled.div`
  ${tw`
    pt-0
    px-1
    md:grid grid-cols-1 auto-cols-max
  `}
`;

const Toggle = styled.div`
  ${tw`
     pl-5
     pt-1.5
  `}
`;

const FormFillup = styled.input`
  width:93%;
  padding:12px 13px;
  margin: auto;
  margin-bottom:10px;
  display: inline-block;
  border:1px solid #666666;
  border-radius:4px;
  box-sizing: border-box;
  background-color: #333333;
  color: #ffffff;
  font-size:1rem;
`;

const CustomText = ({
  userName,
  guildName,
  setUsername,
  setGuildname,
  checked,
  checkedGuild,
  handleChangeGuild,
  handleChange,
  fontFamily,
  fontColor,
  setFontColor,
  bgColor,
  setBgColor,
  alignment,
  setFontFamily,
  bgColorGuild,
  setBgColorGuild,
  fontColorGuild,
  handleAlignment,
  setFontColorGuild,
  setFontFamilyGuild,
  fontFamilyGuild,
  align
 }) => {
  const [selectedOption, setSelectedOption] = useState(userName);
  const [initialLoad, setInitialLoad] = useState(true);

  const options = [
    'I am an Okatakyie - Opoku Ware ba ne me',
    'I am an Okatakyie - Santisberg trained',
    'I am an Okatakyie - I cover / protect my people',
    'I am an Okatakyie - nothing intimidates me',
    'I am an Okatakyie - I have a unique number for life',
    'I am an Okatakyie - ever reliable',
    'Yes! We are Akatakyie',
    'We are Akatakyie - a big family',
    'Extɛ - (learning at late hours and dawn) is our thing', 
    'We are Akatakyie - friends became brothers.',
    'I am an Okatakyie - I can do jungle marching',
    'I am an Okatakyie - Yes i And a shark too',
    'We are Akatakyie - of course we are Sharks too',
    'I am proud to be related to an Okatakyie',
    'I am proud to be married to an Okatakyie', 
    'Akatakyie affiliate and proud',
    'Akataslopsa - The big family ',
    'My Dad is an Okatakyie',
    'Of course I am an Okatakyie',
    'My Man is an Okatakyie',
    'I am an Okatakyie - Daps Trained me',
    'I am an Okatakyie-  A true Royal',
    'I am an Okatakyie- Mr Adu Amankwaa trained me',
    'I am an Okatakyie- Mr Owusu Sekyere trained me',
    'I am Okatakyie- Mr Owusu Donkor trained me',
    'I am an Okatakyie- Krigato was my training grounds',
    'I an an Okatakyie- Burnsen burner flame excites me',
    'I am an Okatakyie- Orlando was my Sportsmaster',
    'I am an Okatakyie- Imanus confuses our opposition',
    'I am an Okatakyie- Imanus Tuas Dominé',
    'I am an Okatakyie Mr James Berko trained me',
    'I am an Okatakyie- Sunday Joff was awesome',
    'I am an Okatakyie- When Buton no dey i Trumpet',
    'My brother is an Okatakyie'

  ];

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
    setUsername(e.target.value);
  };

  useEffect(() => {
    // Simulate toggle action programmatically when the component mounts
    if (initialLoad) {
      handleChange(true);
      setInitialLoad(false);
    }
  }, [initialLoad, handleChange]);

  return (
    <Container2>
      <Section1>
        <Heading1>Caption</Heading1>
        {/* Toggle button is hidden */}
      </Section1>
      {checked && (
        <Section2>
          <select value={selectedOption} onChange={handleChangeOption}>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        { /*  <CustomButtons
            fontColors={fontColor}
            setFontColors={setFontColor}
            bgColors={bgColor}
            setBgColors={setBgColor}
            alignment={alignment}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontlist="list-font-name"
            handleAlignment={handleAlignment}
            align={align}
            FontId="custom-color-font-name"
            bgId="custom-color-bg-name"
            style={{ display: checked ? 'block' : 'none' }}
          /> */}
        </Section2>
      )}

      <Section1 style={{ paddingTop: '25px' }}>
     <Heading1>Name</Heading1>
      <label htmlFor='material-switch'>
        <Toggle>
          <Switch
            checked={checkedGuild}
            onChange={handleChangeGuild}
            onColor='#666666'
            onHandleColor='#ffffff'
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={13}
            width={30}
            className='react-switch'
            id='material-switch'
          />
        </Toggle>
      </label>
    </Section1> 
    {checkedGuild && (
      <Section2 style={{ paddingBottom: '20px' }}>
        <FormFillup
          type='text'
          value={guildName}
          name='guildname'
          placeholder=''
          onChange={(e) => setGuildname(e.target.value)}
        />

     {/*   <CustomButtons
            fontColors={fontColorGuild}
            setFontColors={setFontColorGuild}
            bgColors={bgColorGuild}
            setBgColors={setBgColorGuild}
            alignment={alignment}
            fontFamily={fontFamilyGuild}
            setFontFamily={setFontFamilyGuild}
            fontlist="list-font-guild"
            handleAlignment={handleAlignment}
            align={align}
            FontId="custom-color-font-guild"
            bgId="custom-color-bg-guild"
            style={{ display: checked ? 'block' : 'none' }}
          />  */}
        </Section2>
      )}
    </Container2>
  );
};

export const options = [

  'I am an Okatakyie - Opoku Ware ba ne me',
  'I am an Okatakyie - Santisberg trained',
  'I am an Okatakyie - I cover / protect my people',
  'I am an Okatakyie - nothing intimidates me',
  'I am an Okatakyie - I have a unique number for life',
  'I am an Okatakyie - ever reliable',
  'Yes! We are Akatakyie',
  'We are Akatakyie - a big family',
  'Extɛ - (learning at late hours and dawn) is our thing', 
  'We are Akatakyie - friends became brothers.',
  'I am an Okatakyie - I can do jungle marching',
  'I am an Okatakyie - Yes i And a shark too',
  'We are Akatakyie - of course we are Sharks too',
  'I am proud to be related to an Okatakyie',
  'I am proud to be married to an Okatakyie', 
  'Akatakyie affiliate and proud',
  'Akataslopsa - The big family ',
  'My Dad is an Okatakyie',
  'Of course I am an Okatakyie',
  'My Man is an Okatakyie',
  'I am an Okatakyie - Daps Trained me',
  'I am an Okatakyie-  A true Royal',
  'I am an Okatakyie- Mr Adu Amankwaa trained me',
  'I am an Okatakyie- Mr Owusu Sekyere trained me',
  'I am Okatakyie- Mr Owusu Donkor trained me',
  'I am an Okatakyie- Krigato was my training grounds',
  'I an an Okatakyie- Burnsen burner flame excites me',
  'I am an Okatakyie- Orlando was my Sportsmaster',
  'I am an Okatakyie- Imanus confuses our opposition',
  'I am an Okatakyie- Imanus Tuas Dominé',
  'I am an Okatakyie Mr James Berko trained me',
  'I am an Okatakyie- Sunday Joff was awesome',
  'I am an Okatakyie- When Buton no dey i Trumpet',
  'My brother is an Okatakyie'
  
];

export default CustomText;
