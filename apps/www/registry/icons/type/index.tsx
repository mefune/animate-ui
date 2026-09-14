'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type TypeProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    mark: {
      initial: { opacity: 1 },
      animate: {
        opacity: [1, 0, 0, 0, 1],
        transition: {
          duration: 1.4,
          times: [0, 0.06, 0.6, 0.72, 1],
          ease: 'easeOut',
        },
      },
    },
    cursor: {
      initial: { opacity: 1 },
      animate: {
        opacity: [1, 1, 0, 1, 0, 1, 1],
        transition: {
          duration: 1.4,
          times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 1],
          ease: 'linear',
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: TypeProps) {
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
        d="M12 4v16"
        variants={variants.mark}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"
        variants={variants.mark}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M9 20h6"
        variants={variants.cursor}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Type(props: TypeProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Type,
  Type as TypeIcon,
  type TypeProps,
  type TypeProps as TypeIconProps,
};
