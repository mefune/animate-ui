'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type GroupProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    frame: {
      initial: { pathLength: 1 },
      animate: {
        pathLength: [1, 0, 1],
        transition: { duration: 0.9, times: [0, 0.2, 1], ease: 'easeInOut' },
      },
    },
    upper: {
      initial: { x: 0, y: 0 },
      animate: {
        x: [0, -1.6, 0],
        y: [0, -1.6, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    lower: {
      initial: { x: 0, y: 0 },
      animate: {
        x: [0, 1.6, 0],
        y: [0, 1.6, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: GroupProps) {
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
        d="M3 7V5c0-1.1.9-2 2-2h2"
        variants={variants.frame}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M17 3h2c1.1 0 2 .9 2 2v2"
        variants={variants.frame}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M21 17v2c0 1.1-.9 2-2 2h-2"
        variants={variants.frame}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M7 21H5c-1.1 0-2-.9-2-2v-2"
        variants={variants.frame}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        width="7"
        height="5"
        x="7"
        y="7"
        rx="1"
        variants={variants.upper}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        width="7"
        height="5"
        x="10"
        y="12"
        rx="1"
        variants={variants.lower}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Group(props: GroupProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Group,
  Group as GroupIcon,
  type GroupProps,
  type GroupProps as GroupIconProps,
};
