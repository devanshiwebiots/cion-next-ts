import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import CommonHeader from "@/Common/CommonHeader";
import { JavascriptModeHeading } from "@/utils/Constant";
import { javaData } from "@/Data/Editor/EditorData";

const JavascriptMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={JavascriptModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={javaData} language="javascript">
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

export default JavascriptMode;
