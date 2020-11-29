import styled from 'styled-components';

export const ProgressContainer = styled.div`
  background-color: ${props => props.theme.color.background};
  border-radius: 50%;
  display: inline-block;
  height: ${props => props.size};
  position: relative;
  width: ${props => props.size};

  &:before {
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    content: '${props => props.progress.toString() + '%'}';
    display: flex;
    font-size: 0.8rem;
    justify-content: center;
    position: absolute;
    left: 0.25rem;
    right: 0.25rem;
    top: 0.25rem;
    bottom: 0.25rem;
  }

  &:after {
    background-color: #0083ff;
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
  }
`;

// $step      = 1
// $loops     = round(100 / $step)
// $increment = 360 / $loops
// $half      = round($loops / 2)

// for $i in (0)..($loops)
//   .progress-circle[data-progress={'"'+$i * $step+'"'}]:after
//     if $i < $half
//       $next-deg = 90deg + $increment * $i
//       background-image linear-gradient(90deg, $back-color 50%, transparent 50%, transparent), linear-gradient($next-deg, $theme-color 50%, $back-color 50%, $back-color)
//     else
//       $next-deg = -90deg + $increment * ($i - $half)
//       background-image linear-gradient($next-deg, $theme-color 50%, transparent 50%, transparent), linear-gradient(270deg, $theme-color 50%, $back-color 50%, $back-color)
