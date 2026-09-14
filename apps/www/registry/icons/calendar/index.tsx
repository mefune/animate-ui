'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type CalendarProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    page: {},
    header: {},
    tabs: {},
    d1: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: { duration: 1.3, times: [0, 0.04, 0.1], ease: 'easeOut' },
      },
    },
    d2: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.098, 0.158],
          ease: 'easeOut',
        },
      },
    },
    d3: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.156, 0.216],
          ease: 'easeOut',
        },
      },
    },
    d4: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.214, 0.274],
          ease: 'easeOut',
        },
      },
    },
    d5: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.272, 0.332],
          ease: 'easeOut',
        },
      },
    },
    d6: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: { duration: 1.3, times: [0, 0.33, 0.39], ease: 'easeOut' },
      },
    },
    d7: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.388, 0.448],
          ease: 'easeOut',
        },
      },
    },
    d8: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.446, 0.506],
          ease: 'easeOut',
        },
      },
    },
    d9: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.504, 0.564],
          ease: 'easeOut',
        },
      },
    },
    d10: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.562, 0.622],
          ease: 'easeOut',
        },
      },
    },
    d11: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: { duration: 1.3, times: [0, 0.62, 0.68], ease: 'easeOut' },
      },
    },
    d12: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.678, 0.738],
          ease: 'easeOut',
        },
      },
    },
    d13: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.736, 0.796],
          ease: 'easeOut',
        },
      },
    },
    d14: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.794, 0.854],
          ease: 'easeOut',
        },
      },
    },
    d15: {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 0, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.852, 0.912],
          ease: 'easeOut',
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: CalendarProps) {
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
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        variants={variants.page}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M3 9h18"
        variants={variants.header}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M8 2v3"
        variants={variants.tabs}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M16 2v3"
        variants={variants.tabs}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="4.5"
        y="10.57"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d1}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="7.7"
        y="10.57"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d2}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="10.9"
        y="10.57"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d3}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="14.1"
        y="10.57"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d4}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="17.3"
        y="10.57"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d5}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="4.5"
        y="13.9"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d6}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="7.7"
        y="13.9"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d7}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="10.9"
        y="13.9"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d8}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="14.1"
        y="13.9"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d9}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="17.3"
        y="13.9"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d10}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="4.5"
        y="17.23"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d11}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="7.7"
        y="17.23"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d12}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="10.9"
        y="17.23"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d13}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="14.1"
        y="17.23"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d14}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x="17.3"
        y="17.23"
        width="2.2"
        height="2.2"
        rx="0.45"
        fill="currentColor"
        stroke="none"
        variants={variants.d15}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Calendar(props: CalendarProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Calendar,
  Calendar as CalendarIcon,
  type CalendarProps,
  type CalendarProps as CalendarIconProps,
};
