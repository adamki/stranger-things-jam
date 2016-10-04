import React, { Component } from 'react';

import {
  Analyser,
  Song,
  Sequencer,
  Sampler,
  Synth,
  Reverb,
  LFO
} from '../src';

import Polysynth from './polysynth';
import Visualization from './visualization';

import './index.css';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
    };

    this.handleAudioProcess = this.handleAudioProcess.bind(this);
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
  }
  handleAudioProcess(analyser) {
    this.visualization.audioProcess(analyser);
  }
  handlePlayToggle() {
    this.setState({
      playing: !this.state.playing,
    });
  }
  render() {
    return (
      <div>
        <Song
          playing={this.state.playing}
          tempo={130}
        >
          <Analyser onAudioProcess={this.handleAudioProcess}>
            <Sequencer resolution={8} bars={8} >
              <Sampler
                sample="/samples/kick.wav"
                steps={[0, 1, 3, 8, 9, 10, 16, 17, 19, 24, 25, 27, 32, 33, 35, 40, 41, 43, 48, 49, 51, 56, 57, 59]}
              />
              <Sampler
                sample="/samples/snare.wav"
                steps={[4, 12, 20, 28, 36, 44, 52]}
              />
              <Sampler
                sample="/samples/hihat.wav"
                steps={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, , 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ,54 ,55, 56, 57, 58, 59, 60, 61, 62, 63, 64]}
              />
              <Reverb wetLevel={1}>
                <Synth
                  type="sine"
                  steps={[
                    [0, 32, "c6"],

                    [0, 2, "c3"],
                    [1, 2, "e3"],
                    [2, 2, "g3"],
                    [3, 2, "b3"],
                    [4, 2, "c4"],
                    [5, 2, "b3"],
                    [6, 2, "g3"],
                    [7, 2, "e3"],

                    [8, 2, "c3"],
                    [9, 2, "e3"],
                    [10, 2, "g3"],
                    [11, 2, "b3"],
                    [12, 2, "c4"],
                    [13, 2, "b3"],
                    [14, 2, "g3"],
                    [15, 2, "e3"],

                    [16, 2, "c3"],
                    [17, 2, "e3"],
                    [18, 2, "g3"],
                    [19, 2, "b3"],
                    [20, 2, "c4"],
                    [21, 2, "b3"],
                    [22, 2, "g3"],
                    [23, 2, "e3"],

                    [24, 2, "c3"],
                    [25, 2, "e3"],
                    [26, 2, "g3"],
                    [27, 2, "b3"],
                    [28, 2, "c4"],
                    [29, 2, "b3"],
                    [30, 2, "g3"],
                    [31, 2, "e3"],

                    [32, 2, "c3"],
                    [33, 2, "e3"],
                    [34, 2, "g3"],
                    [35, 2, "b3"],
                    [36, 2, "c4"],
                    [37, 2, "b3"],
                    [38, 2, "g3"],
                    [39, 2, "e3"],

                    [40, 2, "b2"],
                    [41, 2, "e3"],
                    [42, 2, "g3"],
                    [43, 2, "b3"],
                    [44, 2, "c4"],
                    [45, 2, "b3"],
                    [46, 2, "g3"],
                    [47, 2, "e3"],

                    [48, 2, "b2"],
                    [49, 2, "e3"],
                    [50, 2, "g3"],
                    [51, 2, "b3"],
                    [52, 2, "c4"],
                    [53, 2, "b3"],
                    [54, 2, "g3"],
                    [55, 2, "e3"],

                    [56, 2, "b2"],
                    [57, 2, "e3"],
                    [58, 2, "g3"],
                    [59, 2, "b3"],
                    [60, 2, "c4"],
                    [61, 2, "b3"],
                    [62, 2, "g3"],
                    [63, 2, "e3"],
                  ]}
                />
                <Synth
                  type="sawtooth"
                  steps={[
                    [0, 2, "c2"],
                    [1, 2, "c2"],
                    [7, 2, "c2"],
                    [8, 2, "c2"],
                    [15, 2, "c2"],
                    [16, 2, "c2"],
                    [23, 2, "c2"],
                    [24, 2, "c2"],
                    [31, 2, "c2"],
                    [32, 2, "c2"],
                    [36, 4, "d2"],
                    [40, 16, "e2", "e1"],
                    [52, 8, "e2"],
                    [60, 4, "d2"],
                  ]}
                />
              </Reverb>
            </Sequencer>
          </Analyser>
        </Song>

        <Visualization ref={(c) => { this.visualization = c; }} />

        <button
          className="react-music-button"
          type="button"
          onClick={this.handlePlayToggle}
        >
          {this.state.playing ? 'lame' : 'lit'}
        </button>
      </div>
    );
  }
}
