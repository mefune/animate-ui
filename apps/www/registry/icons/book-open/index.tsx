'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type BookOpenProps = IconProps<keyof typeof animations>;

const animations = {
  // A Latin book: the right leaf turns to the left; lines draw on the left page.
  default: {
    spine: {},
    leftPage: {},
    rightPage: {},
    rightLeaf: {
      initial: {
        scaleX: 1,
        opacity: 1,
        transformOrigin: '12px 12.25px',
        transition: { duration: 0 },
      },
      animate: {
        scaleX: [1, 0.02, -1, -1],
        opacity: [1, 1, 1, 0],
        transformOrigin: '12px 12.25px',
        transition: {
          duration: 0.75,
          times: [0, 0.4, 0.8, 1],
          ease: 'easeInOut',
        },
      },
    },
    leftLeaf: { initial: { opacity: 0 }, animate: { opacity: 0 } },
    lineL1: {
      initial: { opacity: 0, pathLength: 0, transition: { duration: 0.12 } },
      animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
          opacity: { duration: 0.1, delay: 0.55 },
          pathLength: { duration: 0.25, delay: 0.55, ease: 'easeOut' },
        },
      },
    },
    lineL2: {
      initial: { opacity: 0, pathLength: 0, transition: { duration: 0.12 } },
      animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
          opacity: { duration: 0.1, delay: 0.65 },
          pathLength: { duration: 0.25, delay: 0.65, ease: 'easeOut' },
        },
      },
    },
    lineR1: {
      initial: { opacity: 0, pathLength: 0 },
      animate: { opacity: 0, pathLength: 0 },
    },
    lineR2: {
      initial: { opacity: 0, pathLength: 0 },
      animate: { opacity: 0, pathLength: 0 },
    },
  } satisfies Record<string, Variants>,
  // A right-to-left book: the left leaf turns to the right; lines draw on the right page.
  rtl: {
    spine: {},
    leftPage: {},
    rightPage: {},
    rightLeaf: { initial: { opacity: 0 }, animate: { opacity: 0 } },
    leftLeaf: {
      initial: {
        scaleX: 1,
        opacity: 1,
        transformOrigin: '12px 12.25px',
        transition: { duration: 0 },
      },
      animate: {
        scaleX: [1, 0.02, -1, -1],
        opacity: [1, 1, 1, 0],
        transformOrigin: '12px 12.25px',
        transition: {
          duration: 0.75,
          times: [0, 0.4, 0.8, 1],
          ease: 'easeInOut',
        },
      },
    },
    lineL1: {
      initial: { opacity: 0, pathLength: 0 },
      animate: { opacity: 0, pathLength: 0 },
    },
    lineL2: {
      initial: { opacity: 0, pathLength: 0 },
      animate: { opacity: 0, pathLength: 0 },
    },
    lineR1: {
      initial: { opacity: 0, pathLength: 0, transition: { duration: 0.12 } },
      animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
          opacity: { duration: 0.1, delay: 0.55 },
          pathLength: { duration: 0.25, delay: 0.55, ease: 'easeOut' },
        },
      },
    },
    lineR2: {
      initial: { opacity: 0, pathLength: 0, transition: { duration: 0.12 } },
      animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
          opacity: { duration: 0.1, delay: 0.65 },
          pathLength: { duration: 0.25, delay: 0.65, ease: 'easeOut' },
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: BookOpenProps) {
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
      {...props}
    >
      <motion.path
        d="M12 6.253v13"
        variants={variants.spine}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
        variants={variants.leftPage}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        variants={variants.rightPage}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"
        variants={variants.rightLeaf}
        initial="initial"
        animate={controls}
        style={{ transformBox: 'view-box' }}
      />
      <motion.path
        d="M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253z"
        variants={variants.leftLeaf}
        initial="initial"
        animate={controls}
        style={{ transformBox: 'view-box' }}
      />
      <motion.path
        d="M5.2 9.7c1.5-.35 2.9-.35 4.2.05"
        strokeWidth={1.3}
        variants={variants.lineL1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M5.2 12.7c1.5-.35 2.9-.35 4.2.05"
        strokeWidth={1.3}
        variants={variants.lineL2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M18.8 9.7c-1.5-.35-2.9-.35-4.2.05"
        strokeWidth={1.3}
        variants={variants.lineR1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M18.8 12.7c-1.5-.35-2.9-.35-4.2.05"
        strokeWidth={1.3}
        variants={variants.lineR2}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function BookOpen(props: BookOpenProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  BookOpen,
  BookOpen as BookOpenIcon,
  type BookOpenProps,
  type BookOpenProps as BookOpenIconProps,
};
