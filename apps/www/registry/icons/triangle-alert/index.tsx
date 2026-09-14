'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type TriangleAlertProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    outline: {},
    mark: {
      initial: { opacity: 1 },
      animate: {
        opacity: [1, 0.15, 1, 0.15, 1],
        transition: {
          duration: 1.1,
          times: [0, 0.2, 0.45, 0.7, 1],
          ease: 'easeInOut',
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: TriangleAlertProps) {
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
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        variants={variants.outline}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M12 9v4"
        variants={variants.mark}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M12 17h.01"
        variants={variants.mark}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function TriangleAlert(props: TriangleAlertProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  TriangleAlert,
  TriangleAlert as TriangleAlertIcon,
  type TriangleAlertProps,
  type TriangleAlertProps as TriangleAlertIconProps,
};
