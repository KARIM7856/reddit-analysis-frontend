import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

const WordCloudGraph = (props) =>{

  return(
    <div>

 
    <WordCloud
      data={props.data.data}
      width={500}
      height={500}
      font="Arial"
      fontStyle="italic"
      fontWeight="bold"
      fontSize={(word) => Math.log2(word.value) * 3}
      spiral="archimedean"
      rotate={(word) => word.value % 360}
      padding={1}
      random={Math.random}
      fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      onWordClick={(event, d) => {
        console.log(`onWordClick: ${d.text}`);
      }}
      onWordMouseOver={(event, d) => {
        console.log(`onWordMouseOver: ${d.text}`);
      }}
      onWordMouseOut={(event, d) => {
        console.log(`onWordMouseOut: ${d.text}`);
      }}
    />
     </div>
  );
}

export default WordCloudGraph;

