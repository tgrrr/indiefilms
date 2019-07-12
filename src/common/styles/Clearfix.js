import styled from 'styled-components';

const Clearfix = styled.div`
  :: after {
    content: "";
    clear: both;
    display: table;
}`;

export default Clearfix;
