// [wip] credit, version( typescript, type )

// 本体: https://github.com/remarkjs/remark-react

import unified from 'unified'

declare function react(options): unified.Attacher<[], unified.Settings>

declare namespace react {
  // ToDo: ライブラリ本体の定義部分からコピペしただけなのでなんとかする
  settings: options || {}
  createElement: settings.createElement || globalCreateElement
  Fragment: settings.fragment || globalFragment
  clean: settings.sanitize !== false
  scheme:
    clean && typeof settings.sanitize !== 'boolean' ? settings.sanitize : null
  toHastOptions: settings.toHast || {}
  components: settings.remarkReactComponents || {}
}

declare namespace react.h {}
declare namespace react.compile {}

export = react;