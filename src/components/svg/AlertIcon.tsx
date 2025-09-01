import Svg, { SvgProps, Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
const AlertIcon = ({ fill, ...props }: SvgProps) => (
  <Svg width="800px" height="800px" viewBox="-1 0 30 30" {...props}>
    <Defs />
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="Icon-Set"
        transform="translate(-362.000000, -880.000000)"
        fill={fill ?? "#000000"}
      >
        <Path
          d="M365,904 L368,898 L368,890 C368,885.582 371.582,882 376,882 C380.418,882 384,885.582 384,890 L384,898 L387,904 L365,904 L365,904 Z M376,908 C374.695,908 373.597,907.163 373.184,906 L378.816,906 C378.403,907.163 377.305,908 376,908 L376,908 Z M386,898 L386,890 C386,884.478 381.522,880 376,880 C370.478,880 366,884.478 366,890 L366,898 L362,906 L371.101,906 C371.564,908.282 373.581,910 376,910 C378.419,910 380.436,908.282 380.899,906 L390,906 L386,898 L386,898 Z"
          id="alert"
        />
      </G>
    </G>
  </Svg>
);
export default AlertIcon;
