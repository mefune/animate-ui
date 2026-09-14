'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type AlignCenterVerticalProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    edge: {},
    b1: {
      initial: { x: 0 },
      animate: {
        x: [0, 2, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    b2: {
      initial: { x: 0 },
      animate: {
        x: [0, -2, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: AlignCenterVerticalProps) {
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
        d="M12 2v20"
        variants={variants.edge}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
        variants={variants.b1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
        variants={variants.b1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
        variants={variants.b2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
        variants={variants.b2}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function AlignCenterVertical(props: AlignCenterVerticalProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  AlignCenterVertical,
  AlignCenterVertical as AlignCenterVerticalIcon,
  type AlignCenterVerticalProps,
  type AlignCenterVerticalProps as AlignCenterVerticalIconProps,
};
