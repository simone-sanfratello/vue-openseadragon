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
     @see https://openseadragon.github.io/examples/ui-customize-tooltips/
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
