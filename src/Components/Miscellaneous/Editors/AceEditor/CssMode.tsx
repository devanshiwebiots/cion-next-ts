import { Card, CardBody, Col } from "reactstrap";
import { CSSModeHeading } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { Highlight, themes } from "prism-react-renderer";
import { cssData } from "@/Data/Editor/EditorData";

const CssMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={CSSModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={cssData} language="css">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CssMode;
