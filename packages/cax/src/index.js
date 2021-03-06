import TWEEN from './common/tween'
import To from './common/to'

import Stage from './render/display/stage'
import WeStage from './render/display/we-stage'
import Graphics from './render/display/graphics'
import Bitmap from './render/display/bitmap'
import Text from './render/display/text'
import Group from './render/display/group'
import Sprite from './render/display/sprite'
import RoundedRect from './render/display/shape/rounded-rect'
import ArrowPath from './render/display/shape/arrow-path'
import Ellipse from './render/display/shape/ellipse'

import Button from './render/display/element/button'

import Rect from './render/display/shape/rect'
import Circle from './render/display/shape/circle'
import Polygon from './render/display/shape/polygon'
import EquilateralPolygon from './render/display/shape/equilateral-polygon'

import {setRafInterval, clearRafInterval} from './common/raf-interval'

const cax = {
  easing: {
    linear: TWEEN.Easing.Linear.None
  },
  util: {
    randomInt: (min, max) => {
      return min + Math.floor(Math.random() * (max - min + 1))
    }
  },

  Stage,
  WeStage,
  Graphics,
  Bitmap,
  Text,
  Group,
  Sprite,
  ArrowPath,
  Ellipse,

  Button,

  RoundedRect,
  Rect,
  Circle,
  Polygon,
  EquilateralPolygon,

  setInterval: setRafInterval,
  clearInterval: clearRafInterval,

  caxCanvasId: 0,
  TWEEN,
  To
};

['Quadratic',
  'Cubic',
  'Quartic',
  'Quintic',
  'Sinusoidal',
  'Exponential',
  'Circular',
  'Elastic',
  'Back',
  'Bounce'].forEach(item => {
  const itemLower = item.toLowerCase()
  cax.easing[itemLower + 'In'] = TWEEN.Easing[item].In
  cax.easing[itemLower + 'Out'] = TWEEN.Easing[item].Out
  cax.easing[itemLower + 'InOut'] = TWEEN.Easing[item].InOut
})

export default cax
