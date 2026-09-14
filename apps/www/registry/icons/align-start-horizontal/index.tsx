'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type AlignStartHorizontalProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    b1: {
      initial: { y: 0 },
      animate: {
        y: [0, 2.5, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    b2: {
      initial: { y: 0 },
      animate: {
        y: [0, -2.5, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    edge: {},
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: AlignStartHorizontalProps) {
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
      <motion.rect
        width="6"
        height="16"
        x="4"
        y="6"
        rx="2"
        variants={variants.b1}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        width="6"
        height="9"
        x="14"
        y="6"
        rx="2"
        variants={variants.b2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M22 2H2"
        variants={variants.edge}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function AlignStartHorizontal(props: AlignStartHorizontalProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  AlignStartHorizontal,
  AlignStartHorizontal as AlignStartHorizontalIcon,
  type AlignStartHorizontalProps,
  type AlignStartHorizontalProps as AlignStartHorizontalIconProps,
};
