import * as React from 'react';

declare module "gsap" {
  export interface TweenConfig {
    [p: string]: any;
  }
}
