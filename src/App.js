import React from 'react';
import classnames from 'classnames';


import './index.css';
import './hover.css';
import Emojimation from './components/Emojimation/Emojimation';

import emotions from './util/emotions.json';


import Codemirror from 'react-codemirror';
import 'codemirror/theme/neo.css'; //code mirror theme
import 'codemirror/lib/codemirror.css'; //css install for code editor
import 'codemirror/mode/htmlmixed/htmlmixed';


const emos = [
  { name: 'joy', headColor: 'yellow', class: 'yellowbg' },
  { name: 'fear', headColor: 'darkorange', class: 'orangebg' },
  { name: 'anger', headColor: 'red', class: 'redbg', eyeColor: 'yellow', mouthColor: 'rgb(255,255,0)', browColor: 'yellow' },
  { name: 'disgust', headColor: 'yellowgreen', class: 'greenbg', eyeColor: 'brown', mouthColor: 'brown', browColor: 'brown' },
  { name: 'sadness', headColor: 'slateblue', class: 'bluebg' },
  { name: 'grimacing', headColor: 'orange', class: 'orangebg', eyeColor: 'lightgrey', mouthColor: 'lightgrey', browColor: 'lightgrey' },
  { name: 'grin', headColor: 'gold', class: 'yellowbg' },
  { name: 'smiley', headColor: 'yellow', class: 'yellowbg' },
  { name: 'smile', headColor: 'khaki', class: 'yellowbg' },
  { name: 'laughing', headColor: 'yellow', class: 'yellowbg', eyeColor: 'cyan', mouthColor: 'cyan', browColor: 'cyan' },
  { name: 'wink', headColor: 'lightsalmon', class: 'yellowbg' },
  { name: 'slightly_smiling_face', headColor: 'khaki', class: 'yellowbg' },
  { name: 'upside_down_face', headColor: 'khaki', class: 'yellowbg' },
  { name: 'relaxed', headColor: 'peachpuff', class: 'yellowbg' },
  { name: 'blush', headColor: 'tomato', class: 'yellowbg' },
  { name: 'yum', headColor: 'orange', class: 'yellowbg' },
  { name: 'relieved', headColor: 'navajowhite', class: 'yellowbg', eyeColor: 'purple', mouthColor: 'purple', browColor: 'purple' },
  { name: 'heart_eyes', headColor: 'yellow', class: 'yellowbg', eyeColor: 'red' },
  { name: 'kissing_heart', headColor: 'yellow', class: 'yellowbg' },
  { name: 'kissing', headColor: 'yellow', class: 'yellowbg' },
  { name: 'kissing_smiling_eyes', headColor: 'yellow', class: 'yellowbg' },
  { name: 'kissing_closed_eyes', headColor: 'yellow', class: 'yellowbg' },
  { name: 'stuck_out_tongue_winking_eye', headColor: 'orange', class: 'orangebg' },
  { name: 'stuck_out_tongue_closed_eyes', headColor: 'orange', class: 'orangebg' },
  { name: 'stuck_out_tongue', headColor: 'orange', class: 'orangebg' },
  { name: 'sunglasses', headColor: 'yellow', class: 'yellowbg' },
  { name: 'smirk', headColor: 'green', class: 'greenbg' },
  { name: 'no_mouth', headColor: 'dimgray', class: 'greenbg', eyeColor: 'rgb(255,255,255)' },
  { name: 'neutral_face', headColor: 'cadetblue', class: 'greenbg', eyeColor: 'white', mouthColor: 'white', browColor: 'white' },
  { name: 'expressionless', headColor: 'yellow', class: 'greenbg' },
  { name: 'disappointed', headColor: 'midnightblue', class: 'bluebg' },
  { name: 'worried', headColor: 'midnightblue', class: 'bluebg', eyeColor: 'white', mouthColor: 'rgb(255,255,255)', browColor: 'white' },
  { name: 'pensive', headColor: 'slateblue', class: 'bluebg' },
  { name: 'confused', headColor: 'darkslateblue', class: 'bluebg' },
  { name: 'slightly_frowning_face', headColor: 'darkslateblue', class: 'bluebg' },
  { name: 'white_frowning_face', headColor: 'darkslateblue', class: 'bluebg' },
  { name: 'persevere', headColor: 'darkslategray', class: 'bluebg', eyeColor: 'cyan', mouthColor: 'rgb(255,255,0)', browColor: 'magenta' },
  { name: 'tired_face', headColor: 'darkslategray', class: 'bluebg', eyeColor: 'white', mouthColor: 'white', browColor: 'white' },
  { name: 'weary', headColor: 'teal', class: 'orangebg' },
  { name: 'open_mouth', headColor: 'orange', class: 'orangebg' },
  { name: 'hushed', headColor: 'orange', class: 'orangebg' },
  { name: 'frowning', headColor: 'chocolate', class: 'orangebg' },
  { name: 'anguished', headColor: 'maroon', class: 'orangebg', eyeColor: 'yellow', mouthColor: 'yellow', browColor: 'yellow' },
  { name: 'dizzy_face', headColor: 'darkorange', class: 'orangebg' },
]


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      emotion: 'joy',
      code: `<Emojimation
emotion="joy" duration={800}
width="30vh" height="30vh" style={{margin:'20px'}}
headColor="yellow"
/>`,
      headColor: 'yellow',
      tongueColor: 'red',
      eyeColor: 'black',
      mouthColor: 'black',
      browColor: 'black'
    }
  }
  _mouseOver(emotion) {
    const em = emos[emos.map(emo => emo.name).indexOf(emotion)]
    const headColor = em.headColor;
    const eyeColor = em.eyeColor;
    const browColor = em.browColor;
    const mouthColor = em.mouthColor;

    const code = `<Emojimation
emotion="${emotion}" duration={800}
width="30vh" height="30vh" style={{margin:'20px'}}
headColor="${headColor}" ${eyeColor ? `eyeColor="${eyeColor}"` : ''} ${browColor ? `browColor="${browColor}"` : ''} ${mouthColor ? `mouthColor="${mouthColor}"` : ''}
/>`;

    this.setState({ emotion, code, headColor, eyeColor, browColor, mouthColor })
  }
  render() {


    console.log(this.state.emotion)

    const options = {
      lineNumbers: false,
      readOnly: true,
      mode: 'htmlmixed',
      theme: 'material',
      lineWrapping: true
    };

    return (
      <div>
        <Emojimation emotion={this.state.emotion} width={'30vh'} height={'30vh'} style={{ position: 'fixed', marginLeft: 'calc(calc(100% - 30vh) / 2)', marginTop: '20px', zIndex: 10 }} headColor={this.state.headColor} tongueColor={this.state.tongueColor} eyeColor={this.state.eyeColor} browColor={this.state.browColor} mouthColor={this.state.mouthColor}
          duration={800}
        />
        <div style={{ marginTop: '30vh', paddingTop: '40px', position: 'absolute' }}>
          <h2 style={{ textAlign: 'center' }}>Emojimation</h2><h3 style={{ textAlign: 'center' }} ><a href="npmjs.com/emoijimation" target="_blank">npm</a> | <a href="https://github.com/ekatzenstein/emojimation" target="_blank">github</a></h3>

          <div style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>
            {Object.keys(emotions).map(key => {
              const emo = emos[emos.map(emo => emo.name).indexOf(key)];
              return (
                <span key={key}
                  className={classnames({
                    "emoButton": true,
                    "yellowbg": emo.class === 'yellowbg',
                    "greenbg": emo.class === 'greenbg',
                    "bluebg": emo.class === 'bluebg',
                    "orangebg": emo.class === 'orangebg',
                    "redbg": emo.class === 'redbg',
                    "hvr-wobble-skew": emo.class === 'orangebg',
                    "hvr-buzz-out": emo.class === 'redbg',
                    "hvr-hang": emo.class === 'bluebg',
                    "hvr-wobble-top": emo.class === 'greenbg',
                    "hvr-wobble-vertical": emo.class === 'yellowbg',
                    "hvr-shadow": true,
                    "enter": this.state.emotion === key
                  })}
                  style={{
                    backgroundColor: this.state.emotion === key ? emo.headColor : 'lightgray'
                  }}
                  onMouseOver={() => this._mouseOver(key)}>
                  {key}
                </span>
              )
            })}
          </div>
          <h2 className="attHeader">Code Sample</h2>
          <div className="emoButton" style={{ padding: '10px', height: 'auto', overflow: 'none', margin: '0 auto', width: '50%', marginLeft: '25%', marginTop: '10px' }}>
            <Codemirror
              key={this.state.emotion}
              value={this.state.code}
              options={options}
              viewportMargin={Infinity}
            />
          </div>
          <div id="attributes">
            <h2 className="attHeader">React Attributes</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>emotion</td>
                  <td>string</td>
                  <td>joy</td>
                  <td>render the emoji emotion</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>string</td>
                  <td>200px</td>
                  <td>set responsive width, using css units (px, %, vh, etc.)</td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>string</td>
                  <td>200px</td>
                  <td>set responsive height, using css units (px, %, vh, etc.)</td>
                </tr>
                <tr>
                  <td>duration</td>
                  <td>number</td>
                  <td>800</td>
                  <td>duration of transition</td>
                </tr>
                <tr>
                  <td>headColor</td>
                  <td>color</td>
                  <td>yellow</td>
                  <td>set css color for head</td>
                </tr>
                <tr>
                  <td>mouthColor</td>
                  <td>color</td>
                  <td>black</td>
                  <td>set css color for mouth</td>
                </tr>
                <tr>
                  <td>eyeColor</td>
                  <td>color</td>
                  <td>black</td>
                  <td>set css color for eyes</td>
                </tr>
                <tr>
                  <td>browColor</td>
                  <td>color</td>
                  <td>black</td>
                  <td>set css color for eyebrows</td>
                </tr>
                <tr>
                  <td>tongueColor</td>
                  <td>color</td>
                  <td>black</td>
                  <td>set css color for tongue (or other attributes, like kisses)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}