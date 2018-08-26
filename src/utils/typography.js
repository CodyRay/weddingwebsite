import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

const typography = new Typography({
  ...bootstrapTheme,
  overrideStyles: (actions, options, styles) => ({
    '.header-font': {
      fontFamily: options.headerFontFamily.join(','),
    },
  }),
})

export default typography
