import Glide from '../src/index'

// Required components
import Run from '../src/components/run'
import Html from '../src/components/html'
import Peek from '../src/components/peek'
import Build from '../src/components/build'
import Clones from '../src/components/clones'
import Window from '../src/components/window'
import Movement from '../src/components/movement'
import Translate from '../src/components/translate'
import Transition from '../src/components/transition'
import Dimensions from '../src/components/dimensions'

// Optional components
import Swipe from '../src/components/swipe'
import Height from '../src/components/height'
import Images from '../src/components/images'
import Anchors from '../src/components/anchors'
import Controls from '../src/components/controls'
import Keyboard from '../src/components/keyboard'
import Autoplay from '../src/components/autoplay'

const COMPONENTS = {
  // Required
  Html,
  Translate,
  Transition,
  Dimensions,
  Movement,
  Peek,
  Clones,
  Window,
  Build,
  Run,

  // Optional
  Swipe,
  Height,
  Images,
  Anchors,
  Controls,
  Keyboard,
  Autoplay
}

export default class extends Glide {
  mount (extensions) {
    super.mount(Object.assign(extensions, COMPONENTS))
  }
}
