export default {
  methods: {
    getImage (image) {
      return require('../assets/images/' + image)
    },
    getFileImage (url) {
      const strings = url.split('.')
      const extension = strings[strings.length - 1]
      switch (extension) {
        case 'jpg':
          return url
        case 'jpeg':
          return url
        case 'png':
          return url
        case 'gif':
          return url
        case 'pdf':
          return require('../assets/images/pdf.svg')
        default:
          return require('../assets/images/doc.svg')
      }
    }
  }
}
