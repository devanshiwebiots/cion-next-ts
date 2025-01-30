"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Chat, ChatApp } from "@/utils/Constant";
import UserChatting from "./UserChatting";
import axios from "axios";
import { useEffect } from "react";
import { ChatApi, ChatMemberApi } from "@/Api";
import { useAppDispatch } from "@/Redux/Hooks";
import { setAllMembers, setChats } from "@/Redux/Reducer/ChatSlice";
import ChatStatus from "../VideoChat/ChatStatus/ChatStatus";

const ChatingContainer = () => {
 const dispatch = useAppDispatch();
  const getChatMembersData = async () => {
    try {
      await axios.get(ChatMemberApi).then((resp) => {
        dispatch(setAllMembers(resp.data));
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getChatData = async () => {
    try {
      await axios.get(ChatApi).then((resp) => {
        dispatch(setChats(resp.data.data));
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getChatData();
    getChatMembersData();
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={ChatApp} parent={Chat} title={ChatApp} />
      <Container fluid>
        <Row>
          <Col sm={12} className="call-chat-sidebar">
            <Card>
              <CardBody className="chat-body">
                <ChatStatus />
              </CardBody>
            </Card>
          </Col>
          <Col className="call-chat-body">
            <Card>
              <CardBody className="p-0">
                <UserChatting />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatingContainer;
