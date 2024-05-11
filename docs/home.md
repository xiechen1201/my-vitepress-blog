---
outline: deep
---

# 关于我

代码高亮

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

行数高亮

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

多行高亮

```js{4,6}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

注释高亮

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

代码聚焦

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

颜色差异

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

代码组

:::code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::