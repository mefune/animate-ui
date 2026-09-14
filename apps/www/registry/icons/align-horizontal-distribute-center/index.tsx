'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type AlignHorizontalDistributeCenterProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    b1: {
      initial: { y: 0 },
      animate: {
        y: [0, -2, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    b2: {
      initial: { y: 0 },
      animate: {
        y: [0, 2, 0],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    t1b: {
      initial: { d: 'M7 22v-3' },
      animate: {
        d: ['M7 22v-3', 'M7 22v-5', 'M7 22v-3'],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    t1t: {
      initial: { d: 'M7 5V2' },
      animate: {
        d: ['M7 5V2', 'M7 3V2', 'M7 5V2'],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    t2b: {
      initial: { d: 'M17 22v-5' },
      animate: {
        d: ['M17 22v-5', 'M17 22v-3', 'M17 22v-5'],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
    t2t: {
      initial: { d: 'M17 7V2' },
      animate: {
        d: ['M17 7V2', 'M17 9V2', 'M17 7V2'],
        transition: { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({
  size,
  ...props
}: AlignHorizontalDistributeCenterProps) {
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
        height="14"
        x="4"
        y="5"
        rx="2"
        variants={variants.b1}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        width="6"
        height="10"
        x="14"
        y="7"
        rx="2"
        variants={variants.b2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M17 22v-5"
        variants={variants.t2b}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M17 7V2"
        variants={variants.t2t}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M7 22v-3"
        variants={variants.t1b}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M7 5V2"
        variants={variants.t1t}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function AlignHorizontalDistributeCenter(
  props: AlignHorizontalDistributeCenterProps,
) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeCenter as AlignHorizontalDistributeCenterIcon,
  type AlignHorizontalDistributeCenterProps,
  type AlignHorizontalDistributeCenterProps as AlignHorizontalDistributeCenterIconProps,
};
