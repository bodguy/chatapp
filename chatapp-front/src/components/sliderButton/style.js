import styled from 'styled-components';

export const SliderControl = styled.label`
  cursor: pointer;
  background: white;
  border-radius: 40px;
  display: block;
  width: ${props => props.size === 'small' ? '20px' : '34px'};
  height: ${props => props.size === 'small' ? '20px' : '34px'};
  margin-left: ${props => props.size === 'small' ? '2px' : '4px'};
  margin-bottom: ${props => props.size === 'small' ? '1px' : '0px'};
  position: relative;
  transition: .2s cubic-bezier(.55,0,.1,1);
  box-shadow: -1px 2px 2px 0px rgba(0,0,0,0.35);
  z-index: 2;
`;

export const SliderContainer = styled.div`
  background: #bdc3c7;
  border-radius: 40px;
  border: 1px solid #bdc3c7;
  width: ${props => props.size === 'small' ? '38px' : '70px'};
  height: ${props => props.size === 'small' ? '22px' : '40px'};
  position: relative;
  transform: ${props => props.size === 'small' ? 'translateY(-23px)' : 'translateY(-38px)'};
  transition: .2s cubic-bezier(.55,0,.1,1);
`;

export const SliderToggle = styled.div`
  > input { display:none; }
  
  > input:checked + ${SliderControl} { 
    transform: ${props => props.size === 'small' ? 'translate(16px)' : 'translate(30px)'};
    transition: .2s cubic-bezier(.55,0,.1,1);
  }

  > input:checked ~ ${SliderContainer} { 
    background: #2ecc71;
    border: 1px solid #2ecc71;
    transition: .2s cubic-bezier(.55,0,.1,1);
  }
`;