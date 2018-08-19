import Typography from 'typography'

const typography = new Typography({
  overrideStyles: (actions, options, styles) => ({
    '.header-font': {
      fontFamily: options.headerFontFamily.join(','),
    },
  }),
})

export default typography
