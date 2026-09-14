'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type MinusProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    bar: {
      initial: { pathLength: 1 },
      animate: {
        pathLength: [1, 0.2, 1],
        transition: { duration: 0.9, times: [0, 0.4, 1], ease: 'easeInOut' },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: MinusProps) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="initial"
      animate={controls}
      {...props}
    >
      <motion.path
        d="M5 12h14"
        variants={variants.bar}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Minus(props: MinusProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Minus,
  Minus as MinusIcon,
  type MinusProps,
  type MinusProps as MinusIconProps,
};
