'use client';

import * as React from 'react';
import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/registry/icons/icon';

type CameraProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    body: {},
    lens: {
      initial: { fillOpacity: 0 },
      animate: {
        fillOpacity: [0, 1, 1, 0],
        transition: {
          duration: 0.9,
          times: [0, 0.35, 0.55, 1],
          ease: 'easeInOut',
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: CameraProps) {
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
        d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
        variants={variants.body}
        initial="initial"
        animate={controls}
      />
      <motion.circle
        cx="12"
        cy="13"
        r="3"
        fill="currentColor"
        variants={variants.lens}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Camera(props: CameraProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Camera,
  Camera as CameraIcon,
  type CameraProps,
  type CameraProps as CameraIconProps,
};
