# emojimation
<br/>

<div align="center">
<a href="https://ekatzenstein.github.io/emojimation" target="_blank"/>
	<img width="500" src="https://github.com/ekatzenstein/emojimation/blob/master/emoji.gif?raw=true" alt="chalk">
</a>
</div>

### About
<strong>emojimation</strong> is a React component that enables tweening between different emoji expressions. Since it's SVG interpolation on path components, the emojis are of infinite resolution and can be used as a lightweight tool to convey tone and narrative.


### Getting Started

#### Install
```npm install --save emojimation```

#### Component
At the minimum, you can call the component with `<Emojimation/>` and it will load with the default 'joy' emotion. Here's a more detailed version.

``` <Emojimation emotion="joy" duration={800} width="30vh" height="30vh" style={{margin:'20px'}} headColor="yellow"/> ```

### Documentation and Samples
For a full list of attributes and all 44 emotions, see the [Documentation Site](https://ekatzenstein.github.io/emojimation/)


### More
This component was built for the [React Riot Hackathon](https://www.reactriot.com/entries/301-reactmeisters), where our team took home the Innovation Award :D. While it was built as tool for [sentiment analysis](https://www.ibm.com/watson/developercloud/tone-analyzer.html), SVG tweening can be used for a variety of other things. These drawings were built in a CAD environment, using [Grasshopper](http://www.grasshopper3d.com/) for [Rhino](https://www.rhino3d.com/) and then converted to a json file for the front-end. Please reach out if you'd like to collaborate on animated transitions for data visualization and interaction.

### Props
The React Riot Hackathon was a team collaboration with:
* [Josh Goldmeier](https://github.com/joshuagoldmeier)
* [Mike Kaplun](https://github.com/mishaetaya)
* [Kaushik Nagaraj](https://github.com/knxyzkn)

Also, props to [d3](https://d3js.org/) and the awesome React version, [resonance](https://www.npmjs.com/package/resonance), for making the transitions agree with the React paradigm.
