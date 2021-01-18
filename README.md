# \<scoped-bug>

A simple recreation of the bug described in [this issue comment](https://github.com/modernweb-dev/web/issues/1177#issuecomment-758476504).

To recreate compare running `npm run storybook` vs `npm run storybook:hmr`

Without hmr, the scoped element (ScopedChild) is rendered properly.

However, with hmr, a runtime error occurs, this seems to be because of an incompatibility caused by the way
coped-elements handles lazy loaded elements vs the way dev-server-hmr handles identifying classes to apply hmr to.
