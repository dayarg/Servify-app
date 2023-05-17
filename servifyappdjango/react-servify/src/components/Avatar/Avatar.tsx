import React from "react";

export type AvatarProps = {
  name: string;
  size?: string;
  textSize: string;
}

const Avatar = ({ name, size = "w-10 h-10", textSize }: AvatarProps): JSX.Element => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div
      className={`bg-secondary rounded-full flex items-center justify-center ${size}`}
    >
      <span className={`text-white font-medium ${textSize}`}>{firstLetter}</span>
    </div>
  );
};

export default Avatar;
