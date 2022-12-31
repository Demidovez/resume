import Image from 'next/image';

interface IProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const BlobClipAvatar = (props: IProps) => {
  return (
    <>
      <Image
        {...props}
      />
      <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="svgClipAvatar"><path transform={`scale(${props.width / 480})`} fill="#474bff" d="M416,292Q439,344,393,369.5Q347,395,306,420.5Q265,446,224.5,417Q184,388,133.5,383.5Q83,379,79,330Q75,281,61.5,237Q48,193,68.5,149.5Q89,106,129,79.5Q169,53,215.5,56Q262,59,316,55.5Q370,52,379.5,107Q389,162,391,201Q393,240,416,292Z" /></clipPath>
      </svg>
    </>
  );
};

export default BlobClipAvatar;