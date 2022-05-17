import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
import Color from 'src/theme/Color';

const RankIcon = props => (
  <Svg
    width={props.size ? props.size : 25}
    height={props.size ? props.size : 25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.568 20.962 12.5 19.497l-5.068 1.465a.595.595 0 0 0-.059.278v3.028h10.254V21.24a.595.595 0 0 0-.059-.278Z"
      fill={props.isActive ? '#517C5D' : '#B9BCD2'}
    />
    <Path
      d="M17.627 24.268V21.24a.595.595 0 0 0-.059-.278L12.5 19.497v4.77h5.127Z"
      fill={props.isActive ? '#517C5D' : '#B9BCD2'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.525 1.465h3.743c.404 0 .732.327.732.732v1.856c0 4.087-3.273 7.407-7.306 7.624-.842 1.159-1.846 2.018-2.982 2.503.176 3.574 2.197 6.035 2.695 6.548a.52.52 0 0 1 .161.234H7.432a.52.52 0 0 1 .16-.234c.484-.513 2.52-2.989 2.696-6.548-1.136-.484-2.134-1.344-2.975-2.502C3.276 11.464 0 8.142 0 4.053V2.197c0-.405.328-.732.732-.732h3.743a9.187 9.187 0 0 0-.015-.312c-.008-.138-.017-.276-.017-.42 0-.41.323-.733.733-.733h14.648c.41 0 .733.322.733.732 0 .145-.009.283-.017.422a9.186 9.186 0 0 0-.015.31ZM1.465 2.93v1.123c0 2.951 2.125 5.417 4.891 6.04C5.253 7.914 4.728 5.35 4.538 2.93H1.465Zm17.183 7.162c2.764-.624 4.887-3.09 4.887-6.04V2.93h-3.073c-.192 2.444-.72 4.983-1.814 7.162ZM12.5 8.709l1.169.607a.731.731 0 0 0 1.06-.77l-.215-1.3.937-.925a.73.73 0 0 0-.405-1.246l-1.301-.196-.59-1.178c-.249-.497-1.061-.497-1.31 0l-.59 1.178-1.301.196a.734.734 0 0 0-.405 1.246l.937.925-.215 1.3a.731.731 0 0 0 1.06.77L12.5 8.71Z"
      fill={props.isActive ? Color.GREEN : '#D9DBE9'}
    />
    <Path
      d="M18.36 25H6.64a.732.732 0 1 1 0-1.465h11.72a.732.732 0 1 1 0 1.465Z"
      fill={props.isActive ? '#517C5D' : '#B9BCD2'}
    />
  </Svg>
);

export default RankIcon;