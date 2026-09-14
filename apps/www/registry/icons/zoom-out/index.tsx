'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type ZoomOutProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    glass: {
      initial: { scale: 1, transformOrigin: '50% 50%' },
      animate: {
        scale: [1, 0.84, 1],
        transformOrigin: '50% 50%',
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    part: {},
    handle: {},
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: ZoomOutProps) {
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
      <motion.g variants={variants.glass} initial="initial" animate={controls}>
        <motion.circle
          cx="11"
          cy="11"
          r="8"
          variants={variants.part}
          initial="initial"
          animate={controls}
        />
        <motion.line
          x1="8"
          x2="14"
          y1="11"
          y2="11"
          variants={variants.part}
          initial="initial"
          animate={controls}
        />
      </motion.g>
      <motion.line
        x1="21"
        x2="16.65"
        y1="21"
        y2="16.65"
        variants={variants.handle}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function ZoomOut(props: ZoomOutProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  ZoomOut,
  ZoomOut as ZoomOutIcon,
  type ZoomOutProps,
  type ZoomOutProps as ZoomOutIconProps,
};
