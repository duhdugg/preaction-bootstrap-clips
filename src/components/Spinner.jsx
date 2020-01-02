import PropTypes from 'prop-types'
import React from 'react'
import '../stylesheets/spin.css'

const svg =
  "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='20cm' height='20cm' viewBox='0 0 200 200' version='1.1' id='svg8' inkscape:version='0.92.2 2405546, 2018-03-11' sodipodi:docname='spinner.svg'%3E %3Cdefs id='defs2' /%3E %3Csodipodi:namedview id='base' pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1.0' inkscape:pageopacity='0.0' inkscape:pageshadow='2' inkscape:zoom='1' inkscape:cx='377.073' inkscape:cy='377.41871' inkscape:document-units='mm' inkscape:current-layer='layer1' showgrid='false' units='cm' fit-margin-top='0' fit-margin-left='0' fit-margin-right='0' fit-margin-bottom='0' inkscape:window-width='1862' inkscape:window-height='1051' inkscape:window-x='1920' inkscape:window-y='0' inkscape:window-maximized='1' showguides='false' /%3E %3Cmetadata id='metadata5'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E %3Cdc:title%3E%3C/dc:title%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1' transform='translate(-0.11799622,0.01718903)'%3E %3Ccircle style='fill:%23000000;stroke-width:0.3106536' id='path16' cx='43.617996' cy='127.48281' r='37.5' /%3E %3Ccircle style='fill:%23000000;stroke-width:0.3106536' id='path16-2' cx='156.618' cy='127.48281' r='37.5' /%3E %3Ccircle style='fill:%23000000;stroke-width:0.3106536' id='path16-7' cx='99.853409' cy='37.218224' r='37.5' /%3E %3C/g%3E %3C/svg%3E"

class Spinner extends React.Component {
  get containerStyle() {
    return {
      margin: 'auto'
    }
  }
  get fontSize() {
    return Number(this.props.fontSize) || 0.8
  }
  get imageStyle() {
    return {
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
  get size() {
    return Number(this.props.size) || 1
  }
  get spinnerContainerStyle() {
    return {
      display: 'block',
      width: this.getEmSize(1),
      height: this.getEmSize(1),
      margin: this.props.overlay ? 'auto' : undefined
    }
  }
  get spinnerStyle() {
    return {
      display: 'block',
      width: '100%',
      height: '100%',
      animation: 'spin 1s ease-in-out infinite'
    }
  }
  get textStyle() {
    return {
      display: 'block',
      fontSize: this.fontSize + 'em'
    }
  }
  get topStyle() {
    let style = {}
    if (this.props.overlay) {
      Object.assign(style, {
        backgroundColor: '#ffffff88',
        display: 'flex',
        height: '100%',
        left: 0,
        opacity: 0.85,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 9999
      })
    } else {
      style.display = 'inline-block'
    }
    return style
  }
  getEmSize(multipler) {
    return `${this.size * multipler}rem`
  }
  render() {
    return (
      <span style={this.topStyle}>
        <span style={this.containerStyle}>
          <span style={this.spinnerContainerStyle}>
            <span style={this.spinnerStyle}>
              <img
                src={svg}
                width='100%'
                height='100%'
                alt='please wait'
                style={this.imageStyle}
              />
            </span>
          </span>
          <span style={this.textStyle}>{this.props.text}</span>
        </span>
      </span>
    )
  }
}

Spinner.propTypes = {
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overlay: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.node
}

export default Spinner
