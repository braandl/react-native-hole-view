import { requireNativeComponent, View, ViewProps } from 'react-native';
import * as React from 'react';

const RNHoleViewManager = requireNativeComponent('RNHoleView');

const DEFAULT_RADIUS_VALUE = -1;

export class RNHole {
  height: number;
  width: number;
  x: number;
  y: number;
  borderRadius?: number;
  borderTopLeftRadius? = DEFAULT_RADIUS_VALUE;
  borderTopRightRadius? = DEFAULT_RADIUS_VALUE;
  borderBottomLeftRadius? = DEFAULT_RADIUS_VALUE;
  borderBottomRightRadius? = DEFAULT_RADIUS_VALUE;
}

export interface IRNHoleView extends ViewProps {
  holes?: RNHole[];
}

export const RNHoleView: React.FC<IRNHoleView> = props => {
  return <RNHoleViewManager {...props} />;
};
