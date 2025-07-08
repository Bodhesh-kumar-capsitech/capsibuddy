import { useState } from "react";
import { Button } from "antd";
import CreateTicketForm from "./CreateTicketForm";
import CreateLeadForm from "./CreateLeadForm";
import type { LeadFormValues } from "./CreateLeadForm";
import Viewlead from "./Viewlead";
import Createteammenber from "./Createteammember";
import Createteam from "./Createteam";
import Newquestion from "./Newquestion";
import ChatModal from "./ChatModal";

export default function Modalcall() {
  const [modalType, setModalType] = useState<"ticket" | "lead"| "View" | "Createteammember" | "Createteam" | "Newques" | "chatui" |null>(null);

  const openTicketModal = () => setModalType("ticket");
  const openLeadModal = () => setModalType("lead");
  const openViewModal = () => setModalType("View");
  const openCreateteammemberModal = () => setModalType("Createteammember");
  const openCreateteamModal = () => setModalType("Createteam");
  const openNewquesModal = () => setModalType("Newques")
  const openChatModal = () => setModalType("chatui")

  const handleClose = () => setModalType(null);

  const handleSubmit = (formData: LeadFormValues) => {
    console.log("Ticket Submitted", formData);
    handleClose();
  };
  

  function onOk(): void {
    throw new Error("Function not implemented.");
  }


  return (
    <div className="container mx-auto p-4">
      <Button type="primary" onClick={openTicketModal}>
        Open Create Ticket Modal
      </Button>
      <br/><br/>
      <Button type="primary" onClick={openLeadModal}>
        Open Create Lead
      </Button>
      <br /><br />
      <Button type="primary" onClick={openViewModal}>
          View Lead
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={openCreateteammemberModal}>
        Create Teammember
      </Button>
      <br />
      <br />
       <Button type="primary" onClick={openCreateteamModal}>
        Create Team
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={openNewquesModal}>
        New question
      </Button>
      <br />
      <br />
        <img
    src="Objects.png"
    alt="Chatbot"
    onClick={openChatModal}
    className="h-[60px] w-[60px] object-contain hover:cursor-pointer"
  />

      {modalType === "ticket" && (
        <CreateTicketForm
          open={true}
          onCancel={handleClose}
          onSubmit={handleSubmit}
        />
      )}

      {modalType === "lead" && (
        <CreateLeadForm
          open={true}
          onCancel={handleClose}
          onSubmit={(data) => {
            console.log("Lead Submitted", data);
            handleClose();
          }}
        />
      )}

      {modalType === "View" && (
        <Viewlead open={true}
        onCancel={handleClose}
      onOk={() => onOk()} />
      )}

      {modalType === "Createteammember" && (
        <Createteammenber open={true}
        onCancel={handleClose}
      onOk={() => onOk()} />
      )}

      {modalType === "Createteam" && (
        <Createteam open={true}
        onCancel={handleClose}
      onOk={() => onOk()} />
      )}

       {modalType === "Newques" && (
        <Newquestion open = {true}
        onCancel={handleClose}
        onOk={() => onOk()}/>
      )}

      {modalType === "chatui" && (
        <ChatModal open = {true}
        onClose={handleClose}/>
      )}


    </div>
  );
}

