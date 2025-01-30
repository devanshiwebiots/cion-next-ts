import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { JavaModeHeading } from '@/utils/Constant'
import { Highlight, themes } from "prism-react-renderer";
import { typeScriptData } from '@/Data/Editor/EditorData';

const JavaMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={JavaModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={typeScriptData} language="Java">
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
}

export default JavaMode