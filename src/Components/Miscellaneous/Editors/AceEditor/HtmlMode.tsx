import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { HTMLModeHeading } from "@/utils/Constant";
import { Highlight, themes } from "prism-react-renderer";
import { htmlData } from "@/Data/Editor/EditorData";

const HtmlMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={HTMLModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={htmlData} language="HTML">
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

export default HtmlMode;
