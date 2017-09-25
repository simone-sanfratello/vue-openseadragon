/* global Vue OpenSeadragon */
'use strict'

Vue.component('vue-openseadragon', {
  template: '<div :id="id"></div>',

  props: {
    id: {
      type: String,
      default: 'openseadradon-viewer'
    },
    options: {
      type: Object
    },
    i18n: {
      type: Object
    },
    messages: {
      default: {
        'Tooltips.FullPage': '',
        'Tooltips.Home': '',
        'Tooltips.ZoomIn': '',
        'Tooltips.ZoomOut': '',
        'Tooltips.NextPage': '',
        'Tooltips.PreviousPage': '',
        'Tooltips.RotateLeft': '',
        'Tooltips.RotateRight': '',
        'Errors.Dzc': '',
        'Errors.Dzi': '',
        'Errors.Xml': '',
        'Errors.ImageFormat': '',
        'Errors.Security': '',
        'Errors.Status': '',
        'Errors.OpenFailed': ''
      }
    }
  },

  data: function () {
    return {
      viewer: null
    }
  },

  updated: function () {
    this.setup()
  },

  methods: {
    setup: function () {
      if (!this.viewer && this.options) {
        this.translate()
        const _options = this.options
        _options.id = this.id
        this.viewer = OpenSeadragon(_options)
      }
    },

    resolve: function (object, key) {
      try {
        const _keys = key.split('.')
        let _cursor = object
        for (const _key of _keys) {
          _cursor = _cursor[_key]
        }
        return _cursor
      } catch (e) {
        return null
      }
    },

    /**
     @todo translate errors
     @see https://openseadragon.github.io/examples/ui-customize-tooltips/
     Errors: {
       Dzc:            "Sorry, we don't support Deep Zoom Collections!",
       Dzi:            "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
       Xml:            "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
       ImageFormat:    "Sorry, we don't support {0}-based Deep Zoom Images.",
       Security:       "It looks like a security restriction stopped us from " +
                       "loading this Deep Zoom Image.",
       Status:         "This space unintentionally left blank ({0} {1}).",
       OpenFailed:     "Unable to open {0}: {1}"
     }
     */
    translate: function () {
      if (!this.i18n || !this.messages) {
        return
      }

      const _messages = this.i18n.messages[this.i18n.locale]
      for (const label in this.messages) {
        OpenSeadragon.setString(label, this.resolve(_messages, this.messages[label]))
      }
    }
  }

})
