import styled from 'styled-components';
import logo from '../../assets/img/ImersaoReact.svg';

const LogoImersao = styled.img.attrs({
  src: logo,
  alt: 'logo da imersãi react',
})`
  height: 30px;
  vertical-align: middle;
`;
export default LogoImersao;
